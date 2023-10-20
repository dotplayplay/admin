/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import SoftBox from "components/SoftBox";
import Switch from "@mui/material/Switch";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import { MdModeEdit } from "react-icons/md";

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

const editRole = () => {
  const [username, setUsername] = useState("John Michael");
  const [isUsername, setIsUsername] = useState(false);
  const [number, setNumber] = useState("07060031319");
  const [isNumber, setIsNumber] = useState(false);
  const [settings, setSettings] = useState(initialSettings);
  const handleSettingChange = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  const [twoFA, setTwoFA] = useState(false);
  const [kyc, setKyc] = useState(false);
  const [gameData, setGameData] = useState(false); 
  const [hideUsername, setHideUsername] = useState(false);
  const [refuseTip, setRefuseTip] = useState(false);
  const [chat, setChat] = useState(false);
  const [suspend, setSuspend] = useState(false);
  const [rollPoint, setRollpoint] = useState(false);
  const [sendRain, setRain] = useState(false);
  const [receiveRain, setReceiveRain] = useState(false);
  const [sendCoindrop, setSendCoindrop] = useState(false);
  const [receiveCoindrop, setReceiveCoindrop] = useState(false);
  const [sendTip, setSendTip] = useState(false);
  const [hitBingo, setHitBingo] = useState(false);
  const [noFeeWithdrawal, setNoFeeWithdrawal] = useState(false);
  const [recharge, setRecharge] = useState(false);
  const [weeklyCashback, setWeeklyCashback] = useState(false);
  const [monthlyCashback, setMonthlyCashback] = useState(false);
  const [suspendAffiliate, setSuspendAffliate] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const handleEdit = (e) => {
    if (e === 1) {
      setIsUsername(false)
    }
    if (e === 2) {
      setIsNumber(false)
    }
  }

  const basicInformation = {
    basicInfoColumns: [
      { name: "user", align: "left" },
      { name: "option", align: "center" },
    ],
    basicInfoRows: [
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            UserID
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            12qrtzqi1
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            username
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <div className="flex gap-2 items-center">
              <div>
                {isUsername ? (
                  <input
                    key="inputUsername"
                    type="text"
                    value={username}
                    onChange={handleInput}
                    className="text-[#000]"
                    placeholder="username"
                  />
                ) : (
                  <p>{username}</p>
                )}
              </div>
              {isUsername ?
                <button onClick={() => handleEdit(1)}>Set</button>
                : <button onClick={() => isUsername ? setIsUsername(false) : setIsUsername(true)} ><MdModeEdit /></button>}
            </div>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            tag
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="dark" fontWeight="medium">
            <select className="rounded-[5px]">
              <option>Gambler</option>
              <option>P2E</option>
            </select>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Mobile
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <div className="flex gap-2 items-center">
              <div>
                {isNumber ? (
                  <input
                    key="number"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="text-[#000]"
                    placeholder="username"
                  />
                ) : (
                  <p>{number}</p>
                )}
              </div>
              {isNumber ?
                <button onClick={() => handleEdit(2)}>Set</button>
                : <button onClick={() => isNumber ? setIsNumber(false) : setIsNumber(true)} ><MdModeEdit /></button>}
            </div>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Password
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <button>change password</button>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            2FA
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.twoFA} onChange={() => handleSettingChange("twoFA")} />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            KYC
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.kyc} onChange={() => handleSettingChange("kyc")} />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Hide gaming data
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.gameData} onChange={() => handleSettingChange("gameData")} />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Hide username
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.hideUsername} onChange={() => handleSettingChange("hideUsername")} />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Refuse Tip
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.refuseTip} onChange={() => handleSettingChange("refuseTip")} />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Chat
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.chat} onChange={() => handleSettingChange("chat")} />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Suspend
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.suspend} onChange={() => handleSettingChange("suspend")} />
          </SoftTypography>
        ),
      },
    ]
  }

  const accountInformation = {
    accInfoColumns: [
      { name: "Login", align: "left" },
      { name: "Date", align: "center" },
    ],
    accInfoRows: [
      {
        Login: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Last login Date:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
      },
      {
        Login: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Last IP Address:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            146.11.11.23
          </SoftTypography>
        ),
      },
      {
        Login: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Last Deposit:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            300$
          </SoftTypography>
        ),
      },
      {
        Login: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Last Withdrawal:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            120$
          </SoftTypography>
        ),
      },
    ]
  }

  const sessions = {
    sessionColumns: [
      { name: "Browser", align: "left" },
      { name: "Location", align: "center" },
      { name: "IPAddress", align: "center" },
      { name: "LastUsed", align: "center" },
      { name: "Action", align: "center" },
    ],
    sessionRows: [
      {
        Browser: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Chrome 11
          </SoftTypography>
        ),
        Location: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            MY
          </SoftTypography>
        ),
        IPAddress: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            146.11.11.23
          </SoftTypography>
        ),
        LastUsed: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Online
          </SoftTypography>
        ),
        Action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            In use
          </SoftTypography>
        ),
      }
    ]
  }

  const vipInformaton = {
    vipInfoColumns: [
      { name: "vips", align: "left" },
      { name: "action", align: "center" },
    ],
    vipInfoRows: [
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Level
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <select className="text-[#000] rounded-[5px]">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Rank
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bronze
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Total Wagered
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            300$
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Roll point game
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.rollPoint} onChange={() => handleSettingChange("rollPoint")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Send Rain
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.sendRain} onChange={() => handleSettingChange("sendRain")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Recieve rain
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.receiveRain} onChange={() => handleSettingChange("receiveRain")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Send coindrop
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.sendCoindrop} onChange={() => handleSettingChange("sendCoindrop")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Recieve coindrop
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.receiveCoindrop} onChange={() => handleSettingChange("receiveCoindrop")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Send tip
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.sendTip} onChange={() => handleSettingChange("sendTip")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Hit bingo
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.hitBingo} onChange={() => handleSettingChange("hitBingo")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            No fee Withdrawal
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.noFeeWithdrawal} onChange={() => handleSettingChange("noFeeWithdrawal")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Recharge
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.recharge} onChange={() => handleSettingChange("recharge")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Weekly Cashback
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.weeklyCashback} onChange={() => handleSettingChange("weeklyCashback")} />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Monthly cashback
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.monthlyCashback} onChange={() => handleSettingChange("monthlyCashback")} />
          </SoftTypography>
        ),
      },
    ]
  }

  const affiliateInfo = {
    affiliateInfoCol: [
      { name: "affiliate", align: "left" },
      { name: "action", align: "center" },
    ],
    affiliateInfoRow: [
      {
        affiliate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Referral code
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            122djqz1
          </SoftTypography>
        ),
      },
      {
        affiliate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            No. of invitees
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            12
          </SoftTypography>
        ),
      },
      {
        affiliate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Commisions method
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <select className="text-[#000] rounded-[5px]">
              <option>Profit sharing</option>
              <option>by default</option>
            </select>
          </SoftTypography>
        ),
      },
      {
        affiliate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Suspend
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={settings.suspendAffiliate} onChange={() => handleSettingChange("suspendAffiliate")} />
          </SoftTypography>
        ),
      },
    ]
  }

  const walletInfo = {
    walletInfoCol: [
      { name: "Wallet", align: "left" },
      { name: "action", align: "center" },
    ],
    walletInfoRow: [
      {
        Wallet: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            USDT Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $12
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            PPD Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $16
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            PPL Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $230
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            PPE Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $5
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            EB Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $12
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            PPF Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $122
          </SoftTypography>
        ),
      },
    ]
  }

  const gameReport = {
    gameReportColumns: [
      { name: "Date", align: "left" },
      { name: "Game Type", align: "center" },
      { name: "Total Wagered", align: "center" },
      { name: "Total Payouts", align: "center" },
      { name: "Total GGR", align: "center" },
    ],
    gameReportRows: [
      {
        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20 - 11/02/2023 10:40:20
          </SoftTypography>
        ),
        GameType: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Originals
          </SoftTypography>
        ),
        TotalWagered: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $302
          </SoftTypography>
        ),
        TotalPayouts: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $129
          </SoftTypography>
        ),
        TotalGGR: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $431
          </SoftTypography>
        ),
      },
    ]
  }

  const detailTable = {
    detailTableColumns: [
      { name: "date", align: "left" },
      { name: "details", align: "center" },
      { name: "wager", align: "center" },
      { name: "payout", align: "center" },
      { name: "profit Or Loss", align: "center" },
      { name: "company GGR", align: "center" },
    ],
    detailsTableRows: [
      {
        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        details: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Classic Dice
            Game ID: 364585471516345631
          </SoftTypography>
        ),
        wager: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            100.00
          </SoftTypography>
        ),
        payout: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            198.00
          </SoftTypography>
        ),
        profitLoss: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Win
          </SoftTypography>
        ),
        companyGGR: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            (98.00)
          </SoftTypography>
        ),
      },
    ]
  }

  const usdtWallet = {
    usdtWalletColummns: [
      { name: "transaction Date", align: "left" },
      { name: "trans ID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    usdtWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const ppdWallet = {
    ppdWalletColummns: [
      { name: "transaction Date", align: "left" },
      { name: "trans ID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    ppdWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const pplWallet = {
    pplWalletColummns: [
      { name: "transaction Date", align: "left" },
      { name: "trans ID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    pplWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const ppfWallet = {
    ppfWalletColummns: [
      { name: "transaction Date", align: "left" },
      { name: "trans ID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    ppfWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const ppeWallet = {
    ppeWalletColummns: [
      { name: "transaction Date", align: "left" },
      { name: "trans ID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    ppeWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const exportedData = {
    basicInformation,
    accountInformation,
    sessions,
    vipInformaton,
    affiliateInfo,
    walletInfo,
    gameReport,
    detailTable,
    usdtWallet,
    ppdWallet,
    pplWallet,
    ppfWallet,
    ppeWallet
  };

  return {
    editRole,
    ...exportedData,
  };
}
export default editRole;
