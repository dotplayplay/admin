import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './members.css';
const Members = () => {
  const [addMember, setAddMember] = useState(false);
  const handleAddMember = () => {
    setAddMember(!addMember)
  }

  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    userId: "",
    referralId: "",
    registeredDateTime: "",
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
    const referralId = Math.floor(Math.random() * 1000000);
    const registeredDateTime = new Date().toLocaleString();

    setFormData({
      username: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      userId: userId,
      referralId: referralId,
      registeredDateTime: registeredDateTime,
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

  return (
    <div className="members_container px-6">
      <div className="my-4">
        <h1 className="text-[30px] mb-4 font-mono font-semibold">Manage Players Like a Pro</h1>
        <p className="text-[12px]">Effortlessly add new members and access detailed player profiles in seconds.</p>
        <p className="my-2 text-[12px]">Keep tabs on user activity with secure transaction logs, betting stats, and chat history.</p>
        <p className="text-[12px]">Easily manage member roles, tags, and status with intuitive action buttons.</p>
      </div>
      <button
        onClick={handleAddMember}
        className="bg-[#23A6FE] px-4 py-2 rounded-[7px] text-[#fff]"
      >Add new member</button>
      {
        addMember ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Add member</button>
          </form>
        ) : (
          <div></div>
        )
      }
      <div>
        <h2>Form Data:</h2>
        {submittedData.map((data, index) => (
          <div key={index}>
            <p>User ID: {data.userId}</p>
            <p>Referral ID: {data.referralId}</p>
            <p>Registered Date & Time: {data.registeredDateTime}</p>
            <Link state={data} to="/members_details">View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Members;
