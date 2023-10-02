
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
            Task list
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              24%
            </SoftTypography>{" "}
            this month
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="vpn_key"
          title="Valiant Joe"
          description="Pending withdrawals"
          email="valiant@gmail.com"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Luxury Jam"
          description="Pending deposit approvals"
          email="luxury@gmail.com"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="John Doe"
          description="Pending claim approvals"
          email="johndoe@gmail.com"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="John Uche"
          description="Pending withdrawals"
          email="doejohn@gmail.com"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Ifeanyi 305"
          description="Pending deposit approvals"
          email="ifeanyi@gmail.com"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Valiant Joe, "
          description="Pending claim approvals"
          email="johndoe@gmail.com"
        />
        
       
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
