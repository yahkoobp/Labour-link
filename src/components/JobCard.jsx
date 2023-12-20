import React, { useState } from 'react'
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';


const JobCard = (props) => {
  const job = props.job
    const j_id = props.job.job_id
  return (
    <div className=' bg-gray-50 rounded-md'>
      <Link to={`/jobview/${j_id}`}>
        <div className='flex flex-col shadow-sm mt-2 rounded-md p-6 gap-3'>
            <div className='flex gap-2'>
                <WorkIcon sx={{color:"black",width:20,height:20}}/>
            <h1 className='font-semibold text-md'>{job.job_title}</h1>
            </div>
            <div className='flex gap-2'>
                <PlaceIcon sx={{color:"black",width:20,height:20}}/>
            <h2 className='font-semibold text-sm text-gray-500'>{job.job_location}</h2>
            </div>

           <div className='flex gap-2'>
            <div className='bg-green-100 w-[150px] px-2 py-1 rounded-md'>
               <h3 className='text-green-800 font-bold text-[12px]'>Rs {job.daily_wage} / day</h3>
            </div>
            <div className='bg-gray-200 w-[150px] px-2 py-1 rounded-md'>
               <h3 className='text-green-800 font-bold text-[12px]'>{job.work_time} time</h3>
            </div>
            </div>

            <div className='flex gap-2 justify-between items-center'>
                <p className='fonr-semibold text-gray-500 text-[13px]'>Posted on {job.time_stamp}</p>
                <p className='font-bold text-[12px] text-green-900'>Active now</p>
            </div>

        </div>
        </Link>
    </div>
  )
}

export default JobCard