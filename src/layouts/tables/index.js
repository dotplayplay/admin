import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [addMember, setAddMember] = useState(false);
  const modalRef = useRef(null);
  const handleAddMember = () => {
    setAddMember(!addMember)
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    number: "",
    userId: "",
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
    const userId = Math.floor(Math.random() * 1000000);

    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      number: "",
      userId: userId,
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
      <div>
        {
          addMember ? (
            <div className="bg-[#fff] fixed create_user_container w-[90%] h-[90%] absolute top-[5%] md:left-[12%] add_member p-6 md:w-[55%] rounded-[15px] mt-4">
              <div className="flex mb-[5%] items-center justify-between">
                <p className="text-[#99a0ab] text-[20px] font-extrabold">Add new Member</p>
                <button type="button" onClick={handleAddMember} className="text-[25px]">&times;</button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={style.inputCon}>
                  <label className={style.label}>Username:</label>
                  <input
                    type="text"
                    name="username"
                    className={style.input}
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputCon}>
                  <label className={style.label}>Password:</label>
                  <input
                    type="password"
                    name="password"
                    className={style.input}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputCon}>
                  <label className={style.label}>Confirm Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={style.input}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputCon}>
                  <label className={style.label}>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className={style.input}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputCon}>
                  <label className={style.label}>Phone Number:</label>
                  <input
                    type="tel"
                    name="number"
                    className={style.input}
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputCon}>
                  <label className={style.label}>Vip level</label>
                  <input
                    type="number"
                    name="vipLevel"
                    className={style.input}
                    value={formData.vipLevel}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputCon}>
                  <label className={style.label}>Affiliate model</label>
                  <input
                    type="text"
                    name="affliateModel"
                    className={style.input}
                    value={formData.affliateModel}
                    onChange={handleChange}
                  />
                </div>
                <SoftBox mt={4} mb={1}>
                  <SoftButton variant="gradient" color="info" fullWidth>
                    <button type="submit">Create member</button>
                  </SoftButton>
                </SoftBox>
              </form>
            </div>
          ) : (
            <div></div>
          )
        }
      </div>
      <div className="members_table">
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <div className="bg-[#282a32] mb-4">
                  <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                    <SoftTypography variant="h6"><p className="text-[#fff]">MEMBER MANAGEMENT</p></SoftTypography>
                    <button
                      onClick={handleAddMember}
                      className="bg-[#fff] border-[1px] members_table px-4 text-[13px] py-2 rounded-[7px] text-[#76839A]"
                    >Add new member</button>
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
                              className="text-[#fff] text-[12px] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <Link to={`/details/${row.userID.props.job}`} state={{ rowData: row }}>
                              <td className={style.tableCol}>{row.users}</td>
                            </Link>
                            <td className={style.tableCol}>{row.userID}</td>
                            <td className={style.tableCol}>{row.number}</td>
                            <td className={style.tableCol}>{row.totalWagered}</td>
                            <td className={style.tableCol}>{row.totalGCR}</td>
                            <td className={style.tableCol}>{row.chatMessages}</td>
                            <td className={style.tableCol}>{row.walletBalance}</td>
                            <td className={style.tableCol}>{row.RegisteredDate}</td>
                            <td className={style.tableCol}>{row.FirstDepositDate}</td>
                            <td className={style.tableCol}>{row.LastDepositDate}</td>
                            <td className={style.tableCol}>{row.LastLoginDate}</td>
                            <td className={style.tableCol}>{row.LastLoginIP}</td>
                            <td className={style.tableCol}>{row.Chat}</td>
                            <td className={style.tableCol}>{row.status}</td>
                            <td className={style.tableCol}>{row.action}</td>
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
