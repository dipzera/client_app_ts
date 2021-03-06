import React, { useEffect, useState } from "react";
import { Input, Row, Col, Form, Modal } from "antd";
import IntlMessage from "../../../../components/util-components/IntlMessage";
import { ROW_GUTTER } from "../../../../constants/ThemeConstant";
import { AppService } from "../../../../api/app";
import { IUsers } from "../../../../api/app/types";
interface IUserModalEdit {
  data: IUsers;
  visible: boolean;
  onCancel: () => void;
  getUsersInfo: () => void;
}
export const UserModalEdit = ({
  data,
  visible,
  onCancel,
  getUsersInfo,
}: IUserModalEdit) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  /*  Destroy initialValues of form after Modal is closed */
  useEffect(() => {
    if (!visible) return;
    form.resetFields();
  }, [visible, form]);

  const onFinish = async (values: any) => {
    setLoading(true);
    return await new AppService()
      // @ts-ignore
      .UpdateUser({ User: { ...data, ...values } })
      .then((data) => {
        setLoading(false);
        if (data && data.ErrorCode === 0) {
          getUsersInfo();
        }
      });
  };

  return (
    <Modal
      destroyOnClose
      title={"Edit user"}
      visible={visible}
      onCancel={onCancel}
      confirmLoading={loading}
      onOk={() => {
        form.validateFields().then(async (values) => {
          await onFinish(values);
          onCancel();
        });
      }}
    >
      <Form
        form={form}
        name="basicInformation"
        layout="vertical"
        initialValues={data}
      >
        <Row gutter={ROW_GUTTER}>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label={<IntlMessage id={"account.EditProfile.FirstName"} />}
              name="FirstName"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label={<IntlMessage id={"account.EditProfile.LastName"} />}
              name="LastName"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label={<IntlMessage id={"account.EditProfile.Email"} />}
              name="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label={<IntlMessage id={"account.EditProfile.PhoneNumber"} />}
              name="PhoneNumber"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
