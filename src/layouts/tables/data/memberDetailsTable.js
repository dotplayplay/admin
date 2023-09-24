/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import { MdModeEdit } from "react-icons/md";

const editRole = () => {
  const [username, setUsername] = useState("John Michael");
  const [isUsername, setIsUsername] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const handleEdit = (e) => {
    if (e === 1) {
      setIsUsername(false)
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            UserID
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            12qrtzqi1
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            username
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <div className="flex gap-2 items-center">
              <div>
                {isUsername ? (
                  <input
                    key="inputUsername"
                    type="text"
                    value={username}
                    onChange={handleInput}
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            tag
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <select>
              <option>Gambler</option>
              <option>P2E</option>
            </select>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Mobile
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            07067255308
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Password
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <button>change password</button>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            2FA
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <div className="toggle">
              <input type="checkbox" id="toggle-checkbox" />
              <label htmlFor="toggle-checkbox"></label>
            </div>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            KYC
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Hide gaming data
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Hide username
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Refuse Tip
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Chat
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Suspend
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Last login Date:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
      },
      {
        Login: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Last IP Address:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            146.11.11.23
          </SoftTypography>
        ),
      },
      {
        Login: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Last Deposit:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            300$
          </SoftTypography>
        ),
      },
      {
        Login: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Last Withdrawal:
          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Chrome 11
          </SoftTypography>
        ),
        Location: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            MY
          </SoftTypography>
        ),
        IPAddress: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            146.11.11.23
          </SoftTypography>
        ),
        LastUsed: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Online
          </SoftTypography>
        ),
        Action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Level
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <select>
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Rank
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bronze
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Total Wagered
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            300$
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Roll point game
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Send Rain
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Recieve rain
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Send coindrop
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Recieve coindrop
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Send tip
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Hit bingo
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            No fee Withdrawal
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Recharge
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Weekly Cashback
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
          </SoftTypography>
        ),
      },
      {
        vips: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Monthly cashback
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Referral code
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            122djqz1
          </SoftTypography>
        ),
      },
      {
        affiliate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            No. of invitees
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            12
          </SoftTypography>
        ),
      },
      {
        affiliate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Commisions method
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <select>
              <option>Profit sharing</option>
              <option>by default</option>
            </select>
          </SoftTypography>
        ),
      },
      {
        affiliate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Suspend
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            <input type="checkbox" />
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
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            USDT Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $12
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            PPD Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $16
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            PPL Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $230
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            PPE Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $5
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            EB Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $12
          </SoftTypography>
        ),
      },
      {
        Wallet: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            PPF Balance
          </SoftTypography>
        ),
        action: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $122
          </SoftTypography>
        ),
      },
    ]
  }

  const gameReport = {
    gameReportColumns: [
      { name: "Date", align: "left" },
      { name: "GameType", align: "center" },
      { name: "TotalWagered", align: "center" },
      { name: "TotalPayouts", align: "center" },
      { name: "TotalGGR", align: "center" },
    ],
    gameReportRows: [
      {
        Date: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20 - 11/02/2023 10:40:20
          </SoftTypography>
        ),
        GameType: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Originals
          </SoftTypography>
        ),
        TotalWagered: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $302
          </SoftTypography>
        ),
        TotalPayouts: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $129
          </SoftTypography>
        ),
        TotalGGR: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
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
      { name: "profitOrLoss", align: "center" },
      { name: "companyGGR", align: "center" },
    ],
    detailsTableRows: [
      {
        Date: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        details: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Classic Dice
            Game ID: 364585471516345631
          </SoftTypography>
        ),
        wager: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            100.00
          </SoftTypography>
        ),
        payout: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            198.00
          </SoftTypography>
        ),
        profitLoss: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Win
          </SoftTypography>
        ),
        companyGGR: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            (98.00)
          </SoftTypography>
        ),
      },
    ]
  }

  const usdtWallet = {
    usdtWalletColummns: [
      { name: "transactionDate", align: "left" },
      { name: "transID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    usdtWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const ppdWallet = {
    ppdWalletColummns: [
      { name: "transactionDate", align: "left" },
      { name: "transID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    ppdWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const pplWallet = {
    pplWalletColummns: [
      { name: "transactionDate", align: "left" },
      { name: "transID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    pplWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const ppfWallet = {
    ppfWalletColummns: [
      { name: "transactionDate", align: "left" },
      { name: "transID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    ppfWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
    ]
  }

  const ppeWallet = {
    ppeWalletColummns: [
      { name: "transactionDate", align: "left" },
      { name: "transID", align: "center" },
      { name: "type", align: "center" },
      { name: "debit", align: "center" },
      { name: "credit", align: "center" },
      { name: "balance", align: "center" },
    ],
    ppeWalletRows: [
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Top up
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Deposit
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Withdrawal
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Swap
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bill
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $560
          </SoftTypography>
        ),
      },
      {
        transactionDate: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            10/02/2023 05:40:20
          </SoftTypography>
        ),
        transID: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            36458547
          </SoftTypography>
        ),
        type: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            Bonus
          </SoftTypography>
        ),
        debit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $198.00
          </SoftTypography>
        ),
        credit: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            $200.49
          </SoftTypography>
        ),
        balance: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
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
