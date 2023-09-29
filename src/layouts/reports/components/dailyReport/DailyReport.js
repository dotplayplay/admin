import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import dailyReportTable from './data/dailyReportData';
import { usePagination, Pagination } from "pagination-react-js";
import { BsArrowUpLeft } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';

const DailyReport = () => {
  const { columns, rows } = dailyReportTable;
  const { currentPage, entriesPerPage, entries } = usePagination(1, 10);
  const [sortedData, setSortedData] = useState(rows);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDate, setShowDate] = useState(false);

  const handleShowDate = () => {
    setShowDate(!showDate)
  }

  const sortData = (start, end) => {
    if (start && end) {
      const filteredData = rows.filter(row => {
        const rowDate = new Date(row.date);
        return rowDate >= start && rowDate <= end;
      });

      filteredData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });

      setSortedData(filteredData);
      setShowDate(!showDate)
    } else {
      setSortedData(rows);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const style = {
    tableCol: "px-4 py-2 text-center",
  }

  return (
    <div>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <div className="bg-[#1a1e32e4]">
              <div className="bg-[#282a32] mb-4">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">DAILY REPORT</p></SoftTypography>
                  <SoftTypography variant="h6">
                    <input
                      className="border-[1px] rounded-[5px] px-4 py-[1px]"
                      placeholder="search reports"
                      value={searchQuery}
                      onChange={handleSearch}
                      type="text"
                    />
                  </SoftTypography>
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
                <div className="flex items-center justify-between my-4">
                  <div className="select-wrapper max-elements px-6">
                    <label className="text-[15px] text-[#fff] px-2" htmlFor="max-elements">Entries per page:</label>
                    <select className="py-2 text-[13px] hover:bg-[#E1E4E7] cursor-pointer focus:outline-none px-2 rounded-[10px]" name="max-elements" id="max-elements" onChange={e => { currentPage.set(1); entriesPerPage.set(Number(e.target.value)); }}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                      <option value={rows?.length}>All</option>
                    </select>
                  </div>
                  <button className="px-4 mx-4 border-[1px] rounded-[5px] bg-[#fff]" onClick={handleShowDate}>
                    <SoftTypography variant="h6">filter by date</SoftTypography>
                  </button>
                </div>
                {
                  showDate ? (
                    <div className="flex justify-center border-[1px]">
                      <div className="bg-[#fff] p-4 w-[80%] m-auto md:left-[40%] fixed top-[30%] md:w-[30%] mb-4">
                        <div className="flex top-[0px] bg-[#fff] sticky justify-between items-center gap-2 p-4">
                          <h2 className="text-[16px] font-extrabold">Filter</h2>
                          <button onClick={handleShowDate}>&times;</button>
                        </div>
                        <div>
                          <SoftTypography variant="h6">Start Date:</ SoftTypography>
                          <DatePicker className="text-[14px] border-[1px] px-4 w-full py-[3px]" selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                        <div className="mt-2">
                          <SoftTypography variant="h6">End Date:</ SoftTypography>
                          <DatePicker className="text-[14px] border-[1px] px-4 w-full py-[3px]" selected={endDate} onChange={date => setEndDate(date)} />
                        </div>
                        <SoftBox mt={4} mb={1}>
                          <SoftButton variant="gradient" color="info" fullWidth>
                            <button onClick={() => sortData(startDate, endDate)}>Sort Date</button>
                          </SoftButton>
                        </SoftBox>
                      </div>
                    </div>
                  ) : (<></>)
                }
                <div className="overflow-x-auto dashboard">
                  <table className="w-full">
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
                      {sortedData.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                        row.dau.props.children.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length === 0 ? (
                        <tr>
                          <td className={style.tableCol}>
                            <SoftTypography variant="h6" color="white">
                              Empty
                            </SoftTypography>
                          </td>
                        </tr>
                      ) : (
                        sortedData.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                          row.dau.props.children.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.date}</td>
                            <td className={style.tableCol}>{row.dau}</td>
                            <td className={style.tableCol}>{row.newRegister}</td>
                            <td className={style.tableCol}>{row.totalNewDeposit}</td>
                            <td className={style.tableCol}>{row.newDeposit}</td>
                            <td className={style.tableCol}>{row.totalReDeposit}</td>
                            <td className={style.tableCol}>{row.totalDeposit}</td>
                            <td className={style.tableCol}>{row.totalWithdrawal}</td>
                            <td className={style.tableCol}>{row.totalwagered}</td>
                            <td className={style.tableCol}>{row.totalWinningPayout}</td>
                            <td className={style.tableCol}>{row.totalGGR}</td>
                            <td className={style.tableCol}>{row.totalDepositBonus}</td>
                            <td className={style.tableCol}>{row.totalDepositUnlocked}</td>
                            <td className={style.tableCol}>{row.vipLevelUp}</td>
                            <td className={style.tableCol}>{row.luckySpin}</td>
                            <td className={style.tableCol}>{row.rollCompetion}</td>
                            <td className={style.tableCol}>{row.dailyContest}</td>
                            <td className={style.tableCol}>{row.medal}</td>
                            <td className={style.tableCol}>{row.binggo}</td>
                            <td className={style.tableCol}>{row.rain}</td>
                            <td className={style.tableCol}>{row.coindrop}</td>
                            <td className={style.tableCol}>{row.totalFreeUnlocked}</td>
                            <td className={style.tableCol}>{row.commisionRakeback}</td>
                            <td className={style.tableCol}>{row.directReferal}</td>
                            <td className={style.tableCol}>{row.totalAffiliateUnlocked}</td>
                            <td className={style.tableCol}>{row.recharge}</td>
                            <td className={style.tableCol}>{row.weeklyCashback}</td>
                            <td className={style.tableCol}>{row.monthlyCashback}</td>
                            <td className={style.tableCol}>{row.ticket}</td>
                            <td className={style.tableCol}>{row.prize}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </SoftBox>
            </div>
          </Card>
        </SoftBox>
      </SoftBox>
      <Pagination
        entriesPerPage={entriesPerPage.get}
        totalEntries={rows?.length}
        currentPage={{ get: currentPage.get, set: currentPage.set }}
        offset={3}
        classNames={{
          wrapper: "pagination flex items-center justify-center gap-6 mt-4",
          item: 'pagination-item cursor-pointer text-[16px]',
          itemActive: "pagination-item-active",
          navPrev: "pagination-item nav-item cursor-pointer",
          navNext: "pagination-item nav-item cursor-pointer",
          navStart: "pagination-item nav-item cursor-pointer",
          navEnd: "pagination-item nav-item cursor-pointer",
          navPrevCustom: "pagination-item cursor-pointer",
          navNextCustom: "pagination-item cursor-pointer"
        }}
        showFirstNumberAlways={true}
        showLastNumberAlways={true}
        navStart={<button className="text-[16px] bg-[#FCFBFE] rounded-[6px] py-2 px-4 gap-2 flex items-center"><BsArrowUpLeft />First</button>}
        navEnd={<button className="text-[16px] bg-[#FCFBFE] rounded-[6px] py-2 px-4 gap-2 flex items-center"><BsArrowUpRight /> Last</button>}
        navPrev={<button className="hover:bg-[#E1E4E7] font-extrabold text-[20px] rounded-[7px] px-4">&#x2039;</button>}
        navNext={<button className="hover:bg-[#E1E4E7] font-extrabold text-[20px] rounded-[7px] px-4">&#x203a;</button>}
        navPrevCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" }}
        navNextCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" }}
      />
    </div>
  );
};

export default DailyReport;