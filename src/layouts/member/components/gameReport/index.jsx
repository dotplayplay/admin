/* eslint-disable */
import React, { useState } from 'react';
import MemberData from '../../data/memberData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SoftTypography from 'components/SoftTypography'; 
import SoftButton from 'components/SoftButton';
import SoftBox from 'components/SoftBox';

const GameReport = () => {
  const { columns, rows } = MemberData.gameReport;
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

  return (
    <div id='game-report' className="w-full bg-white shadow-xl rounded-[10px] p-2 md:p-4">
      <p className="text-md text-slate-600 font-[600] mb-5">Game Report</p>
      <small className="uppercase tracking-[2px] font-[600] text-[10px] text-slate-400 mt-2">Info</small>
      <div className="w-full flex justify-end p-2">
        <button className="px-4 mx-4 border-[1px] rounded-[5px] bg-slate-100" onClick={handleShowDate}>
          <SoftTypography variant="h6" color="#4A90E2">filter by date</SoftTypography>
        </button>
      </div>
        {showDate? (
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
      <div className='py-5 md:px-2 rounded-[10px] border-[1px]'>
        <table className='w-full'>
          <thead>
            <tr>
            {columns.map((column, index) => (
              <th key={index} className='text-[.875rem] md:text-[1.15rem] text-slate-600 font-[600] '>{column.name}</th>
            ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
            <tr key={index}>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.date} - {row.time}</td>
                <td 
                  className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                  >{row.gameTypes}</td>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.totalWagered}</td>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.totalPayout}</td>
              <td 
                className='text-[.875rem] text-slate-500 px-1 md:px-2 py-4 text-center w-max '
                >{row.totalGgr}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GameReport;