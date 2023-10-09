import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import editRole from './data/memberDetailsTable';

const MemberDetails = () => {
  const location = useLocation();
  const row = location?.state;
  const { basicInformation,
    accountInformation,
    sessions,
    vipInformaton,
    affiliateInfo,
    walletInfo,
    gameReport,
    detailTable,
    usdtWallet,
    ppdWallet,
    pplWallet,
    ppfWallet,
    ppeWallet } = editRole();
  const { basicInfoColumns, basicInfoRows } = basicInformation;
  const { accInfoColumns, accInfoRows } = accountInformation;
  const { sessionColumns, sessionRows } = sessions;
  const { vipInfoColumns, vipInfoRows } = vipInformaton;
  const { affiliateInfoCol, affiliateInfoRow } = affiliateInfo;
  const { walletInfoCol, walletInfoRow } = walletInfo;
  const { gameReportColumns, gameReportRows } = gameReport;
  const { detailTableColumns, detailsTableRows } = detailTable;
  const { usdtWalletColummns, usdtWalletRows } = usdtWallet;
  const { ppdWalletColummns, ppdWalletRows } = ppdWallet;
  const { pplWalletColummns, pplWalletRows } = pplWallet;
  const { ppfWalletColummns, ppfWalletRows } = ppfWallet;
  const { ppeWalletColummns, ppeWalletRows } = ppeWallet;

  const style = {
    tableCol: "px-4 py-2 text-center",
    tableHeight: "h-[400px] my-4 create_user_container",
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <div className="md:flex gap-[7%] flex-wrap">
          <SoftBox mb={3}>
            <div className="bg-[#1a1e32e4] rounded-[25px]">
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
                      <SoftTypography variant="h6"><p className="text-[#fff]">Sessions used in past</p></SoftTypography>
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
                                <td className={style.tableCol}>{row.Browser}</td>
                                <td className={style.tableCol}>{row.Location}</td>
                                <td className={style.tableCol}>{row.IPAddress}</td>
                                <td className={style.tableCol}>{row.LastUsed}</td>
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
        <div className="md:flex gap-[7%] flex-wrap">
          <SoftBox mb={3}>
            <div className="md:w-[400px]">
              <Card>
                <div className="bg-[#1a1e32e4]">
                  <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                    <SoftTypography variant="h6"><p className="text-[#fff]">VIP Information</p></SoftTypography>
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
                            {vipInfoColumns.map((column, columnIndex) => (
                              <th
                                className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                                key={columnIndex}
                              >{column.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {vipInfoRows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                              <td className={style.tableCol}>{row.vips}</td>
                              <td className={style.tableCol}>{row.action}</td>
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
                      <SoftTypography variant="h6"><p className="text-[#fff]">Affiliate Information</p></SoftTypography>
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
                              {affiliateInfoCol.map((column, columnIndex) => (
                                <th
                                  className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                                  key={columnIndex}
                                >{column.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {affiliateInfoRow.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                                <td className={style.tableCol}>{row.affiliate}</td>
                                <td className={style.tableCol}>{row.action}</td>
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
                      <SoftTypography variant="h6"><p className="text-[#fff]">Wallet Information</p></SoftTypography>
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
                              {walletInfoCol.map((column, columnIndex) => (
                                <th
                                  className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                                  key={columnIndex}
                                >{column.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {walletInfoRow.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                                <td className={style.tableCol}>{row.Wallet}</td>
                                <td className={style.tableCol}>{row.action}</td>
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
        <div>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">Game report</p></SoftTypography>
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
                          {gameReportColumns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {gameReportRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.Date}</td>
                            <td className={style.tableCol}>{row.GameType}</td>
                            <td className={style.tableCol}>{row.TotalWagered}</td>
                            <td className={style.tableCol}>{row.TotalPayouts}</td>
                            <td className={style.tableCol}>{row.TotalGGR}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </div>
        <div>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">Detail table</p></SoftTypography>
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
                          {detailTableColumns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {detailsTableRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.Date}</td>
                            <td className={style.tableCol}>{row.details}</td>
                            <td className={style.tableCol}>{row.wager}</td>
                            <td className={style.tableCol}>{row.payout}</td>
                            <td className={style.tableCol}>{row.profitLoss}</td>
                            <td className={style.tableCol}>{row.companyGGR}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </div>
        <div className={style.tableHeight}>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">USDT Wallet</p></SoftTypography>
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
                          {usdtWalletColummns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {usdtWalletRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.transactionDate}</td>
                            <td className={style.tableCol}>{row.transID}</td>
                            <td className={style.tableCol}>{row.type}</td>
                            <td className={style.tableCol}>{row.debit}</td>
                            <td className={style.tableCol}>{row.credit}</td>
                            <td className={style.tableCol}>{row.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </div>
        <div className={style.tableHeight}>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">PPD wallet</p></SoftTypography>
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
                          {ppdWalletColummns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {ppdWalletRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.transactionDate}</td>
                            <td className={style.tableCol}>{row.transID}</td>
                            <td className={style.tableCol}>{row.type}</td>
                            <td className={style.tableCol}>{row.debit}</td>
                            <td className={style.tableCol}>{row.credit}</td>
                            <td className={style.tableCol}>{row.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </div>
        <div className={style.tableHeight}>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">PPL wallet</p></SoftTypography>
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
                          {pplWalletColummns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {pplWalletRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.transactionDate}</td>
                            <td className={style.tableCol}>{row.transID}</td>
                            <td className={style.tableCol}>{row.type}</td>
                            <td className={style.tableCol}>{row.debit}</td>
                            <td className={style.tableCol}>{row.credit}</td>
                            <td className={style.tableCol}>{row.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </div>
        <div className={style.tableHeight}>
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">PPF wallet</p></SoftTypography>
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
                          {ppfWalletColummns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {ppfWalletRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.transactionDate}</td>
                            <td className={style.tableCol}>{row.transID}</td>
                            <td className={style.tableCol}>{row.type}</td>
                            <td className={style.tableCol}>{row.debit}</td>
                            <td className={style.tableCol}>{row.credit}</td>
                            <td className={style.tableCol}>{row.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </div>
        <div className="h-[400px] create_user_container">
          <SoftBox mb={3}>
            <Card>
              <div className="bg-[#1a1e32e4]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">PPE wallet</p></SoftTypography>
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
                          {ppeWalletColummns.map((column, columnIndex) => (
                            <th
                              className="text-[#fff] text-[12px] bg-[#202128] text-center px-4"
                              key={columnIndex}
                            >{column.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {ppeWalletRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}`}>
                            <td className={style.tableCol}>{row.transactionDate}</td>
                            <td className={style.tableCol}>{row.transID}</td>
                            <td className={style.tableCol}>{row.type}</td>
                            <td className={style.tableCol}>{row.debit}</td>
                            <td className={style.tableCol}>{row.credit}</td>
                            <td className={style.tableCol}>{row.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SoftBox>
              </div>
            </Card>
          </SoftBox>
        </div>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default MemberDetails;
