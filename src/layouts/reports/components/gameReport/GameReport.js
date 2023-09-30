import React, { useState } from 'react';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
//data
import gameReport from './data/gameReportTable';
import { usePagination, Pagination } from "pagination-react-js";
import { BsArrowUpLeft } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';

const GameReport = () => {
  const { columns, rows } = gameReport;
  const { currentPage, entriesPerPage, entries } = usePagination(1, 10);
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
              <div className="bg-[#282a32]">
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6"><p className="text-[#fff]">GAME REPORT</p></SoftTypography>
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
                <div className="select-wrapper max-elements px-6 py-4 bg-[#202128]">
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
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        {columns.map((column, columnIndex) => (
                          <th
                            className="text-[#fff] text-[14px] bg-[#202128] text-center px-4"
                            key={columnIndex}
                          >{column.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                        row.game.props.children.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length === 0 ? (
                        <tr>
                          <td className={style.tableCol}>
                            <SoftTypography variant="h6" color="white">
                              Game not found
                            </SoftTypography>
                          </td>
                        </tr>
                      ) : (
                        rows.slice(entries.indexOfFirst, entries.indexOfLast).filter((row) =>
                          row.game.props.children.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#706c6c]' : ''}>
                            <td className={style.tableCol}>{row.no}</td>
                            <td className={style.tableCol}>{row.game}</td>
                            <td className={style.tableCol}>{row.totalWagered}</td>
                            <td className={style.tableCol}>{row.totalPayout}</td>
                            <td className={style.tableCol}>{row.totalGGR}</td>
                            <td className={style.tableCol}>{row.GGR}</td>
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
      {/* </DashboardLayout> */}
    </div>
  );
};

export default GameReport;