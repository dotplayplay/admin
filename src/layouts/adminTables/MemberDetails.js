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
import editRole from '../adminTables/data/memberDetailsTable';
import SoftButton from 'components/SoftButton';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdModeEdit } from 'react-icons/md';

const MemberDetails = () => {

  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [updateData, setUpdateData] = useState({
    // AdminID: data[0],
    Username: data[1],
    Password: data[2],
    SecurePin: data[3],
    Suspend: data[4],
  });
  const [isPassword, setIsPassword] = useState(updateData.Password);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [isPin, setIsPin] = useState(data[3]);
  const [isEditPin, setIsEditPin] = useState(false);


  const handleInputPassword = (e) => {
      setIsPassword(e.target.value)
   ;
  }
  const handleInputPin = (e) => {
    setIsPin(e.target.value)
 ;
}



  const handleEdit = (e) => {
    if (e === 1) {
      setIsEditPassword(false)
    }
    if (e === 2) {
      setIsEditPin(false)
    }
  }

  // const { 
  //   accountInformation,
  //   sessions } = editRole();
  // const { accInfoColumns, accInfoRows } = accountInformation;
  // const { sessionColumns, sessionRows } = sessions;
  // console.log(data);

  console.log(updateData);

  const handleSaveChanges = async () => {
    const payload = {
      AdminId: data[0],
  }
    try {
      const response = await axios.put(`http://localhost:8080/admin/update/basic-info/?adminId=${payload.AdminId}`, updateData);
      if (response.status === 200) {
        setUpdateData(response.data)
        console.log(response.data);
        toast.success('Admin data updated successfully.');
      } else {
        console.error('Unexpected response status:', response.status);
        toast.error('An error occurred while updating admin data.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting the form.');
    }
  };

  const style = {
    tableCol2: "px-4 py-2 text-center justify-center align-middle items-center gap-2 flex text-[14px] text-[#fff]",
    tableCol: "px-4 py-2 text-center text-[14px] text-[#fff]",
    tableHeight: "h-[400px] my-4 create_user_container",
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox onSubmit={handleSaveChanges}>
        <div className=" justify-between w-[100%] xd:w-[100%]">
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
                              <td className={style.tableCol}>{data[0]}</td>
                            </tr>
                            <tr className=''>
                              <td className={style.tableCol}>Username</td>
                              <td className={style.tableCol}>{updateData.Username}</td>
                            </tr>
                            <tr className='bg-[#706c6c]'>
                              <td className={style.tableCol}>Password</td>
                              <td className={style.tableCol2}>
                                <div>
                                  {isEditPassword ? (
                                    <input
                                      key="inputPassword"
                                      type="text"
                                      value={isPassword}
                                      onChange={handleInputPassword}
                                      className="text-[#000] w-96"
                                      placeholder="Set Password"
                                    />
                                  ) : (
                                    <p>{isPassword}</p>
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
                                      key="inputPin"
                                      type="text"
                                      value={isPin}
                                      onChange={handleInputPin}
                                      className="text-[#000] w-[100%]"
                                      placeholder="Set Pin"
                                    />
                                  ) : (
                                    <p>{isPin}</p>
                                  )}
                                </div>
                                {isEditPin ?
                                  <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => handleEdit(2)}>Set</button>
                                  : <button className='bg-white outline-none text-gray-800 p-2 rounded-lg' onClick={() => isEditPin ? setIsEditPin(false) : setIsEditPin(true)} ><MdModeEdit /></button>}</td>
                            </tr>
                            <tr className='bg-[#706c6c]'>
                              <td className={style.tableCol}>Suspend</td>
                              <td className={style.tableCol}>{updateData.Suspend}</td>
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
            <SoftBox mt={3}>
              <SoftButton type='submit'
              //  onClick={handleSaveChanges}
               >
                Save Changes
              </SoftButton>
            </SoftBox>
          </SoftBox>

          {/* <div>
          <SoftBox mb={3}>
            <div className="">
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
                        <thead>
                          <tr>
                            {sessionColumns.map((column, columnIndex) => (
                              <th
                                className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                                key={columnIndex}
                              >{column.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sessionRows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                              <td className={style.tableCol}>{row.Date}</td>
                              <td className={style.tableCol}>{row.Action}</td>
                              <td className={style.tableCol}>{row.Device}</td>
                              <td className={style.tableCol}>{row.Location}</td>
                              <td className={style.tableCol}>{row.IPAddress}</td>
                              <td className={style.tableCol}>{row.Action}</td>
                            </tr>
                          ))}
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
                            {accInfoColumns.map((column, columnIndex) => (
                              <th
                                className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                                key={columnIndex}
                              >{column.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {accInfoRows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                              <td className={style.tableCol}>{row.Login}</td>
                              <td className={style.tableCol}>{row.Date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </SoftBox>
                </div>
              </Card>
            </div>
          </SoftBox>
        </div> */}
        </div>
      </SoftBox >

      <Footer />
    </DashboardLayout >
  );
};

export default MemberDetails;
