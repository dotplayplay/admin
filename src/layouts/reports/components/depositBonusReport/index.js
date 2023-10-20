import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";

//data
import depositBonusReportData from './data';
import { usePagination, Pagination } from "pagination-react-js";
import { BsArrowUpLeft } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';

const DepositBonusReport = () => {
  const { summaryColumns, columns, summaryRows, rows } = depositBonusReportData;
  const { currentPage, entriesPerPage, entries } = usePagination(1, 10);
  const [sortedSummaryData, setSortedSummaryData] = useState(summaryRows);
  const [sortedData, setSortedData] = useState(rows);
  const [depositBonusDate, setdepositBonusDate] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const navigate = useNavigate();

  const showBonusDetails = (promoEventId) => {
    navigate(`/reports/${promoEventId}`);
  }

  // For search function
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // For filtering by date
  const handleShowDate = () => {
    setShowDate(!showDate)
  }

  // Filter function for Summary Data
  const sortSummaryData = (gameDate) => {
    if (gameDate) {
      const filteredData = rows.filter(row => {
        const rowDate = new Date(row.date);
        const sortDate = new Date(gameDate);
        return rowDate.getTime() === sortDate.getTime();
      });

      filteredData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });

      sortedSummaryData(filteredData);
    } else {
      sortedSummaryData(summaryRows);
    }
    setShowDate(!showDate);
  };

  // Filter function for users data
  const sortData = (gameDate) => {
    if (gameDate) {
      const filteredData = rows.filter(row => {
        const rowDate = new Date(row.date);
        const sortDate = new Date(gameDate);
        return rowDate.getTime() === sortDate.getTime();
      });

      filteredData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });

      setSortedData(filteredData);
    } else {
      setSortedData(rows);
    }
    setShowDate(!showDate);
  };

  const style = {
    tableCol: "px-2 py-2 text-slate-800 text-[14px] text-center",
  }

  return (
    <div>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <div>
              <div className="bg-none">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6">
                    <p className="text-slate-700 uppercase">Deposit Bonus Report</p>
                  </SoftTypography>
                  <SoftTypography variant="h6">
                    <input
                      className="border-[1px] border-slate-400 rounded-[5px] px-4 py-[1px]"
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
                <div className="select-wrapper max-elements px-6 py-4 bg-slate-200 rounded-t-[10px] flex">
                  <label className="text-[15px] text-slate-700 px-2" htmlFor="max-elements">Entries per page:</label>
                  <select className="py-2 text-[13px] cursor-pointer focus:outline-none px-2 rounded-[5px]" name="max-elements" id="max-elements" onChange={e => { currentPage.set(1); entriesPerPage.set(Number(e.target.value)); }}>
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
                  <div className="flex-1"></div>
                  <button className="px-4 mx-4 border-[1px] rounded-[5px] bg-slate-100" onClick={handleShowDate}>
                    <SoftTypography variant="h6" color="#4A90E2">filter by date</SoftTypography>
                  </button>
                  {showDate && 
                  <div className="flex justify-center">
                    <div className="bg-[#fff] p-4 w-[80%] m-auto md:left-[40%] fixed top-[30%] md:w-[30%] mb-4">
                      <div className="flex top-[0px] bg-[#fff] sticky justify-between items-center gap-2 p-4">
                        <h2 className="text-[16px] font-extrabold">Filter</h2>
                        <button onClick={handleShowDate}>&times;</button>
                      </div>
                      <div>
                        <SoftTypography variant="h6">Game Date:</ SoftTypography>
                        <div className="h-full flex text-center align-center">
                          <DatePicker className="text-[14px] border-[1px] px-4 w-full py-[3px]" selected={depositBonusDate} onChange={date=>setdepositBonusDate(date)} />
                          <button className="h-full text-black-200 hover:text-black-500 pt-1 px-3" 
                          onClick={()=>{
                            setdepositBonusDate('');
                            sortData();
                          }}>&times;</button>
                        </div>
                      </div>
                      <SoftBox mt={4} mb={1}>
                        <SoftButton variant="gradient" color="info" fullWidth onClick={()=>sortData(depositBonusDate)}>
                          <span>Sort Date</span>
                        </SoftButton>
                      </SoftBox>
                    </div>
                  </div>}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        {summaryColumns.map((column, columnIndex) => (
                          <th
                            className="text-slate-700 bg-slate-100 text-[14px] text-center capitalize py-2 px-2"
                            key={columnIndex}
                          >{column.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sortedSummaryData.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                        row.promoEvent.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length === 0 ? (
                        <tr>
                          <td className={style.tableCol}>
                            <SoftTypography variant="h6" color="black">
                              user not found
                            </SoftTypography>
                          </td>
                        </tr>
                      ) : (
                        sortedSummaryData.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                          row.promoEvent.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            onClick={() => showBonusDetails(row.promoEventId)}
                            className={`cursor-pointer ${rowIndex % 2 === 0 ? 'bg-slate-200' : 'bg-slate-100'}`}
                          >
                            <td className={style.tableCol}>{rowIndex + 1}</td>
                            <td className={`${style.tableCol}`}>{row.promoEvent}</td>
                            <td className={style.tableCol}>{row.memberCount}</td>
                            <td className={style.tableCol}>{row.totalDeposit}</td>
                            <td className={style.tableCol}>{row.TotalLockedPPD}</td>
                            <td className={style.tableCol}>{row.UnlockedUpToDate}</td>
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
      </SoftBox>
    </div>
  );
};

export default DepositBonusReport;