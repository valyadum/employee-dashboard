import {
  Calendar,
  Copyright,
  FileText,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Search,
  Table,
} from 'lucide-react';
import React from 'react';

import style from './SidebarMenu.module.scss';

function SidebarMenu() {
  return (
    <div className="menu">
      <ul className={style.menu}>
        <li>
          <a href="/" className={style.item}>
            <div className={style.itemName}>
              <Search color="#757D8A" width={16} height={16} />
              <p>Search</p>{' '}
            </div>
            <Menu color="#757D8A" />
          </a>
        </li>
        <li>
          <a href="/" className={style.item}>
            <div className={style.itemName}>
              <LayoutDashboard color="#757D8A" width={16} height={16} />
              <p>Search</p>
            </div>
            <Menu color="#757D8A" />
          </a>
        </li>
        <li>
          <a href="/" className={style.item}>
            <div className={style.itemName}>
              <Table color="#757D8A" width={16} height={16} />
              <p>Search</p>
            </div>
            <Menu color="#757D8A" />
          </a>
        </li>
        <li>
          <a href="/" className={style.item}>
            <div className={style.itemName}>
              <FileText color="#757D8A" width={16} height={16} />
              <p>Search</p>
            </div>
            <Menu color="#757D8A" />
          </a>
        </li>
        <li>
          <a href="/" className={style.item}>
            <div className={style.itemName}>
              <Calendar color="#757D8A" width={16} height={16} />
              <p>Search</p>
            </div>
            <Menu color="#757D8A" />
          </a>
        </li>
        <li>
          <a href="/" className={style.item}>
            <div className={style.itemName}>
              <MessageCircle color="#757D8A" width={16} height={16} />
              <p>Search</p>
            </div>
            <Menu color="#757D8A" />
          </a>
        </li>
        <li>
          <a href="/" className={style.item}>
            <div className={style.itemName}>
              <Copyright color="#757D8A" width={16} height={16} />
              <p>Search</p>
            </div>
            <Menu color="#757D8A" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMenu;
