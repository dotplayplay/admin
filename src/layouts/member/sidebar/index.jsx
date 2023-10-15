/* eslint-disable */
import React, { useState } from 'react';
import { Link as NavLink } from 'react-scroll';
import "../css/index.css";
import { BiArrowBack } from 'react-icons/bi';

// Icons
import 
  { 
    RiProfileLine, 
    RiAccountPinBoxLine, 
    RiStarFill,
    RiLink,
    RiWallet3Line,
    RiListCheck,
    RiGamepadFill,
    RiBarChartGroupedFill,
    RiDatabaseLine,
    RiCashLine,
    RiCurrencyLine,
    RiGiftLine,
    RiAddBoxLine
  } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {
  // Styles
  const styles = {
    icons: 'link_icon text-[20px] pt-[4px]'
  }

  // Nav links data
  const [navs, setNavs] = useState([
    {name: "Basic", open: true, icon: <RiProfileLine className={styles.icons} />, scrollTo: "basic-info"},
    {name: "Account", open: false, icon: <RiAccountPinBoxLine className={styles.icons} />, scrollTo: "account-info"},
    {name: "Sessions", open: false, icon: <RiListCheck className={styles.icons} />, scrollTo: "sessions"},
    {name: "VIP", open: false, icon: <RiStarFill className={styles.icons} />, scrollTo: "vip-info"},
    {name: "Affiliate", open: false, icon: <RiLink className={styles.icons} />, scrollTo: "affiliate-info"},
    {name: "Wallet", open: false, icon: <RiWallet3Line className={styles.icons} />, scrollTo: "wallet-info"},
    {name: "Game settings", open: false, icon: <RiGamepadFill className={styles.icons} />, scrollTo: "game-settings"},
    {name: "Game report", open: false, icon: <RiBarChartGroupedFill className={styles.icons} />, scrollTo: "game-report"},
    {name: "Details table", open: false, icon: <RiDatabaseLine className={styles.icons} />, scrollTo: "details-table"},
    {name: "PPD wallet", open: false, icon: <RiCurrencyLine className={styles.icons} />, scrollTo: "ppd-wallet"},
    {name: "PPL wallet", open: false, icon: <RiCurrencyLine className={styles.icons} />, scrollTo: "ppl-wallet"},
    {name: "PPF wallet", open: false, icon: <RiCurrencyLine className={styles.icons} />, scrollTo: "ppf-wallet"},
    {name: "PPE wallet", open: false, icon: <RiCurrencyLine className={styles.icons} />, scrollTo: "ppe-wallet"},
    {name: "Deposit bonus", open: false, icon: <RiGiftLine className={styles.icons} />, scrollTo: "deposit-bonus"},
    {name: "Actions", open: false, icon: <RiAddBoxLine className={styles.icons} />, scrollTo: "actions"},
  ]);

  const handleNavLinkOpen = (name) => {
    const updatedNavs = navs.map((link) =>
      link.name.toLowerCase() === name ? { ...link, open: true } : {...link, open: false}
    );
  
    setNavs(updatedNavs);
    console.log('clicked!!')
  };


  return (
    <div className="nav_sidebar relative z-10 w-max h-screen bg-slate-800 py-4 overflow-y-scroll overflow-x-hidden select-none">
      <Link to='/members' className='flex items-center text-center gap-2 w-[80%] mx-auto p-2 rounded-[5px] hover:bg-[#ffffff20] transition-all duration-150'>
        <BiArrowBack className="text-[#ffffff] "/>
        <p className='text-[.75rem] text-[#dddddd] pt-[3px] uppercase tracking-[2px]'>members</p>
      </Link>
      <div className="pr-10 pt-5 pb-8 pl-4">
        <h2 className="text-[22px] text-slate-200 font-600">User Details</h2>
        <div>
          <p className="text-[15px] text-slate-300 ">/Emmanuel Michael</p>
        </div>
      </div>
      <div className='pl-4'>
        <ul className="flex flex-col gap-2">
          {navs.map((nav, index) => {
            return (
            <li key={index} className="relative z-10 ">
              <a
                href={`#${nav.scrollTo}`}
                onClick={()=>handleNavLinkOpen((nav.name).toLowerCase())}
                className={`relative z-10 ${nav.open? 'bg-white nav_link text-slate-600 before:bg-slate-800 after:bg-slate-800' : 'not_focused bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-50/5 rounded-[10px]'} flex align-center text-center gap-2 h-full w-full px-2 py-4 cursor-pointer rounded-tl-[10px] rounded-bl-[10px]`}
              >
                {nav.icon}
                <p className="text-[16px]">{nav.name}</p>
              </a>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar