import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';

const PeopleCard = () => {
  return (
    <div className='w-[155px] h-[240px] rounded-lg border border-gray-100 shadow-md'>
        <div className='flex flex-col items-center justify-center relative gap-2'>
        <div className='bg-gray-900 w-full h-[50px] rounded-t-lg'></div>
        <div className=' w-[70px] h-[70px] rounded-full absolute top-4 shadow-2xl'>
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1701156585~exp=1701157185~hmac=ac68d03b1add36a89081d098324072530d782a1bd6a57a0eebb5ff7e6ae9cea8" className='w-full h-full rounded-full object-cover' alt="" />
        </div>
        <h2 className='mt-10 font-semibold'>Yahkoob P</h2>
        <p className='text-[12px] font-semibold text-gray-500'>Carpenter | Mason ddd</p>
        
        <div className='flex gap-1'>
                <PlaceIcon sx={{color:"gray"}}/>
            <h2 className='font-semibold text-[12px] text-gray-500'>Perinthalmanna</h2>
            </div>
        <button className='px-10 py-1 border border-gray-200 bg-green-200 font-bold text-green-800 rounded-md hover:scale-90 duration-500'>View</button>
       
    </div>
    </div>
  )
}

export default PeopleCard