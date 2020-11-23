import { REMOVE_AVATAR, UPDATE_SETTINGS } from "../constants/Account";
import axios from "axios";
import { message } from "antd";
import { onLocaleChange } from "./Theme";
import { signOut } from "./Auth";
import { API_APP_URL } from "../../configs/AppConfig";
import { ClientApi } from "../../api";

export const updateSettings = (payload) => ({
    type: UPDATE_SETTINGS,
    payload,
});
export const removeAvatar = () => ({
    type: REMOVE_AVATAR,
});

export const getProfileInfo = () => {
    return async (dispatch) => {
        return new ClientApi().GetProfileInfo().then((data: any) => {
            const { ErrorCode, User } = data;
            if (ErrorCode === 0) {
                dispatch(updateSettings(User));
                if (User.UiLanguage === 0) {
                    dispatch(onLocaleChange("ro"));
                } else if (User.UiLanguage === 1) {
                    dispatch(onLocaleChange("ru"));
                } else {
                    dispatch(onLocaleChange("en"));
                }
            }
        });
    };
};

export const setProfileInfo = (accountInfo) => {
    return async (dispatch) => {
        return new ClientApi().UpdateUser(accountInfo).then((data: any) => {
            if (data.ErrorCode === 0) {
                dispatch(getProfileInfo());
            }
        });
    };
};
