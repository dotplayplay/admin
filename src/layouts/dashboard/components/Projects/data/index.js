
import Tooltip from "@mui/material/Tooltip";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

export default function data(data) {



  const much_win = [
    { id: 1, user_name: "Valiant Joe", won: 139908, game_img: "https://img2.nanogames.io/game/image/c405f953-f7ca-4da5-8309-dcba4fc44e7d.png", game_name: "Crash Game", vip: "v4", process: 60 }
  ];

  const rows = data.map((dataItem) => ({
    games: [dataItem.profile_image, dataItem.username],
    user: (
      <SoftTypography variant="caption" color="text" fontWeight="bold">
        {dataItem.username}
      </SoftTypography>
    ),
    won: (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        ${dataItem.highest_bet.toLocaleString("en-US")}
      </SoftTypography>
    ),
    vip: (
      <SoftBox width="8rem" textAlign="left">
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {dataItem.vip_level}
        </SoftTypography>
        <SoftProgress value={much_win[0].process} color="info" variant="gradient" label={false} />
      </SoftBox>
    ),
  }));
  
  return {
    columns: [
      { name: "games", align: "left" },
      { name: "user", align: "center" },
      { name: "won", align: "center" },
      { name: "vip", align: "center" },
    ],
    rows,
  };
  




}
