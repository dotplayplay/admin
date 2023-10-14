import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//data
import BasicInfo from './basicInfo';
import AccountInfo from './accountInfo';
import SessionInfo from './sessionUsed';
import VipInfo from './vipInfo';
import AffiliateInfo from './affiliateInfo';
import WalletInfo from './walletInfo';
import GameSetting from './gameSettings';
import GameReport from './gameReport';
import DetailsTable from './details';
import UsdtWallet from './usdtWallet';
import PpdWallet from './ppdWallet';
import PplWallet from './pplWallet';
import PpfWallet from './ppfWallet';
import PpeWallet from './ppeWallet';
import DepositBonusLog from './depositBonusLog';
import Action from './action'

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
        <GameSetting />
        <GameReport />
        <DetailsTable />

        {/* Transaction Logs */}
        <UsdtWallet />
        <PpdWallet />
        <PplWallet />
        <PpfWallet />
        <PpeWallet />

        <DepositBonusLog />
        <Action />
      </div>
    </div>
  );
};

export default MemberTable;