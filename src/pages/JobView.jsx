import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const JobView = () => {
    const navigate= useNavigate()
  return (
    <div className='flex flex-col relative'>
        <div className='h-[55px] shadow-md p-3 sticky top-0 bg-white'>
            <CloseIcon onClick={(e)=>{
                navigate(-1)
                // e.preventDefault()
            }} sx={{color:'gray',cursor:"pointer"}}/>
        </div>
        <div className='flex flex-col gap-5 mt-4 p-5 shadow-sm'>
        <div className='flex gap-2'>
                <WorkIcon sx={{color:"teal"}}/>
            <h1 className='font-bold text-lg'>Carpenter</h1>
            </div>
          <div className='flex items-center gap-2'>
            <PlaceIcon sx={{color:"green"}}/>
            <i className='font-semibold text-[14px]'>Perinthalmanna</i>
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
                <p className='fonr-semibold text-gray-500 text-[14px]'>Posted on 10/10/2023</p>
                <p className='font-bold text-[12px] text-green-900'>Active now</p>
            </div>
    </div>

    <div className='px-5 py-3'>
        <div className='flex flex-col'>
       <p className='font-semibold'>About Labourer</p>
       <div className='mt-1 px-3'>
            <h1 className='font-semibold text-sm'>Menakkuth Suhail</h1>
            <div className='text-sm font-semibold text-gray-500'>
            <p>Menakkuth (H)</p>
            <p>Mob :123456789</p>
            </div>
        </div>
        <div className='flex gap-2 mt-6 bg-green-400 rounded-md p-2 items-center justify-center cursor-pointer '>
              <VisibilityIcon sx={{color:"white"}}/>
              <p className='font-semibold cursor-pointer text-white'>View Profile</p>
            </div>
    </div>
    </div>
    <div className='px-5 py-3 shadow-sm'>
        <div className='flex flex-col'>
       <p className='font-semibold'>About the job</p>
       <i className='font-semibold text-[13px] px-3 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est veritatis facere quasi quod facilis optio? Illum, 
        tenetur sequi praesentium quo recusandae commodi excepturi provident. In numquam alias doloribus vero praesentium.</i>
    </div>
    </div>

    <div className='px-5 py-3 shadow-sm'>
        <div className='flex flex-col'>
       <p className='font-semibold'>About the job</p>
       <i className='font-semibold text-[13px] px-3 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est veritatis facere quasi quod facilis optio? Illum, 
        tenetur sequi praesentium quo recusandae commodi excepturi provident. In numquam alias doloribus vero praesentium.</i>
    </div>
    </div>

    <div className='px-5 flex items-start justify-center gap-2 sticky bottom-0 left-0'>
        <button className='px-4 py-3 bg-blue-400 text-white font-semibold rounded-md w-full'>Show interest</button>
    </div>
     
    </div>
  )
}

export default JobView