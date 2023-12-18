import React from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Chip } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const MyProfile = () => {
    const navigate = useNavigate()
  return (
    <div>
       <div className='h-[60px] p-3 sticky top-0 bg-white flex items-center justify-between'>
            <CloseIcon onClick={(e)=>{
                navigate(-1)
                // e.preventDefault()
            }} sx={{color:'gray',cursor:"pointer"}}/>
            <EditIcon sx={{color:"darkblue"}}/>
        </div>
        <div className='flex flex-col p-4'>
        <div className='flex flex-col gap-2 items-center justify-center p-3 w-full'>
        <div className=' w-[60px] h-[60px] rounded-full bg-gray-200 flex items-center justify-center border border-gray-300'>
            {/* <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1701156585~exp=1701157185~hmac=ac68d03b1add36a89081d098324072530d782a1bd6a57a0eebb5ff7e6ae9cea8"
             className='w-full h-full rounded-full object-cover' alt="" /> */}
             <PersonAddAlt1Icon sx={{color:"gray" ,width:"30px" , height:"30px"}}/>
        </div>
        <h1 className='font-heading text-lg'>YAHKOOB P</h1>
        <p className='text-gray-600 font-semibold text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='flex flex-col items-center justify-center mt-4 rounded-md p-3 gap-3 bg-green-50'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-bold text-md '>Basic details</h2>
            <EditIcon sx={{color:"darkblue"}}/>
          </div>
          <div className='flex justify-start items-center w-full gap-3'>
            <WorkIcon sx={{color:"gray",width:20,height:20}}/>
            <p className='font-semibold text-[14px]'>Carpenter</p>
          </div>
          <div className='flex justify-start items-center w-full gap-3'>
            <PlaceIcon sx={{color:"gray",width:20,height:20}}/>
            <p className='font-semibold text-[14px]'>Perinthalmanna</p>
          </div>
          <div className='flex justify-start items-center w-full gap-3'>
            <EmailIcon sx={{color:"gray",width:20,height:20}}/>
            <p className='font-semibold text-[14px]'>yahkoobp007@gmail.com</p>
          </div>
          <div className='flex justify-start items-center w-full gap-3'>
            <PhoneIcon sx={{color:"gray",width:20,height:20}}/>
            <p className='font-semibold text-[14px]'>8943871306</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-4 rounded-md p-3 gap-3 border border-gray-200'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-bold text-md '>Personal details</h2>
            <EditIcon sx={{color:"darkblue"}}/>
          </div>
          <div className='w-full'>
            <p className=' font-semibold text-[12px] text-gray-500'>First name</p>
            <p className=' font-semibold text-[14px] '>Yahkoob</p>
          </div>
          <div className='w-full'>
            <p className=' font-semibold text-[12px] text-gray-500'>Last name</p>
            <p className=' font-semibold text-[14px]'>Pulikkal</p>
          </div>
          <div className='w-full'>
            <p className=' font-semibold text-[12px] text-gray-500'>Address</p>
            <p className=' font-semibold text-[14px]'>Pulikkal(H) , Elamkulam ,Perumpara</p>
          </div>
          
        </div>

        <div className='flex flex-col items-start justify-center mt-4 rounded-md p-3 gap-3 bg-yellow-50'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-bold text-md '>Work areas</h2>
            <AddBoxIcon sx={{color:"darkblue"}}/>
          </div>
          <div className='flex gap-3 p-3 flex-wrap'>
            <Chip label="Agricultural labour" size='' variant='outlined' sx={{color:"gray"}} onDelete={()=>{}}/>
            <Chip label="carpenter" color='primary' size='' variant='outlined' sx={{color:"gray"}} onDelete={()=>{}}/>
            <Chip label="Mason" color='primary' size='' variant='outlined' sx={{color:"gray"}} onDelete={()=>{}}/>
            <Chip label="Agricultural labour" color='primary' size='' variant='outlined' sx={{color:"gray"}} onDelete={()=>{}}/>
            <Chip label="carpenter" color='primary' size='' variant='outlined' sx={{color:"gray"}} onDelete={()=>{}}/>
            <Chip label="Mason" color='primary' size='' variant='outlined' sx={{color:"gray"}} onDelete={()=>{}}/>
          </div>
        </div>

        <div className='flex flex-col justify-center mt-4 rounded-md p-3 gap-2 border border-gray-200'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-bold text-md '>Previous works</h2>
            <h2 className='font-bold text-blue-900'>View</h2>
          </div>
          <p className='font-semibold text-[13px] text-gray-600'>See the previous works that you have completed</p>
         
        </div>
    </div>
    </div>
  )
}

export default MyProfile