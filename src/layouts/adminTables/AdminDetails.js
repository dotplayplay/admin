import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import Table from "examples/Tables/Table";

// Data
import SoftButton from 'components/SoftButton';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdModeEdit } from 'react-icons/md';
import { Switch } from '@mui/material';

const AdminDetails = () => {

  const location = useLocation();
  const datas = location?.state;
  // console.log(data);
  const [updateData, setUpdateData] = useState({
    username: datas[1],
    password: datas[2],
    pin: datas[3],
    suspend: datas[4],
  });
  const [updateAccess, setUpdateAccess] = useState({
    createAdminAccess: datas[6].createAdminAccess,
    createMemberAccess: datas[6].createMemberAccess,
    dailyReportAccess: datas[6].dailyReportAccess,
    depositBonusReportAccess: datas[6].createAdminAccess,
    gameReportAccess: datas[6].gameReportAccess,
    ggrReportAccess: datas[6].ggrReportAccess,
    memberListAccess: datas[6].memberListAccess,
    memberProfileAccess: datas[6].memberProfileAccess,

  });
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [isEditPin, setIsEditPin] = useState(false);
  const [isEditSelect, setIsEditSelect] = useState({
    createAdminAccess: false,
    createMemberAccess: false,
    dailyReportAccess: false,
    depositBonusReportAccess: false,
    gameReportAccess: false,
    ggrReportAccess: false,
    memberListAccess: false,
    memberProfileAccess: false,
  });
  const [settings, setSettings] = useState(updateData.suspend);

  const handleAccessChange = (field, e) => {
    const selectedValue = e.target.value;
    if (selectedValue) { // Check if selectedValue is defined
      setUpdateAccess({
        ...updateAccess,
        [field]: selectedValue
      });
    }
  }

  const handleInputChange = (field, e) => {
    setUpdateData({
      ...updateData,
      [field]: e.target.value
    });
  }

  const handleEdit = (field) => {
    if (field === 1) {
      setIsEditPassword(!isEditPassword);
    } else if (field === 2) {
      setIsEditPin(!isEditPin);
    }
  }


  const handleSaveChanges = async () => {
    const payload = {
      _id: datas[0],
    }
    const updatedData = {
      username: updateData.username,
      password: updateData.password,
      pin: updateData.pin,
      suspend: settings.suspend, // Update the suspend value
    };
    console.log(updatedData)
    try {
      const response = await axios.put(`http://localhost:8080/admin/update/basic-info/?adminId=${payload._id}`, updatedData);
      if (response.status === 200) {
        console.log(updatedData);
      } else {
        console.error('Unexpected response status:', response.status);
        toast.error('An error occurred while updating admin data.');
      }
      const res = await axios.put(`http://localhost:8080/admin/update/access/?adminId=${payload._id}`, updateAccess);

      if (res.status === 200) {
        console.log(updateAccess);
      } else {
        console.error('Unexpected response status:', res.status);
        toast.error('An error occurred while updating admin data.');
      }
      toast.success('Admin data updated successfully.');

    } catch (error) {
      console.error('Error:', error);
      toast.error(error);
    }
  };
  const handleSettingChange = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: prevSettings[setting] ? 0 : 1,
    }))
  };
  // const handleSettingChange = (setting) => {
  //   setSettings({ ...settings, [setting]: !settings[setting] });
  // };
  console.log(settings)

  const style = {
    tableCol2: "px-4 py-2 text-center justify-center align-middle items-center gap-2 flex text-[14px] text-[#fff]",
    tableCol: "px-4 py-2 text-center text-[14px] text-[#fff]",
    tableHeight: "h-[400px] my-4 create_user_container",
  }


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox >
        <div className=" ">
          <div>
            <SoftBox mb={3} >
              <div className="bg-[#1a1e32e4]  rounded-[25px]">
                <Card>
                  <div className="bg-[#1a1e32e4]">
                    <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                      <SoftTypography variant="h6"><p className="text-[#fff]">Basic Information</p></SoftTypography>
                    </SoftBox>
                    <SoftBox
                      sx={{
                        "& .MuiTableRow-root:not(:last-child)": {
                          "& td": {
                            borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                              `${borderWidth[1]} solid ${borderColor}`,
                          },
                        },
                      }}
                    >
                      <div className="overflow-x-auto dashboard">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <td className='text-[#fff] text-[12px] bg-[#202128] text-center px-4'>Admin</td>
                              <td className='text-[#fff] text-[12px] bg-[#202128] text-center px-4'>Option</td>
                            </tr>
                          </thead>
                          <tbody>
                            <>

                              <tr className='bg-[#706c6c]'>
                                <td className={style.tableCol}>AdminID</td>
                                <td className={style.tableCol}>{datas[0]}</td>
                              </tr>
                              <tr className=''>
                                <td className={style.tableCol}>Username</td>
                                <td className={style.tableCol}>{datas[1]}</td>
                              </tr>
                              <tr className='bg-[#706c6c]'>
                                <td className={style.tableCol}>Password</td>
                                <td className={style.tableCol2}>
                                  <div>
                                    {isEditPassword ? (
                                      <input
                                        key="password"
                                        type="text"
                                        value={updateData.password}
                                        name='password'
                                        onChange={(e) => handleInputChange("password", e)}
                                        className="text-[#000] w-96"
                                        placeholder="Set Password"
                                      />
                                    ) : (
                                      <p>{updateData.password}</p>
                                    )}
                                  </div>
                                  {isEditPassword ?
                                    <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => handleEdit(1)}>Set</button>
                                    : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => isEditPassword ? setIsEditPassword(false) : setIsEditPassword(true)} ><MdModeEdit /></button>}
                                </td>
                              </tr>
                              <tr className=''>
                                <td className={style.tableCol}>Secure Pin</td>
                                <td className={style.tableCol2}>
                                  <div>
                                    {isEditPin ? (
                                      <input
                                        key="pin"
                                        type="text"
                                        value={updateData.pin}
                                        name='SecurePin'
                                        onChange={(e) => handleInputChange("pin", e)}
                                        className="text-[#000] w-[100%]"
                                        placeholder="Set Pin"
                                      />
                                    ) : (
                                      <p>{updateData.pin}</p>
                                    )}
                                  </div>
                                  {isEditPin ?
                                    <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => handleEdit(2)}>Set</button>
                                    : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => isEditPin ? setIsEditPin(false) : setIsEditPin(true)} ><MdModeEdit /></button>}
                                </td>
                              </tr>
                              <tr className='bg-[#706c6c]'>
                                <td className={style.tableCol}>Suspend</td>
                                <td className={style.tableCol}><SoftTypography variant="caption" color="white" fontWeight="medium">
                                  <Switch checked={settings.suspend === 1} onChange={() => handleSettingChange("suspend")} />
                                </SoftTypography></td>
                              </tr>
                            </>
                            {/* ))} */}

                          </tbody>
                        </table>
                      </div>
                    </SoftBox>
                  </div>
                </Card>
              </div>

            </SoftBox>

            <SoftBox mb={3}>
              <div className="">
                <Card>
                  <div className="bg-[#1a1e32e4]">
                    <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                      <SoftTypography variant="h6"><p className="text-[#fff]">Account Information</p></SoftTypography>
                    </SoftBox>
                    <SoftBox
                      sx={{
                        "& .MuiTableRow-root:not(:last-child)": {
                          "& td": {
                            borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                              `${borderWidth[1]} solid ${borderColor}`,
                          },
                        },
                      }}
                    >
                      <div className="overflow-x-auto dashboard">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <td className='text-[#fff] text-[12px] bg-[#202128] text-center px-4'>Admin Panel Menu</td>
                              <td className='text-[#fff] text-[12px] bg-[#202128] text-start px-4'>Access</td>
                            </tr>
                          </thead>
                          <tbody>
                            {/* {data[6].map((row, rowIndex) => ( */}
                            {/* <tr className='bg-[#706c6c]'> */}
                            <tr className='bg-[#706c6c]'>
                              <td className={style.tableCol}>createAdminAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.createAdminAccess ? <select className='text-black' value={updateAccess.createAdminAccess} onChange={(e) => handleAccessChange("createAdminAccess", e)}>
                                  <option value="View Only">View Only</option>
                                  <option value="Full Access">Full Access</option>
                                  <option value="No Access">No Access</option>
                                </select> : <p>{updateAccess.createAdminAccess}</p>}
                                {isEditSelect.createAdminAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, createAdminAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, createAdminAccess: true })} ><MdModeEdit /></button>}

                              </td>
                            </tr>
                            <tr >
                              <td className={style.tableCol}>createMemberAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.createMemberAccess ?
                                  <select className='text-black' value={updateAccess.createMemberAccess} onChange={(e) => handleAccessChange("createMemberAccess", e)}>
                                    <option value="View Only">View Only</option>
                                    <option value="Full Access">Full Access</option>
                                    <option value="No Access">No Access</option>
                                  </select> : <p>{updateAccess.createMemberAccess}</p>}
                                {isEditSelect.createMemberAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, createMemberAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, createMemberAccess: true })} ><MdModeEdit /></button>}
                              </td>


                            </tr>
                            <tr className='bg-[#706c6c]'>
                              <td className={style.tableCol}>dailyReportAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.dailyReportAccess ? <select className='text-black' value={updateAccess.dailyReportAccess} onChange={(e) => handleAccessChange("dailyReportAccess", e)}>
                                  <option value="View Only">View Only</option>
                                  <option value="Full Access">Full Access</option>
                                  <option value="No Access">No Access</option>
                                </select> : <p>{updateAccess.dailyReportAccess}</p>}
                                {isEditSelect.dailyReportAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, dailyReportAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, dailyReportAccess: true })} ><MdModeEdit /></button>}
                              </td>
                            </tr>
                            <tr >
                              <td className={style.tableCol}>depositBonusReportAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.depositBonusReportAccess ?
                                  <select className='text-black' value={updateAccess.depositBonusReportAccess} onChange={(e) => handleAccessChange("depositBonusReportAccess", e)}>
                                    <option value="View Only">View Only</option>
                                    <option value="Full Access">Full Access</option>
                                    <option value="No Access">No Access</option>
                                  </select> : <p>{updateAccess.depositBonusReportAccess}</p>}
                                {isEditSelect.depositBonusReportAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, depositBonusReportAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, depositBonusReportAccess: true })} ><MdModeEdit /></button>}
                              </td>
                            </tr>
                            <tr className='bg-[#706c6c]'>
                              <td className={style.tableCol}>gameReportAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.gameReportAccess ?
                                  <select className='text-black' value={updateAccess.gameReportAccess} onChange={(e) => handleAccessChange("gameReportAccess", e)}>
                                    <option value="View Only">View Only</option>
                                    <option value="Full Access">Full Access</option>
                                    <option value="No Access">No Access</option>
                                  </select> : <p>{updateAccess.gameReportAccess}</p>}
                                {isEditSelect.gameReportAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, gameReportAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, gameReportAccess: true })} ><MdModeEdit /></button>}

                              </td>
                            </tr>
                            <tr>
                              <td className={style.tableCol}>ggrReportAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.ggrReportAccess ?
                                  <select className='text-black' value={updateAccess.ggrReportAccess} onChange={(e) => handleAccessChange("ggrReportAccess", e)}>
                                    <option value="View Only">View Only</option>
                                    <option value="Full Access">Full Access</option>
                                    <option value="No Access">No Access</option>
                                  </select> : <p>{updateAccess.ggrReportAccess}</p>}
                                {isEditSelect.ggrReportAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, ggrReportAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, ggrReportAccess: true })} ><MdModeEdit /></button>}

                              </td>
                            </tr>
                            <tr className='bg-[#706c6c]'>
                              <td className={style.tableCol}>memberListAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.memberListAccess ?
                                  <select className='text-black' value={updateAccess.memberListAccess} onChange={(e) => handleAccessChange("memberListAccess", e)}>
                                    <option value="View Only">View Only</option>
                                    <option value="Full Access">Full Access</option>
                                    <option value="No Access">No Access</option>
                                  </select> : <p>{updateAccess.memberListAccess}</p>}
                                {isEditSelect.memberListAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, memberListAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, memberListAccess: true })} ><MdModeEdit /></button>}

                              </td>
                            </tr>
                            <tr>
                              <td className={style.tableCol}>memberProfileAccess</td>
                              <td className={style.tableCol} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '50%' }}>
                                {isEditSelect.memberProfileAccess ?
                                  <select className='text-black' value={updateAccess.memberProfileAccess} onChange={(e) => handleAccessChange("memberProfileAccess", e)}>
                                    <option value="View Only">View Only</option>
                                    <option value="Full Access">Full Access</option>
                                    <option value="No Access">No Access</option>
                                  </select> : <p>{updateAccess.memberProfileAccess}</p>}
                                {isEditSelect.memberProfileAccess ?
                                  <button className='bg-white outline-none text-gray-800 p-1 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, memberProfileAccess: false })}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => setIsEditSelect({ ...isEditSelect, memberProfileAccess: true })} ><MdModeEdit /></button>}

                              </td>
                            </tr>
                            {/* </tr> */}
                            {/* ))} */}
                          </tbody>
                        </table>
                      </div>
                    </SoftBox>
                  </div>
                </Card>
              </div>
            </SoftBox>
          </div>
          <SoftBox my={3}>
            <SoftButton type='submit'
              onClick={handleSaveChanges}
            >
              Save Changes
            </SoftButton>
          </SoftBox>
        </div>
        {/* jskks */}
        <SoftBox mb={3}>
          <div className="overflow-x-auto dashboard">
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">Activity Log</p></SoftTypography>
                </SoftBox>
                <SoftBox
                  sx={{
                    "& .MuiTableRow-root:not(:last-child)": {
                      "& td": {
                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                          `${borderWidth[1]} solid ${borderColor}`,
                      },
                    },
                  }}
                >
                  <div className="overflow-x-auto dashboard">
                    <table className="w-full">
                      <thead className="w-full">
                        <tr className="text-[#fff] text-[12px] bg-[#202128] text-center px-4">
                          <th>
                            Date & Time
                          </th>
                          <th>
                            Action
                          </th>
                          <th>
                            Device
                          </th>
                          <th>
                            Location
                          </th>
                          <th>
                            IP Address
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {datas[5] === null ? <>
                          <tr>
                            <td className={style.tableCol}>N/A</td>
                            <td className={style.tableCol}>N/A</td>
                            <td className={style.tableCol}>N/A</td>
                            <td className={style.tableCol}>N/A</td>
                            <td className={style.tableCol}>N/A</td>
                          </tr>
                        </> : <>
                          {datas[5].map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                              <td className={style.tableCol}>{row?.date_time}</td>
                              <td className={style.tableCol}>{row?.action}</td>
                              <td className={style.tableCol}>
                                {row.device.length > 40 ? (
                                  <span title={row.device}>{row?.device.substring(0, 40)}...</span>
                                ) : (
                                  row.device
                                )}
                              </td>
                              <td className={style.tableCol}>{row?.location}</td>
                              <td className={style.tableCol}>{row?.ip_address}</td>
                            </tr>
                          ))
                          }</>

                        }

                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </div>
        </SoftBox>
      </SoftBox >

      <Footer />
    </DashboardLayout >
  );
};

export default AdminDetails;
