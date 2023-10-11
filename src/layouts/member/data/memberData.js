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
  basicInfo: [
    { name: "user ID", value: "12qrtzqi1", id: "userId" },
    { name: "Username", value: "Ifeanyi345", id: "username" },
    { name: "Tag", value: "P2E", id: "tag" },
    { name: "Mobile", value: "+2349039108633", id: "mobile" },
    { name: "Verified mobile", value: true, id: "emailAddress" },
    { name: "Email address", value: "valiantlongemail@gmail.com", id: "verifiedMobile" },
    { name: "Verified email address", value: true, id: "verifiedEmailAddress" },
    { name: "Password", value: "223456", id: "password" },
    { name: "2FA", value: true, id: "twoFactorAuth" },
    { name: "KYC", value: true, id: "kyc" },
    { name: "Hide gaming data", value: true, id: "hideGamingData" },
    { name: "Hide username", value: true, id: "hideUsername" },
    { name: "Rediue Tip", value: true, id: "refuceTip" },
    { name: "Chat", value: true, id: "chat" },
    { name: "Suspend", value: true, id: "suspend" },
  ],

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