import React, { useState } from 'react';
import memberData from '../../data/memberData';
import ChoSwitch from '../../templates/switch';

const GameSetting = () => {
  const { gameSetting } = memberData;
  // Sets the default state of the data
  const initialInfoState = gameSetting.map(item => ({
    name: item.name,
    value: item.value,
  }));
  // Gives it an actual state
  const [info, setInfo] = useState(initialInfoState);

  const handleInputChange = (id, value) => {
    const index = gameSetting.findIndex(item => item.id === id);
    const infoCopy = [...info];

    if (infoCopy[index].type === 'boolean') {
      infoCopy[index] = { ...infoCopy[index], value: !infoCopy[index].value };
    }
    
    setInfo(infoCopy);
  }

  return (
    <div id='affiliate-info' className="w-full bg-white shadow-xl rounded-[10px] p-2 md:p-4 flex flex-col gap-5">
      <p className="text-md text-slate-600 font-[600]">Game Settings</p>

      {/* EDITABLE SECTION */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Switch</small>
      <div className='w-full pb-4 grid md:grid-cols-2 gap-y-8 gap-x-4'>
      {gameSetting.filter(item => item.type === 'boolean').map((data, index) => (
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

export default GameSetting;