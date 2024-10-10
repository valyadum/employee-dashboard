import { Anchor, Power } from 'lucide-react'
import React from 'react';
import style from './SidebarFooter.module.scss';

function SidebarFooter() {
  return (
    <div className={style.barBtn}>
      <button>
        <Anchor color="#757D8A" width={16} height={16} /> Support
      </button>
      <button>
        <Power color="#757D8A" width={16} height={16} />
        Sign Out
      </button>
    </div>
  );
}

export default SidebarFooter