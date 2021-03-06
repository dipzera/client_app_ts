import React, { Component } from "react";
import {
  Card,
  Table,
  Tag,
  Button,
  Modal,
  Menu,
  Input,
  Select,
  message,
} from "antd";
import {
  EyeOutlined,
  ArrowRightOutlined,
  PlusCircleOutlined,
  EditOutlined,
  SearchOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";
import UserView from "./UserView";
import AvatarStatus from "../../../../components/shared-components/AvatarStatus";
import { connect } from "react-redux";
import { UserModalEdit } from "./UserModalEdit";
import { UserModalAdd } from "./UserModalAdd";
import Utils from "../../../../utils";
import Flex from "../../../../components/shared-components/Flex";
import EllipsisDropdown from "../../../../components/shared-components/EllipsisDropdown";
import { AppService } from "../../../../api/app";
import IntlMessage from "../../../../components/util-components/IntlMessage";
import { IState } from "../../../../redux/reducers";
import { IAuth } from "../../../../redux/reducers/Auth";
import { IAccount } from "../../../../redux/reducers/Account";
import { ITheme } from "../../../../redux/reducers/Theme";
import TranslateText from "../../../../utils/translate";
import { IUsers } from "../../../../api/app/types";
import { ColumnsType } from "antd/lib/table";
import "./add_user.scss";
import { AuthService } from "../../../../api/auth";
import { EnErrorCode } from "../../../../api";
import { EMAIL_CONFIRM_MSG } from "../../../../constants/Messages";
export enum status {
  inactive = 0,
  active = 1,
  disabled = 2,
}
interface IUserListStoreProps {
  token?: string;
  locale?: string;
  CompanyID?: number;
  ID?: number;
  loading: boolean;
}

interface UserListStateProps {
  loading: boolean;
  users: IUsers[];
  usersToSearch: any;
  pageSize: number;
  selectedRows: any;
  selectedKeys: any;
  userProfileVisible: boolean;
  selectedUser: any;
  isHidden: string;
  editModalVisible: boolean;
  newUserModalVisible: boolean;
  registerUserModalVisible: boolean;
}

export class UserList extends Component<IUserListStoreProps> {
  state: UserListStateProps = {
    loading: true,
    pageSize: 10,
    users: [],
    usersToSearch: [],
    selectedRows: [],
    selectedKeys: [],
    userProfileVisible: false,
    selectedUser: null,
    isHidden: "block",
    editModalVisible: false,
    newUserModalVisible: false,
    registerUserModalVisible: false,
  };

  private instance = new AppService();
  private authInstance = new AuthService();
  getUsersInfo = async (params = {}) => {
    return this.instance.GetUserList().then((data) => {
      this.setState({ loading: false });
      if (data && data.ErrorCode === 0) {
        // Don't show current user in the list
        const filteredUsers = data.Users.filter(
          (user: any) => user.ID !== this.props.ID
        );

        // Always show last registered user first in the list
        const evaluatedArray = Utils.sortData(filteredUsers, "ID").reverse();

        this.setState({
          users: evaluatedArray,
          usersToSearch: evaluatedArray,
          pagination: {
            // @ts-ignore
            ...params.pagination,
            total: data.Users.length,
          },
        });
      }
    });
  };
  sendActivationCode = async (UserID: string) => {
    return this.authInstance.SendActivationCode(UserID).then((data) => {
      if (data && data.ErrorCode === EnErrorCode.NO_ERROR) {
        message.success({
          content: TranslateText(EMAIL_CONFIRM_MSG),
          key: "updatable",
          duration: 2,
        });
      }
    });
  };

  handleTableChange = (pagination: any, filters: any, sorter: any) => {
    this.getUsersInfo({ sortField: sorter.field, pagination, ...filters });
  };

  componentDidMount() {
    this.getUsersInfo();
  }

  componentWillUnmount() {
    this.instance._source.cancel();
  }

  showUserProfile = (userInfo: IUsers) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };
  closeUserViewProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  showEditModal = (userInfo: IUsers) => {
    this.setState({
      editModalVisible: true,
      selectedUser: userInfo,
    });
  };
  closeEditModal = () => {
    this.setState({
      editModalVisible: false,
      selectedUser: null,
    });
  };

  showNewUserModal = () => {
    this.setState({
      newUserModalVisible: true,
    });
  };

  closeNewUserModal = () => {
    this.setState({
      newUserModalVisible: false,
    });
  };

  toggleStatusRow = async (row: IUsers[], statusNumber: number) => {
    Modal.confirm({
      title: `Are you sure you want to ${
        statusNumber === 0 || statusNumber === 2 ? "disable" : "activate"
      } ${row.length} ${row.length > 1 ? "users" : "user"}?`,
      onOk: async () => {
        await Promise.all(
          row.map(async (elm: any) => {
            await this.handleUserStatus(elm.ID, statusNumber);
          })
        );
        this.setState({ selectedRows: [], selectedKeys: [] });
        this.getUsersInfo();
      },
    });
  };

  handleUserStatus = (userId: number, status: number) => {
    return this.instance.ChangeUserStatus(userId, status);
  };
  dropdownMenu = (row: any) => (
    <Menu>
      {row.Status === 0 && (
        <Menu.Item
          onClick={() =>
            Modal.confirm({
              title: `Are you sure you want to send an email to ${row.FirstName} ?`,
              onOk: () => {
                this.sendActivationCode(row.ID);
              },
              onCancel: () => {},
            })
          }
        >
          <Flex alignItems="center">
            <ArrowRightOutlined />
            <span className="ml-2">
              <IntlMessage id={"users.SendCode"} />
            </span>
          </Flex>
        </Menu.Item>
      )}
      <Menu.Item onClick={() => this.showUserProfile(row)}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">
            <IntlMessage id={"users.ViewDetails"} />
          </span>
        </Flex>
      </Menu.Item>
      <Menu.Item onClick={() => this.showEditModal(row)}>
        <Flex alignItems="center">
          <EditOutlined />
          <span className="ml-2">
            <IntlMessage id={"users.Edit"} />
          </span>
        </Flex>
      </Menu.Item>
      {row.Status === status.disabled ? (
        <Menu.Item
          onClick={async () => {
            Modal.confirm({
              title: `Are you sure you want to activate this user?`,
              onOk: async () => {
                await this.handleUserStatus(row.ID, status.active);
                await this.getUsersInfo();
              },
            });
          }}
        >
          <Flex alignItems="center">
            <CheckCircleOutlined />
            <span className="ml-2">
              <IntlMessage id={"users.Activate"} />
            </span>
          </Flex>
        </Menu.Item>
      ) : row.Status === status.active ? (
        <Menu.Item
          onClick={async () => {
            Modal.confirm({
              title: TranslateText("users.Disable.Title"),
              onOk: async () => {
                await this.handleUserStatus(row.ID, status.disabled);
                await this.getUsersInfo();
              },
            });
          }}
        >
          <Flex alignItems="center">
            <CloseCircleOutlined />
            <span className="ml-2">
              <IntlMessage id={"users.Disable"} />
            </span>
          </Flex>
        </Menu.Item>
      ) : null}
    </Menu>
  );

  onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const data = Utils.wildCardSearch(this.state.usersToSearch, value);
    this.setState({ users: data });
  };

  render() {
    const { users, userProfileVisible, selectedUser } = this.state;

    const tableColumns: ColumnsType<IUsers> = [
      {
        title: <IntlMessage id={"users.table.User"} />,
        dataIndex: "name",
        render: (_: any, record: IUsers) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.Photo}
              name={`${record.FirstName} ${record.LastName}`}
              subTitle={record.Email}
              icon={<UserOutlined />}
            />
          </div>
        ),
        sorter: (a, b) => {
          if (a.FirstName < b.FirstName) return -1;
          if (a.FirstName > b.FirstName) return 1;
          return 0;
        },
      },
      {
        title: <IntlMessage id={"users.table.Role"} />,
        render: () => "User",
      },
      {
        title: <IntlMessage id={"users.table.LastOnline"} />,
        dataIndex: "LastAuthorize",
        render: (LastAuthorize: any) => (
          <span>
            {LastAuthorize
              ? moment.unix(LastAuthorize.slice(6, 16)).format("DD/MM/YYYY")
              : " "}{" "}
          </span>
        ),
      },
      {
        title: <IntlMessage id={"users.table.Status"} />,
        dataIndex: "Status",
        render: (Status: number) => (
          <Tag
            className="text-capitalize"
            color={
              Status === status.active
                ? "cyan"
                : Status === status.disabled
                ? "red"
                : "orange"
            }
          >
            {Status === 1 ? (
              <IntlMessage id={"users.status.Active"} />
            ) : Status === 2 ? (
              <IntlMessage id={"users.status.Disabled"} />
            ) : (
              <IntlMessage id={"users.status.NotActivated"} />
            )}
          </Tag>
        ),
      },
      {
        dataIndex: "actions",
        render: (_: any, elm: IUsers) => (
          <div className="text-right">
            <EllipsisDropdown menu={this.dropdownMenu(elm)} />
          </div>
        ),
      },
    ];
    return (
      <Card>
        <Flex className="mb-1" mobileFlex={false} justifyContent="between">
          <div className="mr-md-3 mb-3">
            <Input
              placeholder={TranslateText("app.Search")}
              prefix={<SearchOutlined />}
              onChange={(e) => this.onSearch(e)}
            />
          </div>
          <div>
            <Flex>
              {this.state.selectedRows.length > 0 && (
                <>
                  <Button
                    type="primary"
                    className="mr-3"
                    onClick={() =>
                      this.toggleStatusRow(
                        this.state.selectedRows,
                        status.active
                      )
                    }
                  >
                    {this.state.selectedRows.length > 1 ? (
                      <>
                        <IntlMessage id={"users.Activate"} /> (
                        {this.state.selectedRows.length})
                      </>
                    ) : (
                      <IntlMessage id="users.Activate" />
                    )}
                  </Button>
                  <Button
                    type="ghost"
                    className="mr-3"
                    onClick={() =>
                      this.toggleStatusRow(
                        this.state.selectedRows,
                        status.disabled
                      )
                    }
                  >
                    {this.state.selectedRows.length > 1 ? (
                      <>
                        <IntlMessage id={"users.Disable"} /> (
                        {this.state.selectedRows.length})
                      </>
                    ) : (
                      <IntlMessage id={"users.Disable"} />
                    )}
                  </Button>
                </>
              )}
              <Button
                onClick={this.showNewUserModal}
                type="primary"
                icon={<PlusCircleOutlined />}
                block
              >
                {" "}
                <IntlMessage id={"users.Invite"} />
              </Button>
            </Flex>
          </div>
        </Flex>
        <Table
          loading={this.state.loading}
          columns={tableColumns}
          dataSource={users}
          rowKey="ID"
          pagination={{
            showSizeChanger: true,
            total: this.state.users.length,
            pageSize: this.state.pageSize,
            onShowSizeChange: (current, size) => {
              this.setState({ pageSize: size });
            },
          }}
          rowSelection={{
            onChange: (key, rows) => {
              this.setState({ selectedKeys: key });
              this.setState({ selectedRows: rows });
            },
            selectedRowKeys: this.state.selectedKeys,
            type: "checkbox",
            preserveSelectedRowKeys: false,
          }}
        />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserViewProfile();
          }}
        />
        <UserModalAdd
          getUsersInfo={this.getUsersInfo}
          onCancel={this.closeNewUserModal}
          visible={this.state.newUserModalVisible}
        />
        <UserModalEdit
          getUsersInfo={this.getUsersInfo}
          data={selectedUser}
          visible={this.state.editModalVisible}
          onCancel={() => {
            this.closeEditModal();
          }}
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ auth, theme, account }: IState) => {
  const { token, loading } = auth as IAuth;
  const { CompanyID, ID } = account as IAccount;
  const { locale } = theme as ITheme;
  return { token, locale, CompanyID, ID };
};

export default connect(mapStateToProps, null)(UserList);
