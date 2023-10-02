import SoftTypography from "components/SoftTypography";

const grrReport = {
  columns: [
    { name: "username", align: "center" },
    { name: "user ID", align: "center" },
    { name: "total Wagered", align: "center" },
    { name: "total Payout", align: "center" },
    { name: "total GGR", align: "center" },
  ],
  rows: [
    {
      userID: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          4we123
        </SoftTypography>
      ),
      username: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          Ifeanyi305
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $1,200
        </SoftTypography>
      ),
      totalPayout: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $1,000
        </SoftTypography>
      ),
      totalGGR: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $200
        </SoftTypography>
      ),
    },
    {
      userID: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          12eq1z3
        </SoftTypography>
      ),
      username: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          Valiant
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $500
        </SoftTypography>
      ),
      totalPayout: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $200
        </SoftTypography>
      ),
      totalGGR: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $300
        </SoftTypography>
      ),
    },
    {
      userID: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          q56fd23
        </SoftTypography>
      ),
      username: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          JohnDoe
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $1,200
        </SoftTypography>
      ),
      totalPayout: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $1,000
        </SoftTypography>
      ),
      totalGGR: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $200
        </SoftTypography>
      ),
    }
  ]
}

export default grrReport;