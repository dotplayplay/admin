import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RiMenu4Fill } from 'react-icons/ri';
// redux 
import { useDispatch } from 'react-redux';
import { toggleMemberSidebar } from 'reducers/actions';

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
  const customDispatch = useDispatch();
  const { memberId } = useParams();
  const [memberData, setMemberData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try { 
        setLoading(true);
        const url = `http://localhost:8000/api/admin/member-profile/${memberId}`;
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log('Data fetched: ', data); // console log
          setMemberData(data);
          setLoading(false);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    fetchData();
  }, [memberId]);
  
  return (
    <div className="relative min-w-full p-2">
      <div 
        className="flex gap-3 items-center text-center w-full lg:bg-none bg-[#ffffff] p-3 lg:p-5 lg:relative sticky z-50 top-0 right-0 lg:shadow-none shadow-[0_2px_7px_1px_rgba(0,0,0,0.1)] rounded-tr-[10px] rounded-tl-[10px]"
      >
        <button 
          onClick={()=>customDispatch(toggleMemberSidebar(true))} 
          className="lg:hidden hover:bg-slate-100 rounded-[10px] transition duration-150"
        >
          <RiMenu4Fill className="text-[2.5rem] p-2 text-[#aeb8c2] "/>
        </button>
        <h2 className="font-[600] text-[1.15rem] lg:text-[1.5rem] uppercase text-slate-600">User Information</h2>
      </div>
      {loading? 
      <div>Loading... </div> :
      <div className='flex flex-col gap-10 w-full'>
        <BasicInfo data={memberData.basicInfo[0]} />
        <AccountInfo data={memberData.accountInfo[0]} />
        {/* <SessionInfo data={memberData.sessionInfo} /> */}
        <VipInfo data={memberData.vipInfo[0]} />
        <AffiliateInfo data={memberData} />
        {/* <WalletInfo data={memberData} />
        <GameSetting data={memberData} />
        <GameReport data={memberData} />
        <DetailsTable data={memberData} /> */}

        {/* Transaction Logs */}
        {/* <UsdtWallet data={memberData} />
        <PpdWallet data={memberData} />
        <PplWallet data={memberData} />
        <PpfWallet data={memberData} />
        <PpeWallet data={memberData} />

        <DepositBonusLog data={memberData} />
        <Action data={memberData} /> */}
        <div 
          className="sticky bottom-0 left-0 bg-slate-100 flex justify-end w-full px-3 py-3 rounded-[5px] shadow-[0_-5px_7px_1px_rgba(0,0,0,0.15)]"
        >
          <button 
            className="bg-slate-500 hover:bg-slate-500/90 text-[.875rem] text-slate-50 text-[600] px-4 py-1 rounded-[5px] uppercase tracking-[2px] shadow-md transition duration-150"
          >Save
          </button>
        </div>
      </div>}
    </div>
  );
};

export default MemberTable;