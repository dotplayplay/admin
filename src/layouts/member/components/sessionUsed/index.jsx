/* eslint-disable */
import React, { useState } from 'react';
import MemberData from '../../data/memberData';

const SessionInfo = () => {
  const { columns, rows } = MemberData.sessionsInfo;

  return (
    <div id='sessions-info' className="w-full bg-white shadow-xl rounded-[10px] p-2 md:p-4">
      <p className="text-md text-slate-600 font-[600] mb-5">Past Sessions</p>
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Info</small>
      <div className='py-5 md:px-2 rounded-[10px] border-[1px]'>
        <table className='w-full'>
          <thead>
            <tr>
            {columns.map((column, index) => (
              <th key={index} className='text-[.875rem] md:text-[1.15rem] text-slate-600 font-[600] '>{column.name}</th>
            ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
            <tr key={index}>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.browser}</td>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.location}</td>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.ipAddress}</td>
              <td 
                className={`text-[.875rem] ${row.lastUsed.toLowerCase() === 'online'? 'text-green-400' : 'text-slate-500'} px-1 md:px-2 py-4 text-center w-max `}
                >{row.lastUsed}</td>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.action}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SessionInfo;