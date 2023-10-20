import { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          personal settings
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Hide my Bio from others
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Email me when I have a message from Boss
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            application
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
            Email me when a user start a conversation
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
            Email me when a user has a pending deposit
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
            Email me when a user has a pending withdraws
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Show online Icon when I{"'"}m active
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
