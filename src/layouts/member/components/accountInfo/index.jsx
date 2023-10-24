/* eslint-disable */
import React, { useState } from 'react';

const AccountInfo = ({ data }) => {
  const lastLoginDate = new Date(data.lastLoginAt);
  const formattedLastLogin = data.lastLoginAt? `${lastLoginDate.toLocaleDateString()}, ${lastLoginDate.toLocaleTimeString()}` : 'N/A';
  const formattedLastLoginIp = data.last_login_ip? data.last_login_ip : 'N/A';
  const formattedLastDeposit = data.lastDeposit? data.lastDeposit : 'N/A';
  const formattedLastWithdrawal = data.lastWithdrawal? data.lastWithdrawal : 'N/A';

  const [accountInfo, setAccountInfo] = useState([
    {name: 'Last Login Date', type: 'string', value: formattedLastLogin},
    {name: 'Last IP Address', type: 'string', value: formattedLastLoginIp},
    {name: 'Last Deposit', type: 'string', value: formattedLastDeposit},
    {name: 'Last Withdrawal', type: 'string', value: formattedLastWithdrawal},
  ]);

  return (
    <div id='account-info' className="w-full bg-white shadow-xl rounded-[10px] px-2 py-4 md:p-4">
      <p className="text-[16px] sm:text-md text-slate-600 font-[600] mb-5">Account Information</p>
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Info</small>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
      {accountInfo.map((data, index) => (
        <div key={index} className='bg-slate-100 flex flex-col gap-2 px-5 py-3 rounded-[10px] border-[1px] border-slate-200'>
          <p className='text-[.875rem] sm:text-[1rem] text-slate-600 font-[600]'>{data.name}:</p>
          <p className='text-[.875rem] text-slate-600'>{data.value}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AccountInfo;