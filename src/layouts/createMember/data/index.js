/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'


const memberData = {
  // Basic Information
  basicInfo: [
    { id: "basic-info", title: "Basic Information"},
    { name: "user ID", type: 'string', value: "12qrtzqi1", id: "userId" },
    { name: "Username", type: 'string', value: "aUniqueUsername123", id: "username" },
    { name: "Tag", type: 'string', value: "P2E", id: "tag" },
    { name: "Mobile", type: 'string', value: "+12453456234", id: "mobile" },
    { name: "Verified mobile", type: 'boolean', value: false, id: "emailAddress" },
    { name: "Email address", type: 'string', value: "myemailaddress@gmail.com", id: "verifiedMobile" },
    { name: "Verified email address", type: 'boolean', value: false, id: "verifiedEmailAddress" },
    { name: "Password", type: 'string', value: "123456qwert", id: "password" },
    { name: "2FA", type: 'boolean', value: false, id: "twoFactorAuth" },
    { name: "KYC", type: 'boolean', value: false, id: "kyc" },
    { name: "Hide gaming data", type: 'boolean', value: false, id: "hideGamingData" },
    { name: "Hide username", type: 'boolean', value: false, id: "hideUsername" },
    { name: "Refuse Tip", type: 'boolean', value: false, id: "refuceTip" },
    { name: "Chat", type: 'boolean', value: false, id: "chat" },
    { name: "Suspend", type: 'boolean', value: false, id: "suspend" },
  ],
}

export default memberData;