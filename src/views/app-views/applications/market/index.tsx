import React, { useEffect, useState } from "react";
import { Button, Row, Col, Tag, Avatar, Card, Modal, Empty } from "antd";
import {
    VerticalAlignBottomOutlined,
    ExperimentOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import Flex from "../../../../components/shared-components/Flex";
import { Link } from "react-router-dom";
import { APP_PREFIX_PATH } from "../../../../configs/AppConfig";
import { useSelector } from "react-redux";
import Loading from "../../../../components/shared-components/Loading";
import { ClientApi } from "../../../../api";

export interface IPackages {
    ID: number;
    MaxValue: number;
    MinValue: number;
    Name: string;
    Price: number;
    Status: number;
    ValidFrom: string;
    ValidTo: string;
}
export interface IMarketAppList {
    AppType: number;
    ApyKey: string;
    MarketID: number;
    ApplicationID: number;
    LicenseActivationCode: number;
    LicenseActivationCodeValidHours: number;
    LicenseActivationCodeValidTo: string;
    LongDescription: string;
    Name: string;
    Packages: IPackages[];
    Photo: string;
    ShortDescription: string;
    Status: number;
}
export interface IApplications {
    ErrorCode: number;
    ErrorMessage: string;
    MarketAppList: IMarketAppList[];
}
const GridItem = ({ activateApp, deactivateApp, data }) => {
    const [shortDesc, setShortDesc] = useState<any>();
    const locale = useSelector((state) => state["theme"].locale);
    useEffect(() => {
        try {
            setShortDesc(JSON.parse(window.atob(data.ShortDescription)));
        } catch {
            setShortDesc({ en: "", ru: "", ro: "" });
        }
    }, []);
    return (
        <Card>
            <Flex className="mb-3 " justifyContent="between">
                <Link to={`${APP_PREFIX_PATH}/applications/${data.AppType}`}>
                    <div className="cursor-pointer">
                        <Avatar
                            src={data.Photo}
                            icon={<ExperimentOutlined />}
                            shape="square"
                            size={60}
                        />
                    </div>
                </Link>
                {data.Status === 0 ? (
                    <Tag
                        className="text-capitalize cursor-pointer"
                        color="default"
                        onClick={() => activateApp(data.ID)}
                    >
                        <VerticalAlignBottomOutlined />
                        <span className="ml-2 font-weight-semibold">
                            Install
                        </span>
                    </Tag>
                ) : (
                    <Tag className="text-capitalize" color="cyan">
                        <CheckCircleOutlined />
                        <span className="ml-2 font-weight-semibold">
                            Installed
                        </span>
                    </Tag>
                )}
            </Flex>
            <div>
                <Link to={`${APP_PREFIX_PATH}/applications/${data.AppType}`}>
                    <h3 className="mb-0 cursor-pointer ">{data.Name}</h3>
                </Link>
                <p className="text-muted">By IntelectSoft</p>
                <div style={{ minHeight: "70px" }}>
                    {shortDesc ? shortDesc[locale] : null}
                </div>
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

const Market = () => {
    const [apps, setApps] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const { confirm } = Modal;
    const getMarketApps = () => {
        setLoading(true);
        return new ClientApi().GetMarketAppList().then((data: any) => {
            setLoading(false);
            if (data.ErrorCode === 0) {
                setApps(data.MarketAppList);
            }
        });
    };
    useEffect(() => {
        getMarketApps();
    }, []);

    const deactivateApp = (AppID) => {
        confirm({
            title: `Are you sure you want to deactivate app with ID: ${AppID}?`,
            onOk: () => {
                return new Promise((resolve) => {
                    setTimeout(
                        () =>
                            resolve(
                                new ClientApi()
                                    .DeactivateApp(AppID)
                                    .then(async (data: any) => {
                                        if (data.ErrorCode === 0)
                                            await getMarketApps();
                                    })
                            ),
                        1000
                    );
                });
            },
            onCancel: () => {},
        });
    };

    const activateApp = (AppID) => {
        confirm({
            title: `Are you sure you want to activate app with ID: ${AppID}?`,
            onOk: () => {
                return new Promise((resolve) => {
                    setTimeout(
                        () =>
                            resolve(
                                new ClientApi()
                                    .ActivateApp(AppID)
                                    .then(async (data: any) => {
                                        console.log(data);

                                        if (data.ErrorCode === 0)
                                            await getMarketApps();
                                    })
                            ),
                        1000
                    );
                });
            },
        });
    };

    return (
        <>
            {loading ? (
                <Loading cover="content" />
            ) : (
                <div
                    className={`my-4 
                    container-fluid`}
                >
                    <Row gutter={16}>
                        {apps.length > 0 && !loading ? (
                            apps.map((elm) => (
                                <Col
                                    xs={24}
                                    sm={24}
                                    lg={12}
                                    xl={6}
                                    xxl={6}
                                    key={elm["AppType"]}
                                >
                                    <GridItem
                                        activateApp={activateApp}
                                        deactivateApp={deactivateApp}
                                        data={elm}
                                        key={elm["AppType"]}
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
            )}
        </>
    );
};

export default Market;