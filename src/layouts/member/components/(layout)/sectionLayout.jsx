/* eslint-disable */
import React, { useState } from 'react';
import ChoInput from 'layouts/member/templates/input';
import ChoSwitch from 'layouts/member/templates/switch';

const MemberInfoLayout = ({ data, handleInputChange }) => {
  return (
    <div id={data[0].id} className="w-full bg-white shadow-xl rounded-[10px] p-2 md:p-4">
      <p className="text-md text-slate-600 font-[600]">{data[0].title}</p>
      <div className=''>
        <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">Input</small>
        <div className="py-4 grid md:grid-cols-2 gap-y-8 gap-x-4">
        {data.map(item => {
          if (item.type === 'string') {
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
        {data.map(item => {
          if (item.type === 'boolean') {
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
    </div>
  )
}

export default MemberInfoLayout;