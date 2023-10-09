import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import breakpoints from "assets/theme/base/breakpoints";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../../../reducers/actions';


export default function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  const navigate = useNavigate();
  const handleNavigate = (url = '') => {
    navigate(`/${url}`);
  }

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
          {showSidebar? null : 
            <Grid item>
              <SoftBox height="100%" mt={0.5} lineHeight={1}>
                <IconButton
                  onClick={handleShowSidebar}
                  size="small"
                  sx={{
                    px: 3,
                    '& .MuiSvgIcon-root': {
                      fontSize: 24,
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
                User Details
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
                <Tab label="Authors Details" onClick={()=> handleNavigate()} icon={<Cube />} />
                <Tab label="Members Details" onClick={()=> handleNavigate('user-tables/members')} icon={<Document />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SoftBox>
  );
}
