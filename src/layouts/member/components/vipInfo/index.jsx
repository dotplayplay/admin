import React, { useState } from 'react';
import memberData from '../../data/memberData';
import ChoSwitch from '../../templates/switch';

const VipInfo = () => {
  const { vipInfo } = memberData;
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
    <div id='vip-info' className="w-full bg-white shadow-xl rounded-[10px] p-2 md:p-4 flex flex-col gap-5">
      <p className="text-md text-slate-600 font-[600]">VIP Information</p>

      {/* SHOW DETAILS */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Info</small>
      <div className='w-full grid grid-cols-3 gap-5'>
      {vipInfo.filter(item => item.type === 'string').map((data, index) => (
        <div key={index} className='bg-slate-100 flex flex-col gap-2 px-5 py-3 rounded-[10px] border-[1px] border-slate-200'>
          <p className='text-[1rem] text-slate-600 font-[600]'>{data.name}:</p>
          <p className='text-[.875rem] text-slate-600'>{data.value}</p>
        </div>
      ))}
      </div>

      {/* IMMUTABLE SWITCHES */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Info</small>
      <div className='w-full pb-4 grid md:grid-cols-2 gap-y-8 gap-x-4'>
      {vipInfo.filter(item => item.type === 'show_boolean').map((data, index) => (
        <ChoSwitch key={index} action={false} label={data.name} value={data.value} />
      ))}
      </div>

      {/* EDITABLE SECTION */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Switch</small>
      <div className='w-full pb-4 grid md:grid-cols-2 gap-y-8 gap-x-4'>
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