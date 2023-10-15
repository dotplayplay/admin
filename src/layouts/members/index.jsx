/* eslint-disable */
import React, { useState } from "react";
import Header from "./navbar";
import SoftBox from "components/SoftBox";
import Footer from "examples/Footer";
import MembersTableComponent from './components';

const MembersTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = ( query ) => {
    setSearchQuery(query);
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
        <SoftBox mt={2} mb={1}>
          <MembersTableComponent searchQuery={searchQuery} />
        </SoftBox>
      <Footer />
    </div>
  );
};

export default MembersTable;