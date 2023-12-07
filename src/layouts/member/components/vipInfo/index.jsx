/* eslint-disable */
import React, { useState } from 'react';
import memberData from '../../data/memberData';
import ChoSwitch from '../../templates/switch';

const VipInfo = ({ data }) => {
  const [vipInfo, setVipInfo] = useState([
    { name: "Level", type: 'string', value: data.vip_level, id: "level" },
    { name: "Rank", type: 'string', value: "Bronze", id: "rank" },
    { name: "Total Wagered", type: 'string', value: data.totalwagered, id: "totalWagered" },
    // { name: "Roll Point Game", type: 'show_boolean', value: true, id: "rollPointGame" },
    // { name: "Send Rain", type: 'show_boolean', value: true, id: "emailAddress" },
    // { name: "Receive Rain", type: 'show_boolean', value: true, id: "receiveRain" },
    // { name: "Send Coindrop", type: 'show_boolean', value: true, id: "sendCoindrop" },
    // { name: "Receive Coindrop", type: 'show_boolean', value: true, id: "receiveCoindrop" },
    // { name: "Send Tip", type: 'show_boolean', value: false, id: "sendTip" },
    // { name: "Hit Bingo", type: 'show_boolean', value: false, id: "hitBingo" },
    // { name: "No Fee Withdrawal", type: 'show_boolean', value: false, id: "noFeeWithdrawal" },
    // { name: "Recharge", type: 'boolean', value: false, id: "recharge" },
    // { name: "Weekly Cashback", type: 'boolean', value: false, id: "weeklyCashback" },
    // { name: "Monthly Cashback", type: 'boolean', value: false, id: "monthlyCashback" },
  ]);
  // Sets the default state of the data
  const initialInfoState = vipInfo.map(item => ({
    name: item.name,
    value: item.value,
  }));
  // Gives it an actual state
  const [info, setInfo] = useState(initialInfoState);

  const handleInputChange = (id, value) => {
    const index = vipInfo.findIndex(item => item.id === id);
    const infoCopy = [...info];

    if (infoCopy[index].type === 'boolean') {
      infoCopy[index] = { ...infoCopy[index], value: !infoCopy[index].value };
    }
    
    setInfo(infoCopy);
  }

  return (
    <div id='vip-info' className="w-full bg-white shadow-xl rounded-[10px] px-2 py-4 md:p-4 flex flex-col gap-5">
      <p className="text-[16px] sm:text-md text-slate-600 font-[600]">VIP Information</p>

      {/* SHOW DETAILS */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Info</small>
      <div className='w-full grid grid-cols-3 gap-5'>
      {vipInfo.filter(item => item.type === 'string').map((data, index) => (
        <div key={index} className='bg-slate-100 flex flex-col gap-2 px-2 sm:px-5 py-3 rounded-[10px] border-[1px] border-slate-200'>
          <p className='text-[14px] sm:text-[1rem] text-slate-700 font-[600]'>{data.name}:</p>
          <p className='text-[.875rem] text-slate-600'>{data.value}</p>
        </div>
      ))}
      </div>

      {/* IMMUTABLE SWITCHES */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Info</small>
      <div className='w-full pb-4 grid sm:grid-cols-2 gap-y-8 gap-x-4'>
      {vipInfo.filter(item => item.type === 'show_boolean').map((data, index) => (
        <ChoSwitch key={index} action={false} label={data.name} value={data.value} />
      ))}
      </div>

      {/* EDITABLE SECTION */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Switch</small>
      <div className='w-full pb-4 grid sm:grid-cols-2 gap-y-8 gap-x-4'>
      {vipInfo.filter(item => item.type === 'boolean').map((data, index) => (
        <ChoSwitch 
          key={index} 
          label={data.name} 
          value={data.value} 
          onChange={()=>handleInputChange(data.id)}
        />
      ))}
      </div>
    </div>
  )
}

export default VipInfo;