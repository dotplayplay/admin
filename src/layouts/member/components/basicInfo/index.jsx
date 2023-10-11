import React, { useState } from 'react';
import MemberInfoLayout from '../(layout)';
import ChoInput from 'layouts/member/templates/input';
import memberData from '../../data/memberData';
import ChoSwitch from 'layouts/member/templates/switch';

const BasicInfo = () => {
  const { basicInfo } = memberData;

  // Sets the default state of the data
  const initialInfoState = basicInfo.map(item => ({
    name: item.name,
    value: item.value,
  }));
  // Gives it an actual state
  const [info, setInfo] = useState(initialInfoState);

  const handleInputChange = (id, value) => {
    const index = basicInfo.findIndex(item => item.id === id);
    const infoCopy = [...info];

    if (typeof(infoCopy[index].value) === 'string') {
      infoCopy[index] = {...infoCopy[index], value};
    } else if (typeof(infoCopy[index].value) === 'boolean') {
      infoCopy[index] = { ...infoCopy[index], value: !infoCopy[index].value };
    }
    
    setInfo(infoCopy);
  }

  return (
    <MemberInfoLayout id="basic-info" title="Basic Information">
      <div className=''>
        <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">Input</small>
        <div className="py-4 grid md:grid-cols-2 gap-y-8 gap-x-4">
        {basicInfo.map(item => {
          if (typeof item.value === 'string') {
            return (
              <ChoInput 
                key={item.id} 
                label={item.name} 
                value={item.value} 
                onChange={()=>handleInputChange(item.id, item.value)} 
              />
            );
          } else {
            return null;
          }
        })}
        </div>
        <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">switch</small>
        <div className="py-4 grid md:grid-cols-2 gap-y-8 gap-x-4">
        {basicInfo.map(item => {
          if (typeof item.value === 'boolean') {
            return (
              <ChoSwitch 
                key={item.id} 
                label={item.name} 
                value={item.value} 
                onChange={()=>handleInputChange(item.id)} 
              />
            );
          } else {
            return null;
          }
        })}
        </div>

      </div>
    </MemberInfoLayout>
  )
}

export default BasicInfo;