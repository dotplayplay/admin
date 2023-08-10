import React, {useState} from 'react'
import Grid from "@mui/material/Grid";
import "./cards/index.css"
import "./cards/nav.css"
import Header from './components/navbar'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Wallet from 'layouts/genaral_settings/components/wallet'
import Games from "layouts/genaral_settings/components/games"
import Chat from "layouts/genaral_settings/components/chats"
import SoftBox from "components/SoftBox";
export default function Settings() {

  const [ isWallet, setIsWallet ] = useState(true)
  const [ isGame, setGame ] = useState(false)
  const [ ischat, setChat ] = useState(false)

  const handleTaps = ((e)=>{
    setIsWallet(false)
    setGame(false)
    setChat(false)
    if(e === "wallet"){
      setIsWallet(true)
    }
    else if( e === "game"){
      setGame(true)
    }else if ( e === "chat"){
      setChat(true)
    }
  })

  return (
    <DashboardLayout>
         <Header handleTaps={handleTaps}  />
         { isWallet &&  <SoftBox mt={5} mb={3}>
            <Grid item xs={12} md={6} xl={4}>
              <Wallet />
            </Grid>
          </SoftBox>  }
          { isGame &&  <SoftBox mt={5} mb={3}>
            <Grid item xs={12} md={6} xl={4}>
              <Games />
            </Grid>
          </SoftBox>  }
          { ischat &&  <SoftBox mt={5} mb={3}>
            <Grid item xs={12} md={6} xl={4}>
              <Chat />
            </Grid>
          </SoftBox>  }
    </DashboardLayout>
  )
}
