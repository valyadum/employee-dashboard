import SidebarFooter from 'components/SidebarFooter/SidebarFooter'
import SidebarMenu from 'components/SidebarMenu/SidebarMenu'
import UserInfo from 'components/UserInfo/UserInfo'
import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div>
      <UserInfo/>
        <SidebarMenu />
      </div>
      <SidebarFooter/>
    </div>
  )
}

export default Sidebar