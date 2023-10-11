/* eslint-disable */
import React, { useState } from "react";
import Sidebar from "./sidebar";
import SoftBox from "components/SoftBox";
import Footer from "examples/Footer";
import MemberTable from "./components";
import Grid from "@mui/material/Grid";

const MemberTableLayout = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-1">
          <MemberTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MemberTableLayout;