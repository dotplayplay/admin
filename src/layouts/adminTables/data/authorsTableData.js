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
    { name: "Amdim ID", align: "left" },
    { name: "Username", align: "center" },
    { name: "Status", align: "center" },
    { name: "Account", align: "center" },
    { name: "Permissions", align: "center" },
    { name: "Activity Log", align: "center" },
    // { name: "wallet Balance", align: "center" },
    // { name: "Registered Date", align: "center" },
    // { name: "First Deposit Date", align: "center" },
    // { name: "Last Deposit Date", align: "center" },
    // { name: "Last Login Date", align: "center" },
    // { name: "Last Login IP", align: "center" },
    // { name: "Chat", align: "center" },
  ],

  rows: [
    {
      AdminID: <Author image={team2} name="Admin00001"/>,
      Username: <Function job="sqz11829sgh" />,
      Status: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
        {}
        </SoftTypography>
      ),
      Account: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         102345
        </SoftTypography>
      ),
      Permissions: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         1023.48
        </SoftTypography>
      ),
      ActivityLog: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         10
        </SoftTypography>
      ),
      // walletBalance: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     $345
      //   </SoftTypography>
      // ),
      // RegisteredDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     03/08/2023, 23:48:14
      //   </SoftTypography>
      // ),
      // FirstDepositDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     02/09/2023, 13:48:14
      //   </SoftTypography>
      // ),
      // LastDepositDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     03/10/2023, 20:48:14
      //   </SoftTypography>
      // ),
      // LastLoginDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     04/10/2023, 20:48:14
      //   </SoftTypography>
      // ),
      // LastLoginIP: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     234rtpd123
      //   </SoftTypography>
      // ),
      // Chat: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     <button>chat on whatsapp</button>
      //   </SoftTypography>
      // ),
    },
    {
      AdminID: <Author image={"https://img2.nanogames.io/avatar/25671/s"} name="Admin00002" />,
      Username: <Function job="euewwehiu" />,
      Status: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
        Active
        </SoftTypography>
      ),
      Account: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         102345
        </SoftTypography>
      ),
      Permissions: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         1023.48
        </SoftTypography>
      ),
      ActivityLog: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         10
        </SoftTypography>
      ),
      // walletBalance: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     $500
      //   </SoftTypography>
      // ),
      // RegisteredDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     06/10/2023, 23:48:14
      //   </SoftTypography>
      // ),
      // FirstDepositDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     01/02/2023, 10:48:14
      //   </SoftTypography>
      // ),
      // LastDepositDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     03/11/2023, 21:48:14
      //   </SoftTypography>
      // ),
      // LastLoginDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     02/11/2023, 20:42:14
      //   </SoftTypography>
      // ),
      // LastLoginIP: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     290rtpd123
      //   </SoftTypography>
      // ),
      // Chat: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     <button>chat on whatsapp</button>
      //   </SoftTypography>
      // ),
    },
    {
      AdminID: <Author image={team2} name="Admin00003"/>,
      Username: <Function job="quasi19" />,
      Status: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
        Active
        </SoftTypography>
      ),
      Account: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         102345
        </SoftTypography>
      ),
      Permissions: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         1023.48
        </SoftTypography>
      ),
      ActivityLog: (
        <SoftTypography variant="caption" color="white" fontWeight="medium">
         10
        </SoftTypography>
      ),
      // walletBalance: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     $450
      //   </SoftTypography>
      // ),
      // RegisteredDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     03/10/2023, 13:48:14
      //   </SoftTypography>
      // ),
      // FirstDepositDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     01/09/2023, 16:48:14
      //   </SoftTypography>
      // ),
      // LastDepositDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     04/10/2023, 20:48:14
      //   </SoftTypography>
      // ),
      // LastLoginDate: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     04/10/2023, 20:48:14
      //   </SoftTypography>
      // ),
      // LastLoginIP: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     234rtpd121
      //   </SoftTypography>
      // ),
      // Chat: (
      //   <SoftTypography variant="caption" color="white" fontWeight="medium">
      //     <button>chat on whatsapp</button>
      //   </SoftTypography>
      // ),
    },
  ],
};

export default authorsTableData;
