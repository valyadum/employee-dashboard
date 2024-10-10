import AddStuff from 'components/AddStaff/AddStuff';
import SearchInput from 'components/SearchInput/SearchInput';
import React from 'react';
import style from './DashboardHeader.module.scss';

function DashboardHeader() {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <h2>Data Table</h2>
        <div className={style.group}>
          <SearchInput />
          <AddStuff />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
