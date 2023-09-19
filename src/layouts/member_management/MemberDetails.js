import React from "react";
import { useLocation } from 'react-router-dom';

const MemberDetails = () => {
  const location = useLocation();
  const data = location.state;

  const membersList = [
    {
      title: "Total wagered (turnover)",
      data: { total_wagered: 60 },
    },
    {
      title: "Total GGR (win/lose)",
      data: { total_ggr: 340 },
    },
    {
      title: "Total balance",
      data: { total_balance: 660 },
    },
    {
      title: "Bank info",
      data: { bank_info: "Duoling bank" },
    },
    {
      title: "First deposit date & time",
      data: { first_deposit_date: "16/09/2023, 02:22:46" },
    },
    {
      title: "Last deposit date & time",
      data: { last_deposit_date: "16/09/2023, 02:22:46" },
    },
    {
      title: "Last login date & time",
      data: { last_login_date: "16/09/2023, 02:22:46" },
    },
    {
      title: "Last login IP",
      data: { last_login: "12gnhm 5oop3qrtz" },
    },
  ]
  
  return (
    <div>
      <h2>Member Details</h2>
      <p>User ID: {data.userId}</p>
      <p>Referral ID: {data.referralId}</p>
      <p>Registered Date & Time: {data.registeredDateTime}</p>
    </div>
  );
};

export default MemberDetails;