import * as React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button, Form, Input, Divider, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { GoogleSVG, FacebookSVG } from "../../../assets/svg/icon";
import CustomIcon from "../../../components/util-components/CustomIcon";
import {
  showLoading,
  showAuthMessage,
  hideAuthMessage,
  authenticated,
  authorizeUser,
  redirectTo,
} from "../../../redux/actions/Auth";
import { updateSettings, getProfileInfo } from "../../../redux/actions/Account";
import { motion } from "framer-motion";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { hideLoading } from "../../../redux/actions/Auth";
import Utils from "../../../utils";
import { API_PUBLIC_KEY } from "../../../constants/ApiConstant";
import IntlMessage from "../../../components/util-components/IntlMessage";
import { IState } from "../../../redux/reducers";
import { IAuth } from "../../../redux/reducers/Auth";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "../../../configs/AppConfig";

const LoginForm = ({
  otherSignIn,
  showForgetPassword,
  hideAuthMessage,
  onForgetPasswordClick,
  showLoading,
  extra,
  loading,
  showMessage,
  message,
  hideLoading,
  token,
  redirect,
  authorizeUser,
}: any) => {
  const dispatch = useDispatch();
  const onLogin = async ({ email, password }: { [key: string]: string }) => {
    showLoading();
    debugger;
    setTimeout(async () => {
      await authorizeUser(
        email,
        Utils.encryptInput(password, API_PUBLIC_KEY)
      ).then(() => hideLoading());
    }, 1000);
  };
  const onGoogleLogin = () => {
    showLoading();
  };

  const onFacebookLogin = () => {
    showLoading();
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        hideAuthMessage();
      }, 3000);
    }
  }, [showMessage]);

  useEffect(() => {
    hideLoading();
  }, []);

  const renderOtherSignIn = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">
          or connect with
        </span>
      </Divider>
      <div className="d-flex justify-content-center">
        <Button
          onClick={() => onGoogleLogin()}
          className="mr-2"
          disabled={loading}
          icon={<CustomIcon svg={GoogleSVG} />}
        >
          Google
        </Button>
        <Button
          onClick={() => onFacebookLogin()}
          icon={<CustomIcon svg={FacebookSVG} />}
          disabled={loading}
        >
          Facebook
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message} />
      </motion.div>
      <Form layout="vertical" name="login-form" onFinish={onLogin}>
        <Form.Item
          name="email"
          label={<IntlMessage id={"auth.Email"} />}
          rules={[
            {
              required: true,
              message: <IntlMessage id={"auth.MessageInsertEmail"} />,
            },
            {
              type: "email",
              message: <IntlMessage id={"auth.MessageInsertValidEmail"} />,
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label={
            <div
              className={`${
                showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>
                <IntlMessage id={"auth.Password"} />
              </span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted"
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: <IntlMessage id={"auth.MessageInsertPassword"} />,
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {" "}
            <IntlMessage id={"auth.SignIn"} />
          </Button>
        </Form.Item>
        <NavLink to={"/auth/forgot-password"} className={"text-right"}>
          <IntlMessage id={"auth.ForgotPassword"} />
        </NavLink>
        {extra}
      </Form>
    </>
  );
};

const mapStateToProps = ({ auth }: IState) => {
  const {
    loading,
    message,
    showMessage,
    token,
    redirect,
    userActivated,
  } = auth as IAuth;
  return {
    loading,
    message,
    showMessage,
    token,
    redirect,
    userActivated,
  };
};

const mapDispatchToProps = {
  showAuthMessage,
  showLoading,
  hideAuthMessage,
  authenticated,
  updateSettings,
  authorizeUser,
  hideLoading,
  getProfileInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
