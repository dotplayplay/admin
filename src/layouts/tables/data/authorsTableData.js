/* eslint-disable react/prop-types */
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" color="white" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="white">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" color="white" fontWeight="medium">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "users", align: "left" },
    { name: "user ID", align: "center" },
    { name: "number", align: "center" },
    { name: "total Wagered", align: "center" },
    { name: "total GCR", align: "center" },
    { name: "chat Messages", align: "center" },
    { name: "wallet Balance", align: "center" },
    { name: "Registered Date", align: "center" },
    { name: "First Deposit Date", align: "center" },
    { name: "Last Deposit Date", align: "center" },
    { name: "Last Login Date", align: "center" },
    { name: "Last Login IP", align: "center" },
    { name: "Chat", align: "center" },
  ],

  rows: [
    {
      users: <Author image={team2} name="John Michael" email="john@valiant_joe.com" />,
      userID: <Function job="sqz11829sgh" />,
      number: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         07089283903
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         102345
        </SoftTypography>
      ),
      totalGCR: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         1023.48
        </SoftTypography>
      ),
      chatMessages: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         10
        </SoftTypography>
      ),
      walletBalance: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $345
        </SoftTypography>
      ),
      RegisteredDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          03/08/2023, 23:48:14
        </SoftTypography>
      ),
      FirstDepositDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          02/09/2023, 13:48:14
        </SoftTypography>
      ),
      LastDepositDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          03/10/2023, 20:48:14
        </SoftTypography>
      ),
      LastLoginDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          04/10/2023, 20:48:14
        </SoftTypography>
      ),
      LastLoginIP: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          234rtpd123
        </SoftTypography>
      ),
      Chat: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          <button>chat on whatsapp</button>
        </SoftTypography>
      ),
    },
    {
      users: <Author image={"https://img2.nanogames.io/avatar/25671/s"} name="Jaeme Michael" email="jaeme@valiant_joe.com" />,
      userID: <Function job="jtaz823n" />,
      number: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         090672663547
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         1016275
        </SoftTypography>
      ),
      totalGCR: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          34923.48
        </SoftTypography>
      ),
      chatMessages: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         4
        </SoftTypography>
      ),
      walletBalance: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $500
        </SoftTypography>
      ),
      RegisteredDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          06/10/2023, 23:48:14
        </SoftTypography>
      ),
      FirstDepositDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          01/02/2023, 10:48:14
        </SoftTypography>
      ),
      LastDepositDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          03/11/2023, 21:48:14
        </SoftTypography>
      ),
      LastLoginDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          02/11/2023, 20:42:14
        </SoftTypography>
      ),
      LastLoginIP: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          290rtpd123
        </SoftTypography>
      ),
      Chat: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          <button>chat on whatsapp</button>
        </SoftTypography>
      ),
    },
    {
      users: <Author image={team2} name="John Michael" email="john@valiant_joe.com" />,
      userID: <Function job="quasi19" />,
      number: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         08169937218
        </SoftTypography>
      ),
      totalWagered: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         112345
        </SoftTypography>
      ),
      totalGCR: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         11203.48
        </SoftTypography>
      ),
      chatMessages: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         9
        </SoftTypography>
      ),
      walletBalance: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          $450
        </SoftTypography>
      ),
      RegisteredDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          03/10/2023, 13:48:14
        </SoftTypography>
      ),
      FirstDepositDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          01/09/2023, 16:48:14
        </SoftTypography>
      ),
      LastDepositDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          04/10/2023, 20:48:14
        </SoftTypography>
      ),
      LastLoginDate: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          04/10/2023, 20:48:14
        </SoftTypography>
      ),
      LastLoginIP: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          234rtpd121
        </SoftTypography>
      ),
      Chat: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
          <button>chat on whatsapp</button>
        </SoftTypography>
      ),
    },
  ],
};

export default authorsTableData;
