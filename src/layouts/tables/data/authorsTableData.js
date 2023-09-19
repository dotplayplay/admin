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
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
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
    { name: "number", align: "left" },
    { name: "status", align: "center" },
    { name: "referalID", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      users: <Author image={team2} name="John Michael" email="john@valiant_joe.com" />,
      referalID: <Function job="sqz11829sgh" org="P2E" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      number: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         07089283903
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      users: <Author image={"https://img2.nanogames.io/avatar/25671/s"} name="Jaeme Michael" email="jaeme@valiant_joe.com" />,
      referalID: <Function job="jtaz823n" org="P2E" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      number: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         090672663547
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      users: <Author image={team2} name="John Michael" email="john@valiant_joe.com" />,
      referalID: <Function job="quasi19" org="normal" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      number: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         08169937218
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  
  ],
};

export default authorsTableData;
