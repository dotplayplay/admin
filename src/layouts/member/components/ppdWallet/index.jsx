/* eslint-disable */
import React, { useState } from 'react';
import MemberData from '../../data/memberData';
import 'react-datepicker/dist/react-datepicker.css';
import CurrencyWallet from '../(layout)/currencyWallet';

const PpdWallet = () => {
  return <CurrencyWallet currency={MemberData.PpdInfo} />
}

export default PpdWallet;