import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
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
    input: "w-full border-[#6B6B6B] p-2 block border-[1px] rounded-[8px]",
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <button
          onClick={handleAddMember}
          className="bg-[#23A6FE] px-4 py-2 rounded-[7px] text-[#fff]"
        >Add new member</button>
        {
          addMember ? (
            <div className="bg-[#fff] p-6 md:w-[75%] rounded-[15px] mt-4">
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block">Username:</label>
                  <input
                    type="text"
                    name="username"
                    className={style.input}
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block">Password:</label>
                  <input
                    type="password"
                    name="password"
                    className={style.input}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block">Confirm Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={style.input}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className={style.input}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block">Phone Number:</label>
                  <input
                    type="tel"
                    name="number"
                    className={style.input}
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block">Vip level</label>
                  <input
                    type="number"
                    name="vipLevel"
                    className={style.input}
                    value={formData.vipLevel}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block">Affiliate model</label>
                  <input
                    type="text"
                    name="affliateModel"
                    className={style.input}
                    value={formData.affliateModel}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="bg-[#23A6FE] mt-2 px-4 py-2 rounded-[7px] text-[#fff]"
                  type="submit">Create member</button>
              </form>
            </div>
          ) : (
            <div></div>
          )
        }
      </div>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">MEMBER MANAGEMENT</SoftTypography>
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>

      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
