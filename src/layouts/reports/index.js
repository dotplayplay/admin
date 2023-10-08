import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import GameReport from './components/gameReport/GameReport';
import DailyReport from './components/dailyReport/DailyReport';
import GgrReport from './components/ggrReport';
import DepositBonusReport from './components/depositBonusReport';
import Header from './components/navbar';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import SoftBox from "components/SoftBox";
import Footer from "examples/Footer";

const Report = () => {
  const [isGameReport, setGameReport] = useState(true);
  const [isDailyReport, setDailyReport] = useState(false);
  const [isGgrReport, setGgrReport] = useState(false);
  const [isDepositBonusReposit, setDepositBonusReposit] = useState(false);

  const handleTaps = ((e) => {
    setGameReport(false);
    setDailyReport(false);
    setGgrReport(false);
    setDepositBonusReposit(false);
    if (e === "gameReport") {
      setGameReport(true);
    }
    else if (e === "dailyReport") {
      setDailyReport(true);
    } else if (e === "ggrReport") {
      setGgrReport(true);
    } else if (e === "depositBonusReport") {
      setDepositBonusReposit(true);
    }
  });


  return (
    <div>
      <Header handleTaps={handleTaps} />
      {isGameReport && <SoftBox mt={2} mb={1}>
        <Grid item xs={12} md={6} xl={4}>
          <GameReport />
        </Grid>
      </SoftBox>}
      {isDailyReport && <SoftBox mt={2} mb={1}>
        <Grid item xs={12} md={6} xl={4}>
          <DailyReport />
        </Grid>
      </SoftBox>}
      {isGgrReport && <SoftBox mt={2} mb={1}>
        <Grid item xs={12} md={6} xl={4}>
          <GgrReport />
        </Grid>
      </SoftBox>}
      {isDepositBonusReposit && <SoftBox mt={2} mb={1}>
        <Grid item xs={12} md={6} xl={4}>
          <DepositBonusReport />
        </Grid>
      </SoftBox>}
      <Footer />
    </div>
  );
};

export default Report;
