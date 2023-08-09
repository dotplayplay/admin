
import Tooltip from "@mui/material/Tooltip";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

export default function data() {

  const much_win = [
   { id:1, user_name: "Valiant Joe", won:139908, game_img: "https://img2.nanogames.io/game/image/c405f953-f7ca-4da5-8309-dcba4fc44e7d.png", 
   game_name: "Crash Game", vip: "v4", process:60}
  ]

  return {
    columns: [
      { name: "games", align: "left" },
      { name: "user", align: "center" },
      { name: "won", align: "center" },
      { name: "vip", align: "center" },
    ],

    rows: [
      {
        games: [much_win[0].game_img, much_win[0].game_name],
        user: (
        <SoftTypography variant="caption" color="text" fontWeight="bold">
        { much_win[0].user_name}
        </SoftTypography>
        ),
        won: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ${much_win[0].won.toLocaleString("en-US")}
          </SoftTypography>
        ),
        vip: (
          <SoftBox width="8rem" textAlign="left">
              <SoftTypography variant="caption" color="text" fontWeight="medium">
                {much_win[0].vip}
              </SoftTypography>
            <SoftProgress value={much_win[0].process} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        games: [much_win[0].game_img, much_win[0].game_name],
        user: (
        <SoftTypography variant="caption" color="text" fontWeight="bold">
        { much_win[0].user_name}
        </SoftTypography>
        ),
        won: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ${much_win[0].won.toLocaleString("en-US")}
          </SoftTypography>
        ),
        vip: (
          <SoftBox width="8rem" textAlign="left">
              <SoftTypography variant="caption" color="text" fontWeight="medium">
                {much_win[0].vip}
              </SoftTypography>
            <SoftProgress value={much_win[0].process} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        games: [much_win[0].game_img, much_win[0].game_name],
        user: (
        <SoftTypography variant="caption" color="text" fontWeight="bold">
        { much_win[0].user_name}
        </SoftTypography>
        ),
        won: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ${much_win[0].won.toLocaleString("en-US")}
          </SoftTypography>
        ),
        vip: (
          <SoftBox width="8rem" textAlign="left">
              <SoftTypography variant="caption" color="text" fontWeight="medium">
                {much_win[0].vip}
              </SoftTypography>
            <SoftProgress value={much_win[0].process} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        games: [much_win[0].game_img, much_win[0].game_name],
        user: (
        <SoftTypography variant="caption" color="text" fontWeight="bold">
        { much_win[0].user_name}
        </SoftTypography>
        ),
        won: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ${much_win[0].won.toLocaleString("en-US")}
          </SoftTypography>
        ),
        vip: (
          <SoftBox width="8rem" textAlign="left">
              <SoftTypography variant="caption" color="text" fontWeight="medium">
                {much_win[0].vip}
              </SoftTypography>
            <SoftProgress value={much_win[0].process} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        games: [much_win[0].game_img, much_win[0].game_name],
        user: (
        <SoftTypography variant="caption" color="text" fontWeight="bold">
        { much_win[0].user_name}
        </SoftTypography>
        ),
        won: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ${much_win[0].won.toLocaleString("en-US")}
          </SoftTypography>
        ),
        vip: (
          <SoftBox width="8rem" textAlign="left">
              <SoftTypography variant="caption" color="text" fontWeight="medium">
                {much_win[0].vip}
              </SoftTypography>
            <SoftProgress value={much_win[0].process} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        games: [much_win[0].game_img, much_win[0].game_name],
        user: (
        <SoftTypography variant="caption" color="text" fontWeight="bold">
        { much_win[0].user_name}
        </SoftTypography>
        ),
        won: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ${much_win[0].won.toLocaleString("en-US")}
          </SoftTypography>
        ),
        vip: (
          <SoftBox width="8rem" textAlign="left">
              <SoftTypography variant="caption" color="text" fontWeight="medium">
                {much_win[0].vip}
              </SoftTypography>
            <SoftProgress value={much_win[0].process} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },

    ],
  };
}
