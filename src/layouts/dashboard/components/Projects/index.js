import { useState,useEffect } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Table from "examples/Tables/Table";
import data from "layouts/dashboard/components/Projects/data";

function Projects(_data) {

  // const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const [details, setDetails] = useState([])
  const [modal,setModal] = useState("total-wagered-ranking")

  useEffect(()=>{
    if( _data !== undefined){
      const retrieved = _data.data
      if(retrieved !== undefined){
        if(modal === "total-wagered-ranking"){
          setDetails(retrieved[2].totalWageredRanking)
        }else if(modal === "total-win-ranking"){
          setDetails(retrieved[2].totalWinRanking)
        }else if(modal === "total-loss-ranking"){
          setDetails(retrieved[2].totalLossRanking)
        }else if(modal === "total-bet-ranking"){
          setDetails(retrieved[2].totalBetRanking)
        }
      }
    }
  })
// 
  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={() => { closeMenu();  setModal("total-wagered-ranking"); }}>Total wagered ranking</MenuItem>
      <MenuItem onClick={() => { closeMenu();  setModal("total-win-ranking"); }}>Total winning ranking</MenuItem>
      <MenuItem onClick={() => { closeMenu();  setModal("total-loss-ranking"); }}>Total lossing ranking</MenuItem>
      <MenuItem onClick={() => { closeMenu();  setModal("total-bet-ranking"); }}>Total bet ranking</MenuItem>
    </Menu>
  );
  
  const { columns, rows } = data(details);

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>
          <SoftTypography variant="h6" gutterBottom>
              Much wow win
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>Today</strong>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SoftBox>
        {renderMenu}
      </SoftBox>
      <SoftBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </SoftBox>
    </Card>
  );
}

export default Projects;
