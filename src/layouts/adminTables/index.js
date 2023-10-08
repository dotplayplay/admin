import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/adminTables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const [addMember, setAddMember] = useState(false);
  const navigate = useNavigate();
  const handleAddMember = () => {
    navigate('/Create')
    // setAddMember(!addMember)
  }

  const memberDetail = (rowId) => {
    navigate(`/details/${rows[rowId].Username.props.job}`);
  }

  const [formData, setFormData] = useState({
    AdminID: "",
    password: "",
    confirmPassword: "",
    email: "",
    number: "",
    Username: "",
    vipLevel: "",
    affliateModel: "",
  });
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

  const generateRandomData = () => {
    const Username = Math.floor(Math.random() * 1000000);

    setFormData({
      AdminID: "",
      password: "",
      confirmPassword: "",
      email: "",
      number: "",
      Username: Username,
      vipLevel: "",
      affliateModel: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    generateRandomData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const style = {
    input: "w-full border-[#6B6B6B] px-[5px] py-[1px] block border-[1px] rounded-[8px]",
    tableCol: "px-4 py-2 text-center",
    label: "block text-[13px]",
    inputCon: "mb-[10px]"
  }

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
                      <thead>
                        <tr>
                          {columns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] bg-[#202128] w-full text-[14px] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            onClick={() => memberDetail(rowIndex)}
                            className={`cursor-pointer ${rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}`}
                          >
                            <td className={style.tableCol}>{row.AdminID}</td>
                            <td className={style.tableCol}>{row.Username}</td>
                            <td className={style.tableCol}>{row.Status}</td>
                            <td className={style.tableCol}>{row.Account}</td>
                            <td className={style.tableCol}>{row.Permissions}</td>
                            <td className={style.tableCol}>{row.ActivityLog}</td>
                            {/* <td className={style.tableCol}>{row.chatMessages}</td>
                            <td className={style.tableCol}>{row.walletBalance}</td>
                            <td className={style.tableCol}>{row.RegisteredDate}</td>
                            <td className={style.tableCol}>{row.FirstDepositDate}</td>
                            <td className={style.tableCol}>{row.LastDepositDate}</td>
                            <td className={style.tableCol}>{row.LastLoginDate}</td>
                            <td className={style.tableCol}>{row.LastLoginIP}</td>
                            <td className={style.tableCol}>{row.Chat}</td>
                            <td className={style.tableCol}>{row.status}</td>
                            <td className={style.tableCol}>{row.action}</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </SoftBox>
      </div>
      <div className="members_table">
        <Footer />
      </div>
    </DashboardLayout>
  );
}
export default Tables;
