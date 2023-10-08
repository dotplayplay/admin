import React from 'react';
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

const MemberDetails = () => {
  const location = useLocation();
  const row = location?.state;
  const { basicInformation,
    accountInformation,
    sessions,
    // vipInformaton,
    // affiliateInfo,
    // walletInfo,
    // gameReport,
    // detailTable,
    // usdtWallet,
    // ppdWallet,
    // pplWallet,
    // ppfWallet,
    // ppeWallet 
  } = editRole();
  const { basicInfoColumns, basicInfoRows } = basicInformation;
  const { accInfoColumns, accInfoRows } = accountInformation;
  const { sessionColumns, sessionRows } = sessions;
  // const { vipInfoColumns, vipInfoRows } = vipInformaton;
  // const { affiliateInfoCol, affiliateInfoRow } = affiliateInfo;
  // const { walletInfoCol, walletInfoRow } = walletInfo;
  // const { gameReportColumns, gameReportRows } = gameReport;
  // const { detailTableColumns, detailsTableRows } = detailTable;
  // const { usdtWalletColummns, usdtWalletRows } = usdtWallet;
  // const { ppdWalletColummns, ppdWalletRows } = ppdWallet;
  // const { pplWalletColummns, pplWalletRows } = pplWallet;
  // const { ppfWalletColummns, ppfWalletRows } = ppfWallet;
  // const { ppeWalletColummns, ppeWalletRows } = ppeWallet;

  const style = {
    tableCol: "px-4 py-2 text-center",
    tableHeight: "h-[400px] my-4 create_user_container",
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox >
        <div className="md:flex justify-between w-[100%] xds:w-[90%]">
          <SoftBox mb={3} >
            <div className="bg-[#1a1e32e4]  rounded-[25px]">
              <Card>
                <div className="bg-[#1a1e32e4] md:w-64 xd:w-96">
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
                            {basicInfoColumns.map((column, columnIndex) => (
                              <th
                                className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                                key={columnIndex}
                              >{column.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {basicInfoRows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                              <td className={style.tableCol}>{row.user}</td>
                              <td className={style.tableCol}>{row.option}</td>
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
          <div>
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
          </div>
        </div>
      </SoftBox>
      <SoftBox mb={3}>
        <SoftButton >
          Save Changes
        </SoftButton>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default MemberDetails;
