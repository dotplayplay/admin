import React, { useState, useEffect } from "react";
// redux 
import { useDispatch, useSelector } from 'react-redux';
import { toggleMemberSidebar } from 'reducers/actions';
// components
import Sidebar from "./sidebar";
import Footer from "examples/Footer";
import { RiCloseFill } from 'react-icons/ri';

import ChoInput from 'layouts/member/templates/input';
import ChoSwitch from 'layouts/member/templates/switch';

const CreateMember = () => {
  const customDispatch = useDispatch();
  const showSidebar = useSelector(state => state.showMemberSidebar);
  
  const [createMemberData, setCreateMemberData] = useState({
    email: '',
    isEmailVerified: false,
    password: '',
    promoCode: '',
  });
  console.log('createMember component');

  useEffect(() => {
    console.log('createMember data: ', createMemberData);
  }, [createMemberData]);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      customDispatch(toggleMemberSidebar(false));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {showSidebar && <div onClick={()=>customDispatch(toggleMemberSidebar(false))} className="fixed top-0 left-0 z-[100] flex justify-end p-6 bg-[#ffffffaa] h-screen w-screen">
        <RiCloseFill className="text-[2.5rem] text-[#485b6e]" />
      </div>}
      <div className="w-full flex h-screen overflow-y-scroll">
        <div className="sticky z-[150] top-0 w-max h-screen hidden lg:block">
          <Sidebar />
        </div>
        {showSidebar && <div className="sticky z-[150] top-0 w-max h-screen transition duration-200">
          <Sidebar />
        </div>}
        <div className="data_column w-full relative py-2 pt-5 px-1 md:px-3 min-h-screen">
          <div className='h-full'>
            <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">Input</small>
            <div className="py-4 grid sm:grid-cols-2 gap-y-8 gap-x-4">
              <ChoInput 
                label='Email' 
                type='email'
                value={createMemberData.email}
                placeholder='(Mandatory)'
                onChange={(value)=>setCreateMemberData({...createMemberData, email: value})} 
              />
              <ChoInput 
                label='Password' 
                type='password'
                value={createMemberData.password}
                placeholder='(Mandatory)'
                onChange={(value)=>setCreateMemberData({...createMemberData, password: value})} 
              />
              <ChoInput 
                label='Promo Code' 
                value={createMemberData.promoCode}
                placeholder='(Optional)'
                onChange={(value)=>setCreateMemberData({...createMemberData, promoCode: value})} 
              />
            </div>
            <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">switch</small>
            <div className="py-4 grid sm:grid-cols-2 gap-y-8 gap-x-4">
              <ChoSwitch 
                label='Email Verification' 
                value={createMemberData.isEmailVerified} 
                onChange={(value) => {
                  setCreateMemberData({...createMemberData, isEmailVerified: !Boolean(value)});
                  console.log('change');}
                }
              />
            </div>

          </div>
          <div className='sticky bottom-0 w-full p-[1rem] bg-slate-100 flex justify-end'>
            <button className='bg-slate-800 text-[#ffffff] text-[.875rem] px-[1rem] py-[.5rem] rounded-[5px] shadow-md'>Add Member</button>
          </div>
              
          <div className="p-2 bg-white w-full mb-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMember;