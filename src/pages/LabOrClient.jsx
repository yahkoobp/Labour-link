import React from 'react'
import {Link ,NavLink, useNavigate} from 'react-router-dom'
import { useUserAuthContext } from '../context/userAuthContext'
import {doc,serverTimestamp,setDoc} from "firebase/firestore"
import { db } from '../firebaseConfig'

function LabOrClient() {
    const {user} = useUserAuthContext()
    const navigate = useNavigate()
    
  return (
    <div className='bg-white h-screen tracking-wider w-full '>
       <div className='ml-5 w-20 py-5 text-blue-800 font-bold text-lg lg:text-2xl'>
                    <a href="#home"><span className='text-[#002D74]'>Labour</span>Link</a>
                   </div>
        <div className='w-full flex items-center justify-center h-[250px] lg:h-[500px] rounded-3xl mt-0'>
          <img className="h-[250px] w-[250px] lg:h-[500px] lg:w-[500px] object-fit rounded 2xl shadow-sm" src="https://img.freepik.com/premium-vector/worker-holds-hammer_118167-10317.jpg?w=740" />
        </div>
        {/* <div className='mt-5 p-4'>
        <p className=' text-[#002D74] font-semibold font-mono text-md lg:text-lg text-center'>Hello friend! , Register with us as a Labour</p>
        </div> */}
        <div className='flex flex-col items-center justify-center gap-5 mt-6'>
         <Link to='/profile-form'> <button className='p-3 w-[250px] bg-[#002D74] text-white rounded-md font-bold shadow-lg hover:bg-blue-800 ease-in duration-200'>Register as a Labour</button></Link>
          <Link to="/others-form"><button className='p-3 w-[250px] bg-[#002D74] text-white rounded-md font-bold shadow-lg hover:bg-blue-800 ease-in duration-200'>Skip for now</button></Link>
        </div>
        <div className='flex flex-col items-center justify-center mt-20'>
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

export default LabOrClient