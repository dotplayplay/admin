/* eslint-disable */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography"

//data
import membersData from '../data/membersData';
import { usePagination, Pagination } from "pagination-react-js";
import { BsArrowUpLeft, BsArrowUpRight } from 'react-icons/bs';
import { RiWhatsappLine } from 'react-icons/ri';

const MembersTableComponent = ({ searchQuery }) => {
  const { columns, rows } = membersData;
  const { currentPage, entriesPerPage, entries } = usePagination(1, 10);
  const [sortedData, setSortedData] = useState(rows);
  const [membersDate, setMembersDate] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const navigate = useNavigate();

  const memberDetail = (rowId) => {
    navigate(`/members/member/${rows[rowId].userID}`);
  }

  // For filtering by date
  const handleShowDate = () => {
    setShowDate(!showDate)
  }

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
    tableCol: "px-2 py-4 text-slate-800 text-[13px] text-center w-max min-w-[70px] max-w-[140px] hover:max-w-full truncate text-ellipsis",
  }

  return (
    <div >
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <div>
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
                <div className="select-wrapper max-elements px-6 py-4 bg-white rounded-t-[10px] flex border-slate-200/50 border-[1px]">
                  <label className="text-[15px] text-slate-700 px-2" htmlFor="max-elements">Entries per page:</label>
                  <select className="py-2 text-[13px] cursor-pointer focus:outline-none px-2 bg-slate-200 rounded-[5px]" name="max-elements" id="max-elements" onChange={e => { currentPage.set(1); entriesPerPage.set(Number(e.target.value)); }}>
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
                    <SoftTypography variant="h6" color="#aeb8c2">filter by date</SoftTypography>
                  </button>
                  {showDate && 
                  <div className="flex justify-center">
                    <div className="bg-[#fff] p-4 w-[80%] m-auto md:left-[40%] fixed top-[30%] md:w-[30%] mb-4">
                      <div className="flex top-[0px] bg-[#fff] sticky justify-between items-center gap-2 p-4">
                        <h2 className="text-[16px] font-extrabold">Filter</h2>
                        <button onClick={handleShowDate}>&times;</button>
                      </div>
                      <div>
                        <SoftTypography variant="h6">Date Created:</ SoftTypography>
                        <div className="h-full flex text-center align-center">
                          <DatePicker className="text-[14px] border-[1px] px-4 w-full py-[3px]" selected={membersDate} onChange={date=>setMembersDate(date)} />
                          <button className="h-full text-black-200 hover:text-black-500 pt-1 px-3" onClick={()=>{setMembersDate('');sortData();}}>&times;</button>
                        </div>
                      </div>
                      <SoftBox mt={4} mb={1}>
                        <SoftButton variant="gradient" color="info" fullWidth onClick={()=>sortData(membersDate)}>
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
                        {columns.map((column, columnIndex) => (
                          <th
                            className="text-slate-700 bg-slate-200 text-[12px] text-center py-2 px-2 capitalize"
                            key={columnIndex}
                          >{column.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sortedData.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                        row.username.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length === 0 ? (
                        <tr>
                          <td className={style.tableCol}>
                            <SoftTypography variant="h6" color="black">
                              user not found
                            </SoftTypography>
                          </td>
                        </tr>
                      ) : (
                        sortedData.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                          row.username.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={`cursor-pointer ${rowIndex % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200'}`}
                          >
                            <td className={`${style.tableCol}`}>{row.userID}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.username}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.fullName}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.phoneNumber}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.email}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.totalWagered}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.totalGGR}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.usdtPpdPpl}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.chatMessages}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.date} - {row.time}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.firstDepositDate} - {row.firstDepositTime}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.lastDepositDate} - {row.lastDepositTime}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.lastLoginDate} - {row.lastLoginTime}</td>
                            <td className={style.tableCol} onClick={()=>memberDetail(rowIndex)}>{row.lastLoginIP}</td>
                            <td className="px-2 py-1">
                              <Link to={`${row.usdtPpdPpl}`} className={`w-max flex align-center text-center gap-x-[2px] ${rowIndex % 2 == 0? 'bg-slate-200' : 'bg-slate-300'} hover:bg-[#d7fce5] text-slate-600 hover:text-[#25D366] py-[5px] px-4 rounded-[5px] transition-all duration-150 ease-in-out`}>
                                <RiWhatsappLine className="text-[22px] pt-[2px]" />
                                <p className="text-[15px]">Chat</p>
                              </Link>
                            </td>
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

export default MembersTableComponent;