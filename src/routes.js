/** 
  All of the routes  are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

//  layouts
import Dashboard from "layouts/dashboard";
import Report from "layouts/reports";
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import Create from "layouts/create_admin";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Genaral from "layouts/genaral_settings";
import AdminSetting from "layouts/adminTables";

//  icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import { GoReport } from "react-icons/go";
import { MdOutlineVideogameAssetOff } from "react-icons/md";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Members",
    key: "members",
    route: "/members",
    icon: <Office size="12px" />,
    component: <MembersTable />,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    route: "/reports",
    icon: <GoReport size="12px" />,
    component: <Report />,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "General settings",
    key: "genaral-settings",
    route: "/genaral-settings",
    icon: <Settings size="12px" />,
    component: <Genaral />,
    noCollapse: true
  },
  {
    name: "User Profile",
    key: "user-pofile",
    route: "/user-pofile",
    icon: <Settings size="12px" />,
    component: <Userprofile />,
    noCollapse: true
  },

  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "Create Admin",
    // key: "Create Amdin",
    route: "/Create",
    // icon: <CustomerSupport size="12px" />,
    component: <Create />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Admin settings",
    key: "admin-settings",
    route: "/admin-settings",
    icon: <Settings size="12px" />,
    component: <AdminSetting />,
    noCollapse: true
  },

  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
/** 
  All of the routes  are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

//  layouts
// import Dashboard from "layouts/dashboard";
// import Report from "layouts/reports";
// import MembersTable from "layouts/members";
// import Tables from "layouts/tables";
// import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
// import Genaral from "layouts/genaral_settings"
// import Userprofile from "layouts/userprofile";

// //  icons
// import Shop from "examples/Icons/Shop";
// import Office from "examples/Icons/Office";
// import Settings from "examples/Icons/Settings";
// import Document from "examples/Icons/Document";
// import SpaceShip from "examples/Icons/SpaceShip";
// import CustomerSupport from "examples/Icons/CustomerSupport";
// import { GoReport } from "react-icons/go";

// const routes = [
//   {
//     type: "collapse",
//     name: "Dashboard",
//     key: "dashboard",
//     route: "/dashboard",
//     icon: <Shop size="12px" />,
//     component: <Dashboard />,
//     noCollapse: true,
//   },
//   {
//     type: "collapse",
//     name: "Members",
//     key: "members",
//     route: "/members",
//     icon: <Office size="12px" />,
//     component: <MembersTable />,
//     noCollapse: true
//   },
//   // {
//   //   type: "collapse",
//   //   name: "Users Tables",
//   //   key: "tables",
//   //   route: "/tables",
//   //   icon: <Office size="12px" />,
//   //   component: <Tables />,
//   //   noCollapse: true
//   // },
//   {
//     type: "collapse",
//     name: "Reports",
//     key: "reports",
//     route: "/reports",
//     icon: <GoReport size="12px" />,
//     component: <Report />,
//     noCollapse: true
//   },
//   {
//     type: "collapse",
//     name: "General settings",
//     key: "genaral-settings",
//     route: "/genaral-settings",
//     icon: <Settings size="12px" />,
//     component: <Genaral />,
//     noCollapse: true
//   },

//   {
//     name: "User Profile",
//     key: "user-pofile",
//     route: "/user-pofile",
//     icon: <Settings size="12px" />,
//     component: <Userprofile />,
//     noCollapse: true
//   },
  
  
//   { type: "title", title: "Account Pages", key: "account-pages" },
//   {
//     type: "collapse",
//     name: "Profile",
//     key: "profile",
//     route: "/profile",
//     icon: <CustomerSupport size="12px" />,
//     component: <Profile />,
//     noCollapse: true,
//   },

//   {
//     type: "collapse",
//     name: "Sign In",
//     key: "sign-in",
//     route: "/authentication/sign-in",
//     icon: <Document size="12px" />,
//     component: <SignIn />,
//     noCollapse: true,
//   },
//   {
//     type: "collapse",
//     name: "Sign Up",
//     key: "sign-up",
//     route: "/authentication/sign-up",
//     icon: <SpaceShip size="12px" />,
//     component: <SignUp />,
//     noCollapse: true,
//   },
// ];

// export default routes;
