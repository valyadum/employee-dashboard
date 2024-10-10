import React from 'react'
import ArrowDown from 'svg/ArrowDown';
import style from './UserBudget.module.scss'
import ArrowUp from 'svg/ArrowUp';

function UserBudget() {
  return (
    <div className={style.container}>
      <div className={style.infoTitle}>
        <h4>Employee</h4>
        <p>18 results found</p>
      </div>
      <div>
        <ul className={style.list}>
          <li className={style.card}>
            <div className={style.title}>
              <p>Total Budget</p>
              <ArrowDown fill="red" />
            </div>
            <p className={style.money}>$85,125.00</p>
          </li>
          <li className={`${style.card} ${style.active}`}>
            <div className={style.title}>
              <p>Monthly Budget</p>
              <ArrowDown />
            </div>
            <p className={style.money}>$85,125.00</p>
          </li>
          <li className={style.card}>
            <div className={style.title}>
              <p>Weekly Budget</p>
              <ArrowUp fill="#44C5E2" />
            </div>
            <p className={style.money}>$85,125.00</p>
          </li>
          <li className={style.card}>
            <div className={style.title}>
              <p>Todays Budger</p>
              <ArrowUp fill="#44C5E2" />
            </div>
            <p className={style.money}>$85,125.00</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserBudget