/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'


const memberData = {
  // Basic Information
  basicInfo: [
    { id: "basic-info", title: "Basic Information"},
    { name: "user ID", type: 'string', value: "12qrtzqi1", id: "userId" },
    { name: "Username", type: 'string', value: "Ifeanyi345", id: "username" },
    { name: "Tag", type: 'string', value: "P2E", id: "tag" },
    { name: "Mobile", type: 'string', value: "+2349039108633", id: "mobile" },
    { name: "Verified mobile", type: 'boolean', value: true, id: "emailAddress" },
    { name: "Email address", type: 'string', value: "valiantlongemail@gmail.com", id: "verifiedMobile" },
    { name: "Verified email address", type: 'boolean', value: true, id: "verifiedEmailAddress" },
    { name: "Password", type: 'boolean', value: "223456", id: "password" },
    { name: "2FA", type: 'boolean', value: true, id: "twoFactorAuth" },
    { name: "KYC", type: 'boolean', value: true, id: "kyc" },
    { name: "Hide gaming data", type: 'boolean', value: true, id: "hideGamingData" },
    { name: "Hide username", type: 'boolean', value: true, id: "hideUsername" },
    { name: "Refuse Tip", type: 'boolean', value: true, id: "refuceTip" },
    { name: "Chat", type: 'boolean', value: true, id: "chat" },
    { name: "Suspend", type: 'boolean', value: true, id: "suspend" },
  ],

  // Account Information
  accountInfo: [
    {name: 'Last Login Date', type: 'string', value: '14/03/2023 GMT +8'},
    {name: 'Last IP Address', type: 'string', value: '192.128.68.03'},
    {name: 'Last Deposit', type: 'string', value: '$4,034'},
    {name: 'Last Withdrawal', type: 'string', value: '$2,003'},
  ],
  
  // Session Information
  sessionsInfo: {
    columns: [
      { name: "Browser", align: "left" },
      { name: "Location", align: "center" },
      { name: "IP Address", align: "center" },
      { name: "Last Used", align: "center" },
      { name: "Action", align: "center" },
    ],
    rows: [
      {
        browser: "Chrome 11",
        location: "LD",
        ipAddress: "146.11.11.23",
        lastUsed: "Online",
        action: "In use",
      },
      {
        browser: "Safari",
        location: "UK",
        ipAddress: "146.11.11.23",
        lastUsed: "Offline",
        action: "In use",
      },
      {
        browser: "Microsoft Edge",
        location: "NG",
        ipAddress: "146.11.11.23",
        lastUsed: "Offline",
        action: "In use",
      },
    ],
  },
    
  // VIP Information
  vipInfo: [
    { name: "Level", type: 'string', value: "7", id: "level" },
    { name: "Rank", type: 'string', value: "Bronze", id: "rank" },
    { name: "Total Wagered", type: 'string', value: "$43,345", id: "totalWagered" },
    { name: "Roll Point Game", type: 'show_boolean', value: true, id: "rollPointGame" },
    { name: "Send Rain", type: 'show_boolean', value: true, id: "emailAddress" },
    { name: "Receive Rain", type: 'show_boolean', value: true, id: "receiveRain" },
    { name: "Send Coindrop", type: 'show_boolean', value: true, id: "sendCoindrop" },
    { name: "Receive Coindrop", type: 'show_boolean', value: true, id: "receiveCoindrop" },
    { name: "Send Tip", type: 'show_boolean', value: false, id: "sendTip" },
    { name: "Hit Bingo", type: 'show_boolean', value: false, id: "hitBingo" },
    { name: "No Fee Withdrawal", type: 'show_boolean', value: false, id: "noFeeWithdrawal" },
    { name: "Recharge", type: 'boolean', value: false, id: "recharge" },
    { name: "Weekly Cashback", type: 'boolean', value: false, id: "weeklyCashback" },
    { name: "Monthly Cashback", type: 'boolean', value: false, id: "monthlyCashback" },
  ],
    
  // Affiliate Information
  affiliateInfo: [
    { name: "Referral Code", type: 'text', value: "745644334", id: "referralCode" },
    { name: "No. of Invitees", type: 'text', value: "34", id: "noOfInvitees" },
    { name: "Commission method", type: 'text', value: "Profit sharing", id: "commissionMethod" },
    { name: "Suspend", type: 'boolean', value: true, id: "suspend" },
  ],
  
  // Basic Information
  walletInfo: [
    { name: "USDT Balance", type: 'string', value: "$95,345", id: "usdtBalance" },
    { name: "PPD Balance", type: 'string', value: "$9,435", id: "ppdBalance" },
    { name: "PPL Balance", type: 'string', value: "$53,334", id: "pplBalance" },
    { name: "PPF Balance", type: 'string', value: "$34,034", id: "ppfBalance" },
    { name: "Total Monetary Balance", type: 'sting', value: '$345,345', id: "totalMonetaryBalance" },
  ],

  // Game Settings
  gameSetting: [
    { name: "Crash", type: 'boolean', value: true, id: "crash" },
    { name: "Hilo", type: 'boolean', value: false, id: "hilo" },
    { name: "Mines", type: 'boolean', value: false, id: "mines" },
    { name: "Tower", type: 'boolean', value: false, id: "tower" },
    { name: "Keno", type: 'boolean', value: false, id: "keno" },
    { name: "Dice", type: 'boolean', value: false, id: "dice" },
    { name: "Plinko", type: 'boolean', value: false, id: "plinko" },
    { name: "Lottery", type: 'boolean', value: false, id: "lottery" },
  ],
  
  // Game Report
  gameReport: {
    columns: [
      { name: "Date", align: "left" },
      { name: "Game Type", align: "center" },
      { name: "Total Wagered", align: "center" },
      { name: "Total Payout", align: "center" },
      { name: "Total GGR", align: "center" },
    ],
    rows: [
      {
        date: "03/05/2023",
        time: "23:45",
        gameTypes: "orginal",
        totalWagered: "$3,543",
        totalPayout: "$43,543",
        totalGgr: "$345,234",
      },
      {
        date: "03/05/2023",
        time: "23:45",
        gameTypes: "orginal",
        totalWagered: "$45,345",
        totalPayout: "$43,543",
        totalGgr: "$345,234",
      },
      {
        date: "03/05/2023",
        time: "23:45",
        gameTypes: "orginal",
        totalWagered: "$45,345",
        totalPayout: "$43,543",
        totalGgr: "$345,234",
      },
    ],
  },
  
  // Details Table
  detailsTable: {
    columns: [
      { name: "Date", align: "left" },
      { name: "Details", align: "center" },
      { name: "Wager", align: "center" },
      { name: "Payout", align: "center" },
      { name: "Profit/Loss", align: "center" },
      { name: "Company GGR", align: "center" },
    ],
    rows: [
      {
        date: "10/03/2023",
        time: "23:45",
        details: "https://bc.game/#/sd/11IHVPDY7C5V27",
        wager: "$100",
        payout: "$195",
        profitLoss: "win",
        companyGgr: "$95",
      },
      {
        date: "03/05/2023",
        time: "23:45",
        details: "https://bc.game/#/sd/11IHVPDY7C5V27",
        wager: "$100",
        payout: "$195",
        profitLoss: "win",
        companyGgr: "$95",
      },
      {
        date: "10/03/2023",
        time: "23:45",
        details: "https://bc.game/#/sd/11IHVPDY7C5V27",
        wager: "$100",
        payout: "$195",
        profitLoss: "win",
        companyGgr: "$95",
      },
    ],
  },
  
  // Transaction Log
  UsdtInfo: {
    head: [
      {title: 'USDT Wallet', id: 'usdt-wallet'}
    ],
    columns: [
      { name: "Date", align: "left" },
      { name: "TransID", align: "center" },
      { name: "Type", align: "center" },
      { name: "Remark", align: "center" },
      { name: "Debit", align: "center" },
      { name: "Credit", align: "center" },
      { name: "Balance", align: "center" },
    ],
    rows: [
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Top Up",
        remark: "success",
        debit: "$345",
        credit: "-",
        balance: "$43,543",
      },
      {
        date: "10/05/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Unload",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Swap",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
    ],
  },

  
  PpdInfo: {
    head: [
      {title: 'PPD Wallet', id: 'ppd-wallet'}
    ],
    columns: [
      { name: "Date", align: "left" },
      { name: "TransID", align: "center" },
      { name: "Type", align: "center" },
      { name: "Remark", align: "center" },
      { name: "Debit", align: "center" },
      { name: "Credit", align: "center" },
      { name: "Balance", align: "center" },
    ],
    rows: [
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Top Up",
        remark: "success",
        debit: "$345",
        credit: "-",
        balance: "$43,543",
      },
      {
        date: "10/05/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Unload",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Swap",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
    ],
  },

  
  PplInfo: {
    head: [
      {title: 'PPL Wallet', id: 'ppl-wallet'}
    ],
    columns: [
      { name: "Date", align: "left" },
      { name: "TransID", align: "center" },
      { name: "Type", align: "center" },
      { name: "Remark", align: "center" },
      { name: "Debit", align: "center" },
      { name: "Credit", align: "center" },
      { name: "Balance", align: "center" },
    ],
    rows: [
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Top Up",
        remark: "success",
        debit: "$345",
        credit: "-",
        balance: "$43,543",
      },
      {
        date: "10/05/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Unload",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Swap",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
    ],
  },

  
  PpfInfo: {
    head: [
      {title: 'PPF Wallet', id: 'ppf-wallet'}
    ],
    columns: [
      { name: "Date", align: "left" },
      { name: "TransID", align: "center" },
      { name: "Type", align: "center" },
      { name: "Remark", align: "center" },
      { name: "Debit", align: "center" },
      { name: "Credit", align: "center" },
      { name: "Balance", align: "center" },
    ],
    rows: [
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Top Up",
        remark: "success",
        debit: "$345",
        credit: "-",
        balance: "$43,543",
      },
      {
        date: "10/05/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Unload",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Swap",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
    ],
  },

  
  PpeInfo: {
    head: [
      {title: 'PPE Wallet', id: 'ppe-wallet'}
    ],
    columns: [
      { name: "Date", align: "left" },
      { name: "TransID", align: "center" },
      { name: "Type", align: "center" },
      { name: "Remark", align: "center" },
      { name: "Debit", align: "center" },
      { name: "Credit", align: "center" },
      { name: "Balance", align: "center" },
    ],
    rows: [
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Top Up",
        remark: "success",
        debit: "$345",
        credit: "-",
        balance: "$43,543",
      },
      {
        date: "10/05/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Unload",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
      {
        date: "10/03/2023",
        time: "23:45",
        transId: "tns0003323",
        type: "Swap",
        remark: "success",
        debit: "-",
        credit: "$345",
        balance: "$43,543",
      },
    ],
  },

  DepositBonusLog: {
    head: [
      {title: 'Deposit Bonus Log', id: 'deposit-bonus-log'},
    ],
    columns: [
      { name: "Transaction Date", align: "left" },
      { name: "Promo Event", align: "center" },
      { name: "Credit Amount", align: "center" },
      { name: "Status", align: "center" },
    ],
    rows: [
      {
        date: "10/03/2023",
        time: "23:45",
        promoEvent: "1st Deposit 180%",
        creditAmount: "$1,345",
        status: "success",
      },
      {
        date: "10/05/2023",
        time: "23:45",
        promoEvent: "1st Deposit 180%",
        creditAmount: "$1,345",
        status: "success",
      },
      {
        date: "10/03/2023",
        time: "23:45",
        promoEvent: "1st Deposit 180%",
        creditAmount: "$1,345",
        status: "success",
      },
    ],
  },

    // Action
    Action: [
    { name: "Claim Button", type: 'boolean', value: true, id: "claimButton" },
    { name: "Suspend from Withdrawal", type: 'boolean', value: false, id: "suspendFromWithdrawal" },
  ],
}

export default memberData;