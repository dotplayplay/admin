import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

//members details

import MemberDetails from "layouts/tables/MemberDetails";
// promo details
import PromoEventDetails from "layouts/reports/components/depositBonusReport/details";
// User - members details
import MemberTable from "layouts/member";
//dashboard
import Dashboard from "layouts/dashboard/index"
// create-member component
import CreateMember from 'layouts/createMember';

// plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import routes from "routes";
// setOpenConfigurator
import { useSoftUIController, setMiniSidenav, } from "context";
import NotFound from "NotFound";

//Admin details
import AdminDetails from "layouts/adminTables/AdminDetails";
// import MemberDetails from "layouts/tables/MemberDetails";
import { toggleReportPage } from "reducers/actions";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brandName="DOTPLAYPLAY"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {/* {configsButton} */}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Dashboard />} />
          <Route path="/details/:rowIndex" element={<MemberDetails />} />
          <Route path="/reports/:promoEventId" element={<PromoEventDetails />} />
          <Route path="/members/member/:memberId" element={<MemberTable />} />
          <Route path="/members/create-member" element={<CreateMember />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brandName="DOTPLAYPLAY"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {/* {configsButton} */}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:username" element={<AdminDetails />} />
          <Route path="/detail/:rowId" element={<MemberDetails />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="/details/:rowIndex" element={<MemberDetails />} />
          <Route path="/members/member/:memberId" element={<MemberTable />} />
          <Route path="/members/create-member" element={<CreateMember />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>

    // </CacheProvider>
  )

  // : (

  //   <>
  //     <ToastContainer />

  //     <ThemeProvider theme={theme}>
  //       <CssBaseline />
  //       {layout === "dashboard" && (
  //         <>
  //           <Sidenav
  //             color={sidenavColor}
  //             brandName="DOTPLAYPLAY"
  //             routes={routes}
  //             onMouseEnter={handleOnMouseEnter}
  //             onMouseLeave={handleOnMouseLeave}
  //           />
  //           <Configurator />
  //           {/* {configsButton} */}
  //         </>
  //       )}
  //       {layout === "vr" && <Configurator />}
  //       <Routes>
  //         {getRoutes(routes)}
  //         <Route path="/" element={<Dashboard />} />
  //         <Route path="/details/:username" element={<AdminDetails />} />
  //         <Route path="/detail/:rowId" element={<MemberDetails />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </ThemeProvider>
  //   </>

  //         <Route path="*" element={<Dashboard />} />
  //         <Route path="/details/:rowIndex" element={<MemberDetails />} />
  //         <Route path="/members/member/:memberId" element={<MemberTable />} />
  //         <Route path="/members/create-member" element={<CreateMember />} />
  //       </Routes>
  //   </ThemeProvider>
  // );
}
