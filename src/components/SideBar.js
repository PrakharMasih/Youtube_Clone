import React from 'react'

const SideBar = () => {
  return (
    <div className='pl-5 shadow-lg  sticky top-20 -z-10 hidden md:block  '>
      <div className='sticky w-32 top-20 flex-col ' >
        <ul className='mt-2 ml-6' >
          <li className='mb-2' >Home</li>
          <li className='mb-2'>Shorts</li>
          <li className='mb-2'>Subcriptions</li>
        </ul>
        <br />
        <h1 className='font-bold'>You</h1>
        <ul className='mt-2 ml-6'>
          <li className='mb-2'>History</li>
          <li className='mb-2'>Watch Later</li>
          <li className='mb-2'>Liked Videos</li>
        </ul>
        <br />
        <h1 className='font-bold'>Explore</h1>
        <ul className='mt-2 ml-6'>
          <li className='mb-2'>Music</li>
          <li className='mb-2'>Sports</li>
          <li className='mb-2'>Gaming</li>
          <li className='mb-2'>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar