import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//data
import BasicInfo from './basicInfo';
import AccountInfo from './accountInfo';
import SessionInfo from './sessionUsed';
import VipInfo from './vipInfo';
import AffiliateInfo from './affiliateInfo';
import WalletInfo from './walletInfo';

const MemberTable = () => {
  const { memberId } = useParams();

  return (
    <div className="min-w-full p-2">
      <div className="w-full p-5">
        <h2 className="font-[600] uppercase text-[#0D0F12]">User Information</h2>
      </div>
      <div className='flex flex-col gap-10 w-full'>
        <BasicInfo />
        <AccountInfo />
        <SessionInfo />
        <VipInfo />
        <AffiliateInfo />
        <WalletInfo />
      </div>
    </div>
  );
};

export default MemberTable;