import React, { useState } from 'react'
import Header from './components/navbar';
import SoftBox from "components/SoftBox";
import Footer from "examples/Footer";

const UserTable = () => {
  const [isAuthors, setAuthors] = useState(true);
  const [isMembers, setMembers] = useState(false);
  const [isDepositBonusReposit, setDepositBonusReposit] = useState(false);

  const handleTaps = ((e, {children}) => {
    setAuthors(false);
    setMembers(false);
    
    if (e === "authors") {
      setAuthors(true);
    } else if (e === "members") {
      setMembers(true);
    }
  });


  return (
    <div>
      <Header handleTaps={handleTaps} />
        <SoftBox mt={2} mb={1}>
          {/* {children} */}
        </SoftBox>
      <Footer />
    </div>
  );
};

export default UserTable;
