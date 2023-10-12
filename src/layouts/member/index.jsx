/* eslint-disable */
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Footer from "examples/Footer";
import MemberTable from "./components";

const MemberTableLayout = () => {
  return (
    <div className="w-full">
      <div className="w-full flex overflow-x-hidden">
        <div className="sticky top-0 w-max h-screen">
          <Sidebar />
        </div>
        <div className="data_column w-full h-screen relative py-2 px-1 md:px-3 overflow-y-scroll">
          <MemberTable />
          <div className="p-2 bg-white w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberTableLayout;