import React, {useState} from 'react'
import Grid from "@mui/material/Grid";
import "./cards/index.css"
import "./cards/nav.css"
import Header from './components/navbar'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Wallet from 'layouts/genaral_settings/components/wallet'
import SoftBox from "components/SoftBox";
export default function Settings() {

  return (
    <DashboardLayout>
         <Header  />
         <SoftBox mt={5} mb={3}>
          <Grid item xs={12} md={6} xl={4}>
              <Wallet />
            </Grid>
          </SoftBox>
    </DashboardLayout>
  )
}
