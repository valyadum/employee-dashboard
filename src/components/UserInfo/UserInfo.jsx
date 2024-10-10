import React from 'react';
import avatar from '../../avat.png';
import { Settings } from 'lucide-react';
import style from './UserInfo.module.scss';


function UserInfo() {
  return (
    <div className={style.userCard}>
      <div className={style.userInfo}>
        <img src={avatar} alt="user avatar"  width={40} height={40} />
        <div>
          <p>Welcome back,</p>
          <p className={style.name}>Drax</p>
        </div>
      </div>
      <button>
        <Settings color="#757D8A" strokeWidth={1.2} />
      </button>
    </div>
  );
}

export default UserInfo