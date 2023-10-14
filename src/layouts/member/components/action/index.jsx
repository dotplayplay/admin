import React, { useState } from 'react';
import memberData from '../../data/memberData';
import ChoSwitch from '../../templates/switch';

const Action = () => {
  const { Action } = memberData;
  // Sets the default state of the data
  const initialInfoState = Action.map(item => ({
    name: item.name,
    value: item.value,
  }));
  // Gives it an actual state
  const [info, setInfo] = useState(initialInfoState);

  const handleInputChange = (id, value) => {
    const index = Action.findIndex(item => item.id === id);
    const infoCopy = [...info];

    if (infoCopy[index].type === 'boolean') {
      infoCopy[index] = { ...infoCopy[index], value: !infoCopy[index].value };
    }
    
    setInfo(infoCopy);
  }

  return (
    <div id='actions' className="w-full bg-white shadow-xl rounded-[10px] p-2 md:p-4 flex flex-col gap-5 mb-10">
      <p className="text-md text-slate-600 font-[600]">Actions</p>

      {/* EDITABLE SECTION */}
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Switch</small>
      <div className='w-full pb-4 grid md:grid-cols-2 gap-y-8 gap-x-4'>
      {Action.filter(item => item.type === 'boolean').map((data, index) => (
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

export default Action;