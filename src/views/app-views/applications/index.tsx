import React, { lazy, useEffect, useLayoutEffect, useState } from "react";
// import AppList from "./AppList";
import axios from "axios";
// import { API_IS_APP_SERVICE } from "../../../constants/ApiConstant";
import { connect, useDispatch, useSelector } from "react-redux";
import Utils from "../../../utils";
import { signOut } from "../../../redux/actions/Auth";
// import { getMarketApps } from "../../../redux/actions/Applications";
import { Route } from "react-router-dom";
import { APP_PREFIX_PATH } from "../../../configs/AppConfig";
import Loading from "../../../components/shared-components/Loading";
import { API_IS_CLIENT_SERVICE } from "../../../constants/ApiConstant";
import Axios from "axios";
import { message } from "antd";
import Market from "./Market";

const Applications = ({ signOut, Token, loading }) => {
    const [apps, setApps] = useState<any>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        Axios.get(`${API_IS_CLIENT_SERVICE}/GetMarketAppList`, {
            params: { Token },
        }).then((res) => {
            console.log(res.data);
            const { ErrorCode, ErrorMessage, MarketAppList } = res.data;
            if (ErrorCode === 0) {
                setApps(MarketAppList);
            } else if (ErrorCode === 118) {
                message
                    .loading("Time has expired... Redirecting!", 1.5)
                    .then(() => dispatch(signOut()));
            } else if (ErrorCode === -1) {
            }
        });
    }, []);
    return (
        <>{loading ? <Loading /> : <Market apps={apps} signOut={signOut} />}</>
    );
};
const mapStateToProps = ({ auth }) => {
    const { token: Token, loading } = auth;
    return { Token, loading };
};
export default connect(mapStateToProps, { signOut })(Applications);