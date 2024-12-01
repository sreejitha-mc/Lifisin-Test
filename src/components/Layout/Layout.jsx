import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: 'start', position: 'absolute', width: "100%", zIndex: "-1" }}>
        {window.innerWidth > 1060 && <SideBar />}
        <Header />
      </div>
      <div style={{ padding: `100px  0 0 ${window.innerWidth < 1060 ? '20px': '280px'}` }}>
        {children}
      </div>
    </>
  )
}

export default Layout
