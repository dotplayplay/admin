/* eslint-disable */
import React, { useState } from 'react'
import { Link as NavLink } from 'react-scroll';
import "../css/index.css";

// Icons
import { GrContactInfo } from 'react-icons/gr';

const Sidebar = ({ active }) => {
  // Styles
  const styles = {
    icons: 'text-[#ff00ff] text-[25px] '
  }

  // Nav links data
  const [navs, setNavs] = useState([
    {name: "Basic", open: true, icon: <GrContactInfo className={styles.icons} />},
    {name: "Account", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Sessions", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "VIP", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Affiliate", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Wallet", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Game settings", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Game report", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Details table", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Transactions", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "PPD wallet", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "PPL wallet", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "PPF wallet", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "PPE wallet", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Deposit bonus", open: false, icon: <GrContactInfo className={styles.icons} />},
    {name: "Actions", open: false, icon: <GrContactInfo className={styles.icons} />},
  ]);

  const handleNavLinkOpen = (name) => {
    const updatedNavs = navs.map((link) =>
      link.name === name ? { ...link, open: true } : link
    );
  
    setNavs(updatedNavs);
  };


  return (
    <div className="w-max bg-slate-400 py-4 pl-2">
      <div className="pr-10">
        <h2 className="text-[25px] text-slate-600 font-600">Member</h2>
        <div>
          <p className="text-[15px] text-slate-50 ">/Emmanuel Michael</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-1">
          {navs.map((nav, index) => {
            return (
            <li>
              <NavLink
                to="{scrollId}"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                onClick={()=>handleNavLinkOpen((nav.name).toLowerCase())}
                className={`${nav.open? 'bg-white' : 'bg-slate-400'} flex align-center text-center gap-2 p-2 cursor-pointer rounded-tl-[5px] rounded-bl-[5px]`}
              >
                <div>
                  {nav.icon}
                </div>
                <p>{nav.name}</p>
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