import React, { useState } from 'react'
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import VisibilityIcon from '@mui/icons-material/Visibility';


const JobCard = () => {
    
  return (
    <div className=' relative'>
        <div className='flex flex-col shadow-xl mt-4 rounded-md p-6 gap-4'>
            <div className='flex gap-2'>
                <WorkIcon sx={{color:"teal"}}/>
            <h1 className='font-bold text-lg'>Carpenter</h1>
            </div>
            <div className='flex gap-2'>
                <PlaceIcon sx={{color:"green"}}/>
            <h2 className='font-semibold text-sm'>Perinthalmanna</h2>
            </div>

           <div className='flex gap-2'>
            <div className='bg-green-100 w-[150px] px-2 py-1 rounded-md'>
               <h3 className='text-green-800 font-bold text-[12px]'>Rs 900 / day</h3>
            </div>
            <div className='bg-gray-200 w-[150px] px-2 py-1 rounded-md'>
               <h3 className='text-green-800 font-bold text-[12px]'>Day time</h3>
            </div>
            </div>

            <div className='flex gap-2 justify-between items-center'>
                <p className='fonr-semibold text-gray-500'>Posted on 10/10/2023</p>
                <p className='font-bold text-[12px] text-green-900'>Active now</p>
            </div>

            <div className='flex gap-2 mt-6'>
              <VisibilityIcon/>
              <p className='font-semibold'>View</p>
            </div>

        </div>
    </div>
  )
}

export default JobCard