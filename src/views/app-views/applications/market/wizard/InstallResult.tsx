import React, { useContext, useLayoutEffect, useState } from "react";
import { Result } from "antd";
import { AppService } from "../../../../../api/app";
import Loading from "../../../../../components/shared-components/Loading";
import TranslateText from "../../../../../utils/translate";
import { WizardContext } from "./WizardContext";

const InstallResult = () => {
  const { state, dispatch, getMarketApps } = useContext(WizardContext);
  const [isInstalled, setIsInstalled] = useState<boolean>(true);
  useLayoutEffect(() => {
    dispatch({ type: "SHOW_LOADING" });
    new AppService().ActivateApp(state.selectedApp.ID).then(async (data) => {
      if (data && data.ErrorCode === 0) {
        dispatch({ type: "HIDE_LOADING" });
        setIsInstalled(true);
        await getMarketApps();
      } else {
        setIsInstalled(false);
      }
    });
  }, []);
  if (state.wizLoading) return <Loading />;
  return (
    <Result
      status={isInstalled ? "success" : "error"}
      title={
        isInstalled
          ? TranslateText("wizard.install.success.title")
          : TranslateText("wizard.install.error.title")
      }
      subTitle={
        isInstalled
          ? TranslateText("wizard.install.success.content")
          : TranslateText("message.Error")
      }
    />
  );
};

export default InstallResult;
