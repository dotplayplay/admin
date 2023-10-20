import React from 'react'
import SoftTypography from "components/SoftTypography";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import '../styles/index.css'

export default function Chats() {
  return (
    <Card sx={{ height: "100%" }}>
    <SoftBox pt={2} px={2}>
      <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
       Live Chat
      </SoftTypography>
    </SoftBox>
    <SoftBox p={2}>
      <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        <div className="chatbox">
            <div className="chatbox-container">
                <div className="sender">
                    <div className="sender-contents">
                        <span>Hello</span>
                    </div>
                </div>
                <div className="receiver">
                    <div className="receiver-contents">
                        <span>Let us know how we can help you
                        </span>
                    </div>
                </div>
                <div className="sender">
                    <div className="sender-contents">
                        <span>Okay</span>
                    </div>
                </div>
            </div>
            <div className="input-messages">
                <div className="input-messages-conatiner">
                    <input type="text" placeholder='Reply' />
                    <button>send</button>
                </div>
            </div>
        </div>
      </SoftBox>
    </SoftBox>
  </Card>
  )
}
