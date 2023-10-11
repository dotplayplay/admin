/* eslint-disable */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import SoftBox from "components/SoftBox";
import breakpoints from "assets/theme/base/breakpoints";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'reducers/actions';


export default function Header({ onSearch }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

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
          py: 2,
          px: 2,
        }}
      >
        <div className="flex justify-between">
          <Grid container spacing={3} alignItems="center" justifyContent="">
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
                <p className="text-slate-700 font- text-[18px] tracking-x-[3px] spacing-x-[8px] uppercase">
                  Members Details
                </p>
              </SoftBox>
            </Grid>
          </Grid>
          <div>
            <input
              className="border-[1px] border-slate-400 rounded-[5px] text-[15px] px-4 py-[1px] focus:border-slate-800"
              placeholder="search username"
              onChange={(e)=>onSearch(e.target.value)}
              type="text"
            />
          </div>
        </div>
      </Card>
    </SoftBox>
  );
}
