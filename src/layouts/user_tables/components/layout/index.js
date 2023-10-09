/* eslint-disable */
import React, { useState } from "react";
import Header from "../navbar";
import SoftBox from "components/SoftBox";
import Footer from "examples/Footer";

const UserTableLayout = ({ children }) => {
  return (
    <div>
      <Header />
        <SoftBox mt={2} mb={1}>
          {children}
        </SoftBox>
      <Footer />
    </div>
  );
};

export default UserTableLayout;
