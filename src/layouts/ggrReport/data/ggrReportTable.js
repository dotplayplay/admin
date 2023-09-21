import SoftTypography from "components/SoftTypography";

const grrReport = {
  columns: [
    { name: "userID", align: "center" },
    { name: "username", align: "center" },
    { name: "totalWagered", align: "center" },
    { name: "totalPayout", align: "center" },
    { name: "totalGGR", align: "center" },
  ],
  rows: [
    {
      userID: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          4we123
        </SoftTypography>
      ),
      username: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Ifeanyi305
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $1,200
        </SoftTypography>
      ),
      totalPayout: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $1,000
        </SoftTypography>
      ),
      totalGGR: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $200
        </SoftTypography>
      ),
    },
    {
      userID: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          12eq1z3
        </SoftTypography>
      ),
      username: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Valiant
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $500
        </SoftTypography>
      ),
      totalPayout: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $200
        </SoftTypography>
      ),
      totalGGR: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $300
        </SoftTypography>
      ),
    },
    {
      userID: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          q56fd23
        </SoftTypography>
      ),
      username: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          JohnDoe
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $1,200
        </SoftTypography>
      ),
      totalPayout: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $1,000
        </SoftTypography>
      ),
      totalGGR: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $200
        </SoftTypography>
      ),
    }
  ]
}

export default grrReport;