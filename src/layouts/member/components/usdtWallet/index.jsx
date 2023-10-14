/* eslint-disable */
import React, { useState } from 'react';
import MemberData from '../../data/memberData';
import 'react-datepicker/dist/react-datepicker.css';
import CurrencyWallet from '../(layout)/currencyWallet';

const UsdtWallet = () => {
  return <CurrencyWallet currency={MemberData.UsdtInfo} />
}

export default UsdtWallet;