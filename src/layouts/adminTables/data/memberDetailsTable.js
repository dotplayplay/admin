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
  control: false,
  control1: false,
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
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [pin, setPin] = useState("");
  const [isPin, setIsPin] = useState(false);
  const [settings, setSettings] = useState(initialSettings);
  const [actionSettings, setActionSettings] = useState(initialSettings);
  const [actionSettings1, setActionSettings1] = useState(initialSettings);
  const handleSettingChange = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
    
  };
  const handleControlChange = (action) => {
    setActionSettings({ ...actionSettings, [action]: !actionSettings[action] });
    setActionSettings1({ ...actionSettings1, [action]: !actionSettings1[action] });
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
      setIsPassword(false)
    }
    if (e === 3) {
      setIsPin(false)
    }
  }

  const basicInformation = {
    basicInfoColumns: [
      { name: "Admin", align: "left" },
      { name: "option", align: "center" },
    ],
    basicInfoRows: [
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            AdminID
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
            Username
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <div className="flex gap-2 items-center justify-center">
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
            Password
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <div className="flex gap-2 items-center justify-center">
              <div>
                {isPassword ? (
                  <input
                    key="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-[#000]"
                    placeholder="set password"
                  />
                ) : (
                  <p>{password}</p>
                )}
              </div>
              {isPassword ?
                <button onClick={() => handleEdit(2)}>Set</button>
                : <button onClick={() => isPassword ? setIsPassword(false) : setIsPassword(true)} ><MdModeEdit /></button>}
            </div>
          </SoftTypography>
        ),
      },
      {
        user: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Secure Pin
          </SoftTypography>
        ),
        option: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <div className="flex gap-2 items-center justify-center">
              <div>
                {isPin ? (
                  <input
                    key="pin"
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="text-[#000]"
                    placeholder="set pin"
                  />
                ) : (
                  <p>{pin}</p>
                )}
              </div>
              {isPin ?
                <button onClick={() => handleEdit(3)}>Set</button>
                : <button onClick={() => isPin ? setIsPin(false) : setIsPin(true)} ><MdModeEdit /></button>}
            </div>
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
      { name: "Action", align: "left" },
      { name: "Control", align: "center" },
    ],
    accInfoRows: [
      {
        Login: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">

          </SoftTypography>
        ),
        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            <Switch checked={actionSettings.control} onChange={() => handleControlChange("control")} />
          </SoftTypography>
        ),
      },
      // {
      //   Login: (
      //     <SoftTypography variant="caption" color="white" fontWeight="medium">

      //     </SoftTypography>
      //   ),
      //   Date: (
      //     <SoftTypography variant="caption" color="white" fontWeight="medium">
      //       <Switch checked={actionSettings1.control1} onChange={() => handleControlChange("control1")} />
      //     </SoftTypography>
      //   ),
      // },
      // {
      //   Login: (
      //     <SoftTypography variant="caption" color="white" fontWeight="medium">

      //     </SoftTypography>
      //   ),
      //   Date: (
      //     <SoftTypography variant="caption" color="white" fontWeight="medium">
      //       <Switch checked={settings.suspend} onChange={() => handleSettingChange("suspend")} />
      //     </SoftTypography>
      //   ),
      // },
      // {
      //   Login: (
      //     <SoftTypography variant="caption" color="white" fontWeight="medium">

      //     </SoftTypography>
      //   ),
      //   Date: (
      //     <SoftTypography variant="caption" color="white" fontWeight="medium">
      //       <Switch checked={settings.suspend} onChange={() => handleSettingChange("suspend")} />
      //     </SoftTypography>
      //   ),
      // },
    ]
  }

  const sessions = {
    sessionColumns: [
      { name: "Date & Time", align: "left" },
      { name: "Action", align: "center" },
      { name: "Device", align: "left" },
      { name: "Location", align: "center" },
      { name: "IPAddress", align: "center" },
      { name: "Action", align: "center" },
    ],
    sessionRows: [
      {

        Date: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            dd/mm/yy hh/mm/ss
          </SoftTypography>
        ),
        Action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            In use
          </SoftTypography>
        ),
        Device: (
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
        Action: (
          <SoftTypography variant="caption" color="white" fontWeight="medium">
            Online
          </SoftTypography>
        ),

      }
    ]
  }






  const exportedData = {
    basicInformation,
    accountInformation,
    sessions,
    // vipInformaton,
    // affiliateInfo,
    // walletInfo,
    // gameReport,
    // detailTable,
    // usdtWallet,
    // ppdWallet,
    // pplWallet,
    // ppfWallet,
    // ppeWallet
  };

  return {
    editRole,
    ...exportedData,
  };
}
export default editRole;
