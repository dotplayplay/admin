import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import GameReport from './components/gameReport/GameReport';
import DailyReport from './components/dailyReport/DailyReport';
import GgrReport from './components/ggrReport';
import Header from './components/navbar';
import SoftBox from "components/SoftBox";
import Footer from "examples/Footer";

const Report = () => {
  const [isGameReport, setGameReport] = useState(true)
  const [isDailyReport, setDailyReport] = useState(false)
  const [isGgrReport, setGgrReport] = useState(false)

  const handleTaps = ((e) => {
    setGameReport(false)
    setDailyReport(false)
    setGgrReport(false)
    if (e === "gameReport") {
      setGameReport(true)
    }
    else if (e === "dailyReport") {
      setDailyReport(true)
    } else if (e === "ggrReport") {
      setGgrReport(true)
    }
  })

  return (
    <div>
      <Header handleTaps={handleTaps} />
      {isGameReport && <SoftBox mt={5} mb={3}>
        <Grid item xs={12} md={6} xl={4}>
          <GameReport />
        </Grid>
      </SoftBox>}
      {isDailyReport && <SoftBox mt={5} mb={3}>
        <Grid item xs={12} md={6} xl={4}>
          <DailyReport />
        </Grid>
      </SoftBox>}
      {isGgrReport && <SoftBox mt={5} mb={3}>
        <Grid item xs={12} md={6} xl={4}>
          <GgrReport />
        </Grid>
      </SoftBox>}
      <Footer />
    </div>
  );
};

export default Report;
