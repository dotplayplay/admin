import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//data
import memberData from '../data/memberData';
import BasicInfo from './basicInfo';

const MemberTable = () => {
  const { 
    basicInfo, rows } = memberData;
  const { memberId } = useParams();

  return (
    <div className="min-w-full p-2">
      <div className="w-full p-5">
        <h2 className="font-[600] uppercase text-slate-800">User Information</h2>
      </div>
      <BasicInfo />
    </div>
  );
};

export default MemberTable;