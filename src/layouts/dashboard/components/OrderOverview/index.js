
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
            New KYC Reg. Review
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
          title="Valiant Joe, "
          dateTime="22 DEC 7:20 PM"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Valiant Joe, "
          dateTime="22 DEC 7:20 PM"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Valiant Joe, "
          dateTime="22 DEC 7:20 PM"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Valiant Joe, "
          dateTime="22 DEC 7:20 PM"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Valiant Joe, "
          dateTime="22 DEC 7:20 PM"
        />
                <TimelineItem
          color="success"
          icon="vpn_key"
          title="Valiant Joe, "
          dateTime="22 DEC 7:20 PM"
        />
        
       
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
