import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useForm } from "react-hook-form";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/adminTables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import axios from 'axios';
import { toast } from 'react-toastify';
import { BsFillEyeFill } from 'react-icons/bs';
import MemberDetails from "layouts/adminTables/MemberDetails"

function Tables() {
  const { columns, rows } = authorsTableData;
  const [addMember, setAddMember] = useState(false);
  const [loading, setLoadind] = useState(false)
  const navigate = useNavigate();
  const handleAddMember = () => {
    navigate('/Create')
    // setAddMember(!addMember)
  }
  const { watch, register, handleSubmit, getValues, setValue,
    formState: { errors, isValid } } = useForm({ mode: "all" });

  const [adminData, setAdminData] = useState([]);
  const [data, setData] = useState([]);


  const memberDetail = (_id, username, password, pin, suspend, activityLog) => {
    const data = [_id, username, password, pin, suspend, activityLog]
    setData((item) => [1, ...data]);
    navigate(`/details/${username}`, { state: data });

  }

  const [formData, setFormData] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const storedSubmittedData = localStorage.getItem("submittedData");
    if (storedSubmittedData) {
      setSubmittedData(JSON.parse(storedSubmittedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const SubmitForm = async () => {
    try {
      await axios.get('http://localhost:8080/admin/all')
        .then((response) => {
          setAdminData(response.data.admins)
          console.log(response.data.admins)
          if (response.status === 200) {
            console.log(response.data);
          } else {
            console.error('Unexpected response status:', response.status);
            toast.error('An error occurred while fetching admin data.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error('An error occurred while fetching admin data.');
        });
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting the form.');
    }
  };
  useEffect(() => {
    SubmitForm()
  }, [])

  const style = {
    input: "w-full border-[#6B6B6B] px-[5px] py-[1px] block border-[1px] rounded-[8px]",
    tableCol: "px-4 py-2 text-center text-white text-[15px]",
    tableHead: "text-[#fff] bg-[#202128] justify-between flex w-[100%] text-[14px] text-center m-auto aline-middle px-4 py-2",
    flex: "",
    label: "block text-[13px]",
    inputCon: "mb-[10px]"
  }
  const formatApiDate = (dateString) => {
    const date = new Date(dateString);

    // Convert the date to a readable format
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };

    return date.toLocaleString('en-US', options);
  };

  return (
    <DashboardLayout>
      <div className="members_table">
        <DashboardNavbar />
      </div>
      <div className="members_table">
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <div className="bg-[#282a32]">
                  <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                    <SoftTypography variant="h6"><p className="text-[#fff]">ADMIN MANAGEMENT</p></SoftTypography>
                    <button
                      onClick={handleAddMember}
                      className="bg-[#fff] border-[1px] members_table px-4 text-[13px] py-2 rounded-[7px] text-[#76839A]"
                    >Create Admin</button>
                  </SoftBox>
                </div>
                <SoftBox
                  display="flex" justifyContent="space-between" alignItems="center" width="100%"
                  sx={{
                    "& .MuiTableRow-root:not(:last-child)": {
                      "& td": {
                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                          `${borderWidth[1]} solid ${borderColor}`,
                      },
                    },
                  }}
                >
                  <div className="overflow-x-auto">
                    <table>
                      <thead >
                        <tr className="text-[14px] text-[#fff] text-center bg-[#202128]">
                          <th>
                            Amdim ID
                          </th>
                          <th>Username</th>
                          <th>Status</th>
                          <th>Account</th>
                          <th>Permissions</th>
                          <th className=''>Activity Log</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <td >{adminData.admins._id}</td> */}
                        {adminData.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            // onClick={() => memberDetail(
                            //   row._id,
                            //   row.username,
                            //   row.password,
                            //   row.pin,
                            //   row.suspend,
                            //   row.activityLog
                            // )
                            // }
                            className={`cursor-pointer ${rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''} m-10`}
                          >
                            <td className={style.tableCol}>{row._id}</td>
                            <td className={style.tableCol}>{row.username}</td>
                            <td className={style.tableCol}>{row.suspend === 0 ? "Active" : "Inactive"}</td>
                            <td className={style.tableCol}>
                              <button
                                onClick={() => memberDetail(
                                  row._id,
                                  row.username,
                                  row.password,
                                  row.pin,
                                  row.suspend,
                                  row.activityLog
                                )
                                }
                                className='flex align-middle items-center justify-between '>
                                <p>View </p>
                                <i className='pl-2'><BsFillEyeFill /></i>
                              </button>
                            </td>
                            <td className={style.tableCol}>
                              <button className='flex align-middle items-center justify-between '>
                                <p>View </p>
                                <i className='pl-2'><BsFillEyeFill /></i>
                              </button>
                            </td>
                            <td className={style.tableCol}>{formatApiDate(row?.lastLoginAt)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
          {/* {modalPopUp === true ? (
            <MemberDetails
              _id={data[1]}
              username={data[2]}
              password={data[3]}
              pin={data[4]}
              suspend={data[5]}
            // Created={data[6]}
            // hide={() => setModalPopUp(false)}
            />
           ) : (
            ""
          )}  */}
        </SoftBox>
      </div>
      <div className="members_table">
        <Footer />
      </div>
    </DashboardLayout>
  );
}
export default Tables;
