import React, { useState } from "react";
import { connect } from "react-redux";
import { Menu, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import NavPanel from "./NavPanel";
import NavSearch from "./NavSearch";
import {
    toggleCollapsedNav,
    onMobileNavToggle,
} from "../../redux/actions/Theme";
import {
    NAV_TYPE_TOP,
    SIDE_NAV_COLLAPSED_WIDTH,
    SIDE_NAV_WIDTH,
} from "../../constants/ThemeConstant";
import utils from "../../utils";
import NavProfile from "./NavProfile";
import AppNavGrid from "../../views/app-views/applications/AppNavGrid";
import AppStoreNav from "../../views/app-views/applications/AppNav";

const { Header } = Layout;

const HeaderNav = (props) => {
    const {
        navCollapsed,
        mobileNav,
        navType,
        headerNavColor,
        toggleCollapsedNav,
        onMobileNavToggle,
        isMobile,
        history,
    } = props;
    const [searchActive, setSearchActive] = useState(false);

    const onSearchClose = () => {
        setSearchActive(false);
    };

    const onToggle = () => {
        if (!isMobile) {
            toggleCollapsedNav(!navCollapsed);
        } else {
            onMobileNavToggle(!mobileNav);
        }
    };

    const isNavTop = navType === NAV_TYPE_TOP;
    const mode = utils.getColorContrast(headerNavColor);
    const getNavWidth = () => {
        if (isNavTop || isMobile) {
            return "0px";
        }
        if (navCollapsed) {
            return `${SIDE_NAV_COLLAPSED_WIDTH}px`;
        } else {
            return `${SIDE_NAV_WIDTH}px`;
        }
    };
    return (
        <Header
            className={`app-header ${mode}`}
            style={{ backgroundColor: headerNavColor }}
        >
            <div
                className={`app-header-wrapper ${
                    isNavTop ? "layout-top-nav" : ""
                }`}
            >
                <Logo logoType={mode} />
                <div
                    className="nav"
                    style={{ width: `calc(100% - ${getNavWidth()})` }}
                >
                    <div className="nav-left">
                        <Menu mode="horizontal">
                            {isNavTop && !isMobile ? null : (
                                <Menu.Item
                                    key="0"
                                    onClick={() => {
                                        onToggle();
                                    }}
                                >
                                    {navCollapsed || isMobile ? (
                                        <MenuUnfoldOutlined className="nav-icon" />
                                    ) : (
                                        <MenuFoldOutlined className="nav-icon" />
                                    )}
                                </Menu.Item>
                            )}
                        </Menu>
                    </div>
                    <div className="nav-left"></div>
                    <div className="nav-right">
                        {/* Uncomment this if you want to have language selector on header*/}
                        {/*<NavLanguage configDisplay />*/}
                        <AppStoreNav />
                        <NavPanel />
                        {/*<LogoutButton history={history} />*/}
                        <NavProfile history={history} />
                    </div>
                    <NavSearch active={searchActive} close={onSearchClose} />
                </div>
            </div>
        </Header>
    );
};

const mapStateToProps = ({ theme }) => {
    const { navCollapsed, navType, headerNavColor, mobileNav } = theme;
    return { navCollapsed, navType, headerNavColor, mobileNav };
};

export default connect(mapStateToProps, {
    toggleCollapsedNav,
    onMobileNavToggle,
})(HeaderNav);
