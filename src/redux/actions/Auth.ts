import {
  AUTHENTICATED,
  SIGNOUT,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SHOW_LOADING,
  HIDE_LOADING,
  REDIRECT,
} from "../constants/Auth";
import { message, Modal } from "antd";
import { getProfileInfo } from "./Account";
import { ACTIVATE_ACCOUNT, EMAIL_CONFIRM_MSG } from "../../constants/Messages";
import { AuthService } from "../../api/auth";
import { ThunkAction } from "redux-thunk";
import { IState } from "../reducers";
import TranslateText from "../../utils/translate";
import axios from "axios";
import {
  API_AUTH_URL,
  APP_PREFIX_PATH,
  DOMAIN,
  SUBDIR_PATH,
} from "../../configs/AppConfig";
import { onHeaderNavColorChange } from "./Theme";
import history from "../../history";
import Cookies from "js-cookie";
import Utils from "../../utils";

type ThunkResult<R> = ThunkAction<R, IState, undefined, any>;

export const authenticated = (token: string) => ({
  type: AUTHENTICATED,
  token,
});

export const signOut = () => ({
  type: SIGNOUT,
});

export const showAuthMessage = (message: string) => ({
  type: SHOW_AUTH_MESSAGE,
  message,
});

export const hideAuthMessage = () => ({
  type: HIDE_AUTH_MESSAGE,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});
export const hideLoading = () => ({
  type: HIDE_LOADING,
});

export const redirectTo = (payload: string) => ({
  type: REDIRECT,
  payload,
});

const handleAccountActivation = (Token: string) => {
  Modal.confirm({
    content: TranslateText(ACTIVATE_ACCOUNT),
    onOk: async () => {
      // No idea why I'm calling axios here and not an isntance of axios (:
      return await axios
        .get(`${API_AUTH_URL}/SendActivationCode`, {
          params: {
            Token,
          },
        })
        .then((response) => {
          if (response.data.ErrorCode === 0) {
            message.success({
              content: TranslateText(EMAIL_CONFIRM_MSG),
              key: "updatable",
              duration: 2,
            });
          }
        });
    },
  });
};

export const authorizeUser = (
  email: string,
  password: string
): ThunkResult<void> => {
  return async (dispatch) => {
    return await new AuthService()
      .Login(email, password)
      .then((data) => {
        if (data) {
          const { ErrorCode, ErrorMessage, Token } = data;
          if (ErrorCode === 0) {
            Utils.setToken(Token);
            window.history.pushState(null, "", APP_PREFIX_PATH);
            window.location.reload();
          } else if (ErrorCode === 108) {
            handleAccountActivation(Token);
          } else {
            dispatch(hideLoading());
            dispatch(showAuthMessage(ErrorMessage!.toString()));
          }
        }
      })
      .catch(() => dispatch(hideLoading()));
  };
};
