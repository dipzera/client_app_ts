import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { useSelector } from "react-redux";
import IntlMessage from "../../../../../components/util-components/IntlMessage";
import { IState } from "../../../../../redux/reducers";
import { WizardContext } from "./WizardContext";
import Utils from "../../../../../utils";

const TermsWizard = () => {
  const { state, dispatch } = React.useContext(WizardContext);
  const [terms, setTerms] = useState<any>();
  useEffect(() => {
    try {
      setTerms(Utils.decodeBase64Locale(state.selectedApp.TermsOfUse));
    } catch {
      setTerms({ en: "", ru: "", ro: "" });
    }
  }, []);
  const locale = useSelector((state: IState) => state["theme"]!.locale) ?? "en";
  return (
    <>
      <div
        style={{ maxHeight: 500, overflowY: "scroll", marginRight: "-10px" }}
        dangerouslySetInnerHTML={{
          __html: `<div class="pr-2">${terms && terms[locale]}</div>`,
        }}
      />
      <Checkbox
        checked={state.isAccepted}
        className="mt-4"
        onChange={() => dispatch({ type: "SET_IS_ACCEPTED" })}
      >
        <IntlMessage id="wizard.terms" />
      </Checkbox>
    </>
  );
};

export default TermsWizard;
