import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SoftBox from "components/SoftBox";
//data
import memberData from '../data/memberData';
import { usePagination, Pagination } from "pagination-react-js";

const MemberTable = () => {
  const { 
    basicInfo, rows } = memberData;
  const { memberId } = useParams();

  return (
    <div>
      <SoftBox py={3}>
        Member
      </SoftBox>
    </div>
  );
};

export default MemberTable;