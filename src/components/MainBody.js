import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
// import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import IconSideBar from './IconSideBar'
import { Outlet, useLocation } from 'react-router-dom'

const MainBody = () => {
  
  const page1 = useLocation();
  const [page, setPage] = useState(true);
  
  useEffect(() => {
    if (page1.pathname === '/watch') {
      setPage(false);
    } else {
      setPage(true)
    }
  }, [page1])

  const toggle = (useSelector((store) => store.app.isMenuOpen));

  return (
    <div className='flex '>
      {
        page ?
          toggle ? <SideBar /> : <IconSideBar />
          :
          toggle ? <SideBar /> : <></>
      }

      <Outlet />

    </div>
  )
}

export default MainBody