import React, { useState } from 'react';
import MemberInfoLayout from '../(layout)';
import ChoInput from 'layouts/member/templates/input';
import memberData from '../../data/memberData';

const WalletInfo = () => {
  const { walletInfo } = memberData;

  // Sets the default state of the data
  const initialInfoState = walletInfo.map(item => ({
    name: item.name,
    value: item.value,
  }));
  // Gives it an actual state
  const [info, setInfo] = useState(initialInfoState);

  const handleInputChange = (id, value) => {
    const index = walletInfo.findIndex(item => item.id === id);
    const infoCopy = [...info];

    if (infoCopy[index].type === 'string') {
      infoCopy[index] = {...infoCopy[index], value};
    } else if (infoCopy[index].type === 'boolean') {
      infoCopy[index] = { ...infoCopy[index], value: !infoCopy[index].value };
    }
    
    setInfo(infoCopy);
  }

  return (
    <MemberInfoLayout id="wallet-info" title="Wallet Information">
      <div className=''>
        <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">Input</small>
        <div className="py-4 grid sm:grid-cols-2 gap-y-8 gap-x-4">
        {walletInfo.map(item => {
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
      </div>
    </MemberInfoLayout>
  )
}

export default WalletInfo;