import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import { MdReportProblem } from "react-icons/md";
import breakpoints from "assets/theme/base/breakpoints";
import curved0 from "assets/images/curved-images/curved0.jpg";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../../../reducers/actions';

import { navbarMobileMenu } from "examples/Navbars/DashboardNavbar/styles";

export default function Header(Taps) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  const handleNavigate = ((e)=>{
    Taps.handleTaps(e)
  })

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const customDispatch = useDispatch();
  const showSidebar = useSelector(state => state.showSidebar);

  const handleShowSidebar = () => {
    customDispatch(toggleSidebar(true));
  }

  useEffect(() => {
    customDispatch(toggleSidebar(false));
  }, [customDispatch])

  return (
    <SoftBox position="relative">
      {/* <DashboardNavbar absolute light /> */}
    {/* <SoftBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${curved0})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      /> */}
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mx: 3,
          py: 1,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {showSidebar? null
            : 
            <Grid item>
              <SoftBox height="100%" mt={0.5} lineHeight={1}>
                <IconButton
                  onClick={handleShowSidebar}
                  size="small"
                  sx={{
                    px: 3,
                    '& .MuiSvgIcon-root': {
                      // Custom styles for the MenuIcon
                      fontSize: 24, // Change the icon size to 24px
                    },
                    height: "100%",
                  }}
                  >
                    <MenuIcon size={5}/>
                </IconButton>
              </SoftBox>
            </Grid>}
          <Grid item>
            <SoftBox height="100%" mt={0.5} lineHeight={1}>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                Reports
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={10} lg={8} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab label="Game Report" onClick={()=> handleNavigate('gameReport')} icon={<Cube />} />
                <Tab label="Daily Report" onClick={()=> handleNavigate('dailyReport')} icon={<Document />} />
                <Tab label="GGR Report" onClick={()=> handleNavigate('ggrReport')} icon={<MdReportProblem />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SoftBox>
  );
}
