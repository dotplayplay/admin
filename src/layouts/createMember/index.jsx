import React, { useState, useEffect } from "react";
// redux 
import { useDispatch, useSelector } from 'react-redux';
import { toggleMemberSidebar } from 'reducers/actions';
// components
import Sidebar from "./sidebar";
import Footer from "examples/Footer";
import { RiCloseFill } from 'react-icons/ri';

import memberData from './data';
import ChoInput from 'layouts/member/templates/input';
import ChoSwitch from 'layouts/member/templates/switch';

const CreateMember = () => {
  const customDispatch = useDispatch();
  const showSidebar = useSelector(state => state.showMemberSidebar);
  
  const { basicInfo } = memberData;

  // Sets the default state of the data
  const initialInfoState = basicInfo.map(item => ({
    name: item.name,
    value: item.value,
  }));

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
        <div className="data_column w-full relative py-2 px-1 md:px-3">
          
          <div className=''>
            <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">Input</small>
            <div className="py-4 grid sm:grid-cols-2 gap-y-8 gap-x-4">
            {basicInfo.map(item => {
              if (item.type === 'string') {
                return (
                  <ChoInput 
                    key={item.id} 
                    label={item.name} 
                    value={item.value}
                    onChange={()=>handleInputChange(item.id, item.value)} 
                  />
                );
              } else {
                return null;
              }
            })}
            </div>
            <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-4">switch</small>
            <div className="py-4 grid sm:grid-cols-2 gap-y-8 gap-x-4">
            {basicInfo.map(item => {
              if (item.type === 'boolean') {
                return (
                  <ChoSwitch 
                    key={item.id} 
                    label={item.name} 
                    value={item.value} 
                    onChange={()=>handleInputChange(item.id)} 
                  />
                );
              } else {
                return null;
              }
            })}
            </div>

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