import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
// redux 
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../reducers/actions';

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";
import { useSoftUIController, setMiniSidenav } from "context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  // close sidebar button
  const customDispatch = useDispatch();
  const closeSidenav = () => {
    const isReportPage = pathname === '/reports';
    if (isReportPage) {
      customDispatch(toggleSidebar(false));
    } else {
      setMiniSidenav(dispatch, true);
    }
  }

  const [isSidebarBg, setIsSidebarBg] = useState(false);
  useEffect(() => {
    const isReportPage = pathname === '/reports';
    if (!isReportPage) {
      // A function that sets the mini state of the sidenav.
      function handleMiniSidenav() {
        setMiniSidenav(dispatch, window.innerWidth < 1200);
      }
      // set's sidebar background to transparent
      setIsSidebarBg(false);

      window.addEventListener("resize", handleMiniSidenav);
      handleMiniSidenav();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleMiniSidenav);
    } else if(isReportPage) {
      setIsSidebarBg(true);
    }
    
  }, [dispatch, location]);

  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            color={color}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key}>
          <SidenavCollapse
            color={color}
            key={key}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <SoftTypography
          key={key}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          opacity={0.6}
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </SoftTypography>
      );
    } else if (type === "divider") {
      returnValue = <Divider key={key} />;
    }

    return returnValue;
  });


  const [closeSidebarButton, showCloseSidebarButton] = useState(false);
  const showSidebar = useSelector(state => state.showSidebar);
  useEffect(() => {
    const isReportPage = pathname === '/reports';
    const isSignPage = () => pathname.includes("authentication")
    console.log(showSidebar);

    if (isReportPage || isSignPage()) {
      showCloseSidebarButton(true);
      customDispatch(toggleSidebar(false));
      console.log(location.pathname);
    } else {
      showCloseSidebarButton(false);
      customDispatch(toggleSidebar(true));
    }
    
  }, [location.pathname, customDispatch])
  
  return (
    <>
    {showSidebar && <SidenavRoot {...rest} variant="permanent" ownerState={{ ...(isSidebarBg ? { miniSidenav } : { transparentSidenav, miniSidenav })}}>
      <SoftBox pt={3} pb={1} px={4} textAlign="center">
        <SoftBox
          display={{ xs: "block", xl: closeSidebarButton? "block" : "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SoftTypography>
        </SoftBox>
        <SoftBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <SoftBox component="img" src={brand} alt="lol" width="2rem" />}
          <SoftBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <SoftTypography component="h6" variant="button" fontWeight="medium">
              {brandName}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Divider />
      <List>{renderRoutes}</List>
    </SidenavRoot>}
    </>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
