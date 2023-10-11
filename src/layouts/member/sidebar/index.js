/* eslint-disable */
import React, { useState } from 'react';
import { Link as NavLink } from 'react-scroll';
import "../css/index.css";

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

const Sidebar = ({ active }) => {
  // Styles
  const styles = {
    icons: 'link_icon text-[20px] pt-[4px]'
  }

  // Nav links data
  const [navs, setNavs] = useState([
    {name: "Basic", open: true, icon: <RiProfileLine className={styles.icons} />, scrollTo: "basic-info"},
    {name: "Account", open: false, icon: <RiAccountPinBoxLine className={styles.icons} />, scrollTo: "account-info"},
    {name: "Sessions", open: false, icon: <RiListCheck className={styles.icons} />, scrollTo: "session-info"},
    {name: "VIP", open: false, icon: <RiStarFill className={styles.icons} />, scrollTo: "vip-info"},
    {name: "Affiliate", open: false, icon: <RiLink className={styles.icons} />, scrollTo: "affiliate-info"},
    {name: "Wallet", open: false, icon: <RiWallet3Line className={styles.icons} />, scrollTo: "wallet-info"},
    {name: "Game settings", open: false, icon: <RiGamepadFill className={styles.icons} />, scrollTo: "game-settings"},
    {name: "Game report", open: false, icon: <RiBarChartGroupedFill className={styles.icons} />, scrollTo: "game-report"},
    {name: "Details table", open: false, icon: <RiDatabaseLine className={styles.icons} />, scrollTo: "details-table"},
    {name: "Transactions", open: false, icon: <RiCashLine className={styles.icons} />, scrollTo: "transactions"},
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
  };


  return (
    <div className="nav_sidebar relative z-10 h-screen overflow-y-scroll overflow-x-hidden w-max bg-slate-800 py-4 pl-4">
      <div className="pr-10 pt-5 pb-8">
        <h2 className="text-[22px] text-slate-200 font-600">User Details</h2>
        <div>
          <p className="text-[15px] text-slate-300 ">/Emmanuel Michael</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {navs.map((nav, index) => {
            return (
            <li key={index} className="relative z-10 ">
              <NavLink
                to={`${nav.scrollTo}`}
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                onClick={()=>handleNavLinkOpen((nav.name).toLowerCase())}
                className={`relative z-10 ${nav.open? 'bg-white nav_link text-slate-600 before:bg-slate-800 after:bg-slate-800' : 'not_focused bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-50/5 rounded-[10px]'} flex align-center text-center gap-2 h-full w-full px-2 py-4 cursor-pointer rounded-tl-[10px] rounded-bl-[10px]`}
              >
                {nav.icon}
                <p className="text-[16px]">{nav.name}</p>
              </NavLink>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar