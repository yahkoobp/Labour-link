import React, { useState } from 'react'
import BottomTab from '../components/BottomTab'
import Header from '../components/Header'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabNav from '../components/TabNav';


const Jobs = () => {
    const [value , setValue] = useState(0)
  return (
    <div className='relative'>
         {/* <div className='sticky z-50 top-0 w-full'>
        <Header/>
        </div> */}

          <div className=''>
          <TabNav />
          </div>

         <div className='w-full fixed bottom-0 left-0'>
          <BottomTab value={1}/>
          </div>
    </div>
  )
}

export default Jobs