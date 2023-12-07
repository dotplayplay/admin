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
  ]);

  const handleNavLinkOpen = (name) => {
    const updatedNavs = navs.map((link) =>
      link.name.toLowerCase() === name ? { ...link, open: true } : {...link, open: false}
    );
  
    setNavs(updatedNavs);
    console.log('clicked!!')
  };


  return (
    <div className="nav_sidebar relative z-10 w-max h-screen bg-slate-800 pb-4 overflow-y-scroll overflow-x-hidden select-none">
      <div 
        className='sticky top-0 z-[150] w-full bg-[#1E293B] py-4 shadow-[0px_2px_3px_3px_rgba(255,255,255,0.1)] rounded-br-[10px] rounded-bl-[10px]'
      >
        <Link 
          to='/members' 
          className='flex items-center text-center gap-2 w-[80%] mx-auto p-2 rounded-[5px] hover:bg-[#ffffff20] transition-all duration-150'
        >
          <BiArrowBack className="text-[#ffffff] "/>
          <p className='text-[.75rem] text-[#dddddd] pt-[3px] uppercase tracking-[2px]'>members</p>
        </Link>
      </div>
      <div className="pr-6 pt-5 pb-8 pl-4">
        <h2 className="text-[18px] text-slate-300 font-600 uppercase">Create Member</h2>
        {/* <div>
          <p className="text-[15px] text-slate-300 ">/Emmanuel Michael</p>
        </div> */}
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