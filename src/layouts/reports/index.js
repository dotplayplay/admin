import React from 'react';
import GameReport from 'layouts/gameReport/GameReport';
import DailyReport from 'layouts/dailyReport/DailyReport';
import GgrReport from 'layouts/ggrReport';

const Report = () => {
  return (
    <div>
      <GameReport />
      <DailyReport />
      <GgrReport />
    </div>
  );
};

export default Report;
