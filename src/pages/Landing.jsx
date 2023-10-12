import React from 'react'
import {Link ,NavLink} from 'react-router-dom'
function Landing() {
    
  return (
    <div className='bg-white h-screen tracking-wider w-full '>
       <div className='ml-5 w-20 py-5 text-blue-800 font-bold text-lg lg:text-2xl'>
                    <a href="#home"><span className='text-[#002D74]'>Labour</span>Link</a>
                   </div>
        <div className='w-full flex items-center justify-center h-[250px] lg:h-[500px] rounded-3xl mt-0'>
          <img className="h-[250px] w-[250px] lg:h-[500px] lg:w-[500px] object-fit rounded 2xl shadow-sm" src="https://img.freepik.com/free-vector/prioritise-concept-illustration_114360-5595.jpg?size=626&ext=jpg&ga=GA1.2.1163660258.1697017680&semt=ais" alt="ggdfgdfgdgdfgfg" />
        </div>
        <div className='mt-5 p-4'>
        <p className=' text-[#002D74] font-semibold font-mono text-md lg:text-lg text-center'>Hello friend! , Lets get start working together</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 mt-6'>
         <Link to='/login'> <button className='p-3 w-[250px] bg-[#002D74] text-white rounded-3xl font-bold shadow-lg hover:bg-blue-800 ease-in duration-200'>Login</button></Link>
          <NavLink to='/register'><button className='p-3 w-[250px] bg-[#002D74] text-white rounded-3xl font-bold shadow-lg hover:bg-blue-800 ease-in duration-200'>Sign Up</button></NavLink>
        </div>
        <div className='flex flex-col items-center justify-center mt-9'>
          <p className='font-bold font-mono'>Follow us on</p>
          <div className='flex gap-2'>
          <div className='rounded-full w-[25px] h-[25px] bg-green-700'></div>
          <div className='rounded-full w-[25px] h-[25px] bg-red-600'></div>
          <div className='rounded-full w-[25px] h-[25px] bg-blue-950'></div>
          </div>
        </div>
      

    </div>
  )
}

export default Landing