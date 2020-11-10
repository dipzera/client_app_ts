import {
    Modal,
    Avatar,
    Card,
    Col,
    Empty,
    Menu,
    message,
    Row,
    Tag,
    Button,
} from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EllipsisDropdown from "../../../components/shared-components/EllipsisDropdown";
import { APP_PREFIX_PATH } from "../../../configs/AppConfig";
import { API_IS_CLIENT_SERVICE } from "../../../constants/ApiConstant";
import { signOut } from "../../../redux/actions/Auth";
import {
    EyeOutlined,
    CheckCircleOutlined,
    VerticalAlignBottomOutlined,
    ClockCircleOutlined,
    DeleteOutlined,
    ExperimentOutlined,
} from "@ant-design/icons";
import Flex from "../../../components/shared-components/Flex";

const GridItem = ({ deactivateApp, data }) => {
    return (
        <Card>
            <Flex className="mb-3 " justifyContent="between">
                <Link to={`${APP_PREFIX_PATH}/applications/${data.ID}`}>
                    <div className="cursor-pointer">
                        <Avatar
                            src={data.Photo}
                            icon={<ExperimentOutlined />}
                            shape="square"
                            size={60}
                        />
                    </div>
                </Link>
                    <Tag className="text-capitalize" color="cyan">
                        <CheckCircleOutlined />
                        <span className="ml-2 font-weight-semibold">
                            Installed
                        </span>
                    </Tag>
            </Flex>
            <div>
                <Link to={`${APP_PREFIX_PATH}/applications/${data.ID}`}>
                    <h3 className="mb-0 cursor-pointer ">{data.Name}</h3>
                </Link>
                <p className="text-muted">By IntelectSoft</p>
                <div style={{ minHeight: "70px" }}>{data.ShortDescription}</div>
            </div>
            <Flex justifyContent="between" alignItems="center">
                <div className="text-muted">Free</div>
                <Button
                    onClick={() => deactivateApp(data.ID)}
                    danger
                    type={"link"}
                    style={{
                        visibility: data.Status === 1 ? "visible" : "hidden",
                    }}
                >
                    Delete
                </Button>
            </Flex>
        </Card>
    );
};
const MyAppList = () => {
    const [apps, setApps] = useState<any>([]);
    const { confirm } = Modal;
    const Token = useSelector((state) => state["auth"].token);
    const dispatch = useDispatch();
    useEffect(() => {
        Axios.get(`${API_IS_CLIENT_SERVICE}/GetMarketAppList`, {
            params: { Token },
        }).then((res) => {
            console.log(res.data);
            const { ErrorCode, ErrorMessage, MarketAppList } = res.data;
            if (ErrorCode === 0) {
                const activeApps = MarketAppList.filter(
                    (marketApp) => marketApp.Status != 0
                );
                setApps(activeApps);
            } else if (ErrorCode === 118) {
                message
                    .loading("Time has expired... Redirecting!", 1.5)
                    .then(() => dispatch(signOut()));
            } else if (ErrorCode === -1) {
            }
        });
    }, []);

    const deactivateApp = (AppID) => {
        confirm({
            title: `Are you sure you want to deactivate app with ID: ${AppID}?`,
            onOk: () => {
                Axios.post(`${API_IS_CLIENT_SERVICE}/DeactivateApp`, {
                    AppID,
                    Token,
                }).then((res) => {
                    console.log(res.data);
                    if (res.data.ErrorCode === 0) {
                        message
                            .success("Done!", 1.5)
                            .then(() =>
                                setApps(apps.filter((app) => app.ID != AppID))
                            );
                    } else if (res.data.ErrorCode === 118) {
                        message
                            .loading("Time has expired... Redirecting!", 1.5)
                            .then(() => dispatch(signOut()));
                    }
                });
            },
            onCancel: () => {},
        });
    };

    const deleteItem = (ID) => {};
    return (
        <>
            <div
                className={`my-4 
                    container-fluid`}
            >
                <Row gutter={16}>
                    {apps.length > 0 ? (
                        apps.map((elm) => (
                            <Col
                                xs={24}
                                sm={24}
                                lg={12}
                                xl={6}
                                xxl={6}
                                key={elm["ID"]}
                            >
                                <GridItem
                                    deactivateApp={deactivateApp}
                                    data={elm}
                                    key={elm["ID"]}
                                />
                            </Col>
                        ))
                    ) : (
                        <Flex justifyContent="center" className="w-100">
                            <Empty />
                        </Flex>
                    )}
                </Row>
            </div>
        </>
    );
};

export default MyAppList;
