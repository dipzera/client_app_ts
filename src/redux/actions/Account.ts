import {
  CLEAR_INFO,
  REMOVE_AVATAR,
  UPDATE_SETTINGS,
} from "../constants/Account";
import { onLocaleChange } from "./Theme";
import { AppService } from "../../api";
import { ThunkAction } from "redux-thunk";
import { IState } from "../reducers";
import { CHANGE_LOCALE } from "../constants/Theme";
import { IUsers } from "../../api/types.response";

type ThunkResult<R> = ThunkAction<R, IState, undefined, any>;

export const updateSettings = (payload: IUsers) => ({
  type: UPDATE_SETTINGS,
  payload,
});

export const clearSettings = () => ({
  type: CLEAR_INFO,
});

export const getProfileInfo = (): ThunkResult<void> => {
  return async (dispatch) => {
    return new AppService().GetProfileInfo().then((data: any) => {
      if (data) {
        const { ErrorCode, User } = data;
        if (ErrorCode === 0) {
          dispatch({ type: UPDATE_SETTINGS, payload: User });
          if (User.UiLanguage === 0) {
            dispatch({ type: CHANGE_LOCALE, locale: "ro" });
          } else if (User.UiLanguage === 1) {
            dispatch({ type: CHANGE_LOCALE, locale: "ru" });
          } else {
            dispatch({ type: CHANGE_LOCALE, locale: "en" });
          }
        }
      }
    });
  };
};

export const setProfileInfo = (accountInfo: IUsers): ThunkResult<void> => {
  return async (dispatch) => {
    return new AppService().UpdateUser(accountInfo).then((data: any) => {
      if (data) {
        if (data.ErrorCode === 0) {
          dispatch(getProfileInfo());
        }
      }
    });
  };
};
