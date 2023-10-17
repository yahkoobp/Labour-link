import React, { useState } from 'react'
import Header from '../components/Header'
import ProfileModel from '../components/ProfileModel'

const Profile = () => {
    const [modelVisible , setModelVisible] = useState(false)
    const modelHandler = ()=>{
        setModelVisible(true)
    }
    const hideModel =()=>{
        setModelVisible(false)
    }
  return (
    <>
    <div className='h-screen'>
<div className='shadow-md'>
        <div className='w-full h-[70px] bg-[#002D74] relative'>
            <div className='ml-3 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
</div>
              <div onClick={modelHandler} className='rounded-full w-[100px] h-[100px] absolute top-6 ml-6 border-4 border-white cursor-pointer'>
              <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
              <div className='bg-white rounded-full absolute top-[75px] left-14 border-2 border-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="blue" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
              </div>
              </div>
              <div className='h-[35px] w-[35px] bg-white absolute right-2 bottom-2 rounded-full flex items-center justify-center cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#002D74" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
              </div>
             
        </div>

        <div className='mt-14 px-6 py-2'>
            <h1 className='font-semibold text-xl'>Muhammed Suhail M</h1>
            <p className='font-semibold mb-2'>Carpenter | Plumper | Electritian</p>
            <div className='text-sm font-semibold'>
            <p>Menakkuth (H) , Elamkulam ,Kunnakkavu(P.O) , Malappuram</p>
            <p>PIN : 679340</p>
            <p>Mob : +91 8943871306</p>
            </div>
            <div className='text-bold bg-[#002D74] h-[40px] w-[200px] rounded-full px-5 text-white flex items-center justify-center mt-4 mb-3'>Open to work</div>
        </div>
        </div>

       <div className='flex flex-col shadow-md'>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-xl p-2 flex-1 ml-5' >Works</h2>
          <div className='px-10 flex gap-6'>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="blue" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#002D74" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
</div>
 </div>
<div className='font-semibold text-md px-6 py-2'>
<p> Household electrical works</p>
<p>Location : Perinthalmanna</p>
<p>Sep-2023 - oct-2023</p>
<button className='bg-[#002D74] px-6 text-white py-2 mt-4 rounded-full cursor-pointer hover:bg-blue-900'>View details</button>
</div>

<div className='font-semibold text-md px-5 py-3'>
<p> Household plumbing works</p>
<p>Location : Perinthalmanna</p>
<p>Sep-2023 - oct-2023</p>
<button className='bg-[#002D74] px-6 text-white py-2 mt-4 rounded-full cursor-pointer hover:bg-blue-900'>View details</button>
</div>
    </div>
    {modelVisible &&
    <div onClick={hideModel} className='absolute bottom-0 top-0 w-full h-screen transition ease-in-out duration-500'>
        <div className='p-3 h-[100px] absolute bottom-0 bg-white w-full text-center rounded-tl-lg rounded-tr-lg shadow-2xl border-2 border-gray'>
            <p className='font-bold absolute bottom-0'>Change profile photo</p>
            </div>
    </div>
}
    </div>

    

    </>
  )
}

export default Profile