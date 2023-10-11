/* eslint-disable */
import React from 'react';

const MemberInfoLayout = ({ children, id, title }) => {
  return (
    <div id={id} className="w-full bg-white shadow-xl rounded-[10px] p-2 md:p-4">
      <p className="text-md text-slate-600 font-[600]">{title}</p>
      {children}
    </div>
  )
}

export default MemberInfoLayout;