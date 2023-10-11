/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Switch from "@mui/material/Switch";
import SoftTypography from "components/SoftTypography";

const initialSettings = {
  twoFA: false,
  kyc: false,
  gameData: false,
  hideUsername: false,
  refuseTip: false,
  chat: false,
  suspend: false,
  rollPoint: false,
  sendRain: false,
  receiveRain: false,
  sendCoindrop: false,
  receiveCoindrop: false,
  sendTip: false,
  hitBingo: false,
  noFeeWithdrawal: false,
  recharge: false,
  weeklyCashback: false,
  monthlyCashback: false,
  suspendAffiliate: false,
};

const memberData = {
  // Basic Information
  basicInfo: {
    columns: [
      { name: "user ID", align: "left" },
      { name: "Username", align: "left" },
      { name: "Tag", align: "left" },
      { name: "Mobile", align: "left" },
      { name: "Verified mobile", align: "left" },
      { name: "Email address", align: "left" },
      { name: "Verified email address", align: "left" },
      { name: "Password", align: "left" },
      { name: "2FA", align: "left" },
      { name: "KYC", align: "left" },
      { name: "Hide gaming data", align: "center" },
      { name: "Hide username", align: "left" },
      { name: "Rediue Tip", align: "left" },
      { name: "Chat", align: "left" },
      { name: "Suspend", align: "left" },
    ],
    rows: [
      {
        userId: "12qrtzqi1",
        username: "Ifeanyi345",
        tag: "P2E",
        mobile: "P2E",
        emailAddress: "P2E",
        verifiedMobile: true,
        verifiedEmailAddress: true,
        twoFactorAuth: true,
        kyc: true,
        hideGamingData: true,
        hideUsername: true,
        refuceTip: true,
        chat: true,
        suspend: true,
      }
    ]
  },

  // Account Information
  accountInfo: {
    columns: [
      { name: "ogin", align: "left" },
      { name: "Date", align: "center" },
    ],
    rows: [
      {
        lastLoginDate: "10/02/2023",
        lastLoginTime: "05:40:20",
      },
    ]
  },
  
  // Session Information
  sessionsInfo: {
    columns: [
      { name: "Browser", align: "left" },
      { name: "Location", align: "center" },
      { name: "IPAddress", align: "center" },
      { name: "LastUsed", align: "center" },
      { name: "Action", align: "center" },
      { name: "Action", align: "center" },
      { name: "Action", align: "center" },
      { name: "Action", align: "center" },
      { name: "Action", align: "center" },
      { name: "Action", align: "center" },
    ],
    rows: [
      {
        Browser: "Chrome 11",
        Location: "MY",
        IPAddress: "146.11.11.23",
        LastUsed: "Online",
        Action: "In use",
      }
    ]
  }
}

export default memberData;