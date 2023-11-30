import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";

const BottomTab = () => {
  return (
    <div>
            <footer>
                <nav className='w-full h-[50px] fixed left-0 bg-white border border-gray-100 bottom-0 z-50  flex items-center justify-between p-6 '>

   <div className='flex flex-col items-center justify-center'>
   <AiFillHome style={{fontSize:"20px"}}/>
   <span className='text-sm'>Profile</span>
   </div>

   <div className='flex flex-col items-center justify-center'>
   <FaUser style={{fontSize:"20px"}}/>
   <span className='text-sm'>Home</span>
   </div>

   <div className='flex flex-col items-center justify-center'>
   <FaBriefcase style={{fontSize:"20px"}}/>
   <span className='text-sm'>Jobs</span>
   </div>

   <div className='flex flex-col items-center justify-center'>
   <FaUser style={{fontSize:"20px"}}/>
   <span className='text-sm'>Home</span>
   </div>
                </nav>
            </footer>
        </div>
  )
}

export default BottomTab

//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