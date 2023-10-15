import React, { useEffect } from "react";
// redux 
import { useDispatch, useSelector } from 'react-redux';
import { toggleMemberSidebar } from 'reducers/actions';
// components
import Sidebar from "./sidebar";
import Footer from "examples/Footer";
import MemberTable from "./components";
import { RiCloseFill } from 'react-icons/ri';

const MemberTableLayout = () => {
  const customDispatch = useDispatch();
  const showSidebar = useSelector(state => state.showMemberSidebar);
  
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
          <MemberTable />
          <div className="p-2 bg-white w-full mb-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberTableLayout;