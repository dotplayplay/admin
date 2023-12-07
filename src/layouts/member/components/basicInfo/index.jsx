/* eslint-disable */

import React, { useState } from 'react';
import MemberInfoLayout from '../(layout)';
import ChoInput from 'layouts/member/templates/input';
import memberData from '../../data/memberData';
import ChoSwitch from 'layouts/member/templates/switch';

const BasicInfo = ({ data }) => {
  const [basicInfo, setBasicInfo] = useState([
    { id: "basic-info", title: "Basic Information"},
    { name: "user ID", type: 'string', value: data.user_id, id: "userId" },
    { name: "Username", type: 'string', value: data.username, id: "username" },
    // { name: "Tag", type: 'string', value: "P2E", id: "tag" },
    // { name: "Mobile", type: 'string', value: "+2349039108633", id: "mobile" },
    // { name: "Verified mobile", type: 'boolean', value: true, id: "emailAddress" },
    // { name: "Email address", type: 'string', value: data.email, id: "verifiedMobile" },
    // { name: "Verified email address", type: 'boolean', value: true, id: "verifiedEmailAddress" },
    // { name: "Password", type: 'boolean', value: "223456", id: "password" },
    { name: "2FA", type: 'boolean', value: data.fa, id: "twoFactorAuth" },
    { name: "KYC", type: 'boolean', value: data.kyc, id: "kyc" },
    { name: "Hide from public", type: 'boolean', value: data.hidden_from_public, id: "hideFromPublic" },
    { name: "Hide profile", type: 'boolean', value: data.hide_profile, id: "hideProfile" },
    { name: "Refuse Tip", type: 'boolean', value: data.refuse_tips, id: "refuceTip" },
    // { name: "Chat", type: 'boolean', value: true, id: "chat" },
    { name: "Suspend", type: 'boolean', value: data.is_suspend, id: "suspend" },
  ]);

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

    if (infoCopy[index].type === 'string') {
      infoCopy[index] = {...infoCopy[index], value};
    } else if (infoCopy[index].type === 'boolean') {
      infoCopy[index] = { ...infoCopy[index], value: !infoCopy[index].value };
    }
    
    setInfo(infoCopy);
  }

  return (
    <MemberInfoLayout id="basic-info" title="Basic Information">
      <div className=''>
        <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">Input</small>
        <div className="py-4 grid sm:grid-cols-2 gap-y-8 gap-x-4">
        {basicInfo.map(item => {
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
        <div className="py-4 grid sm:grid-cols-2 gap-y-8 gap-x-4">
        {basicInfo.map(item => {
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
    </MemberInfoLayout>
  )
}

export default BasicInfo;