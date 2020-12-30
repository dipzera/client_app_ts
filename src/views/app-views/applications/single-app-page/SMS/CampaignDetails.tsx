import * as React from "react";
import { useState, useEffect } from "react";
import Flex from "../../../../../components/shared-components/Flex";
import { ICampaignList } from "../../../../../api/types.response";
import { AppService } from "../../../../../api";
import Loading from "../../../../../components/shared-components/Loading";
import { RouteComponentProps } from "react-router-dom";

interface ICampaignDetails extends RouteComponentProps<{ ID: string }> {}
const CampaignDetails = ({ history, match }: ICampaignDetails) => {
  const { ID } = match.params;
  const [currentCampaign, setCurrentCampaign] = useState<ICampaignList>();
  const [loading, setLoading] = useState<boolean>(true);
  const getCampaign = async () =>
    await new AppService().SMS_GetCampaign().then((data) => {
      if (data) {
        if (data.ErrorCode === 0) {
          setLoading(false);
          setCurrentCampaign(data.CampaignList.find((camp) => camp.ID === +ID));
        }
      }
    });
  useEffect(() => {
    getCampaign();
  }, [match]);
  if (loading) {
    return <Loading cover="content" />;
  }
  if (!currentCampaign) {
    return <h5>No campaign found...</h5>;
  }
  return (
    <>
      <Flex justifyContent="between" alignItems="center" className="py-4">
        <h2>Campaign details</h2>
      </Flex>
      <div>
        <span>{currentCampaign.Name}</span>
      </div>
    </>
  );
};

export default CampaignDetails;