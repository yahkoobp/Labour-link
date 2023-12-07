import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { doc ,getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { useUserAuthContext } from '../context/userAuthContext'

const Header = () => {
  const {user} = useUserAuthContext()
  const[userDetails , setUserDetails] = useState({})
  useEffect(()=>{

    const fetchData = async()=>{
    const docRef = doc(db, "labours", user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setUserDetails(docSnap.data())
      console.log(userDetails)
      // console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }}
    fetchData()
  },[])
  return (
    <div className='relative'>
         <nav className='w-full flex items-center justify-between p-2 bg-[#f0f8ff] '>
          <Link to='/profile'>
          <div className='rounded-full w-[45px] h-[45px] cursor-pointer flex gap-5'>
          <img src={userDetails.image?userDetails.image :"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1701156585~exp=1701157185~hmac=ac68d03b1add36a89081d098324072530d782a1bd6a57a0eebb5ff7e6ae9cea8"} className='w-full h-full rounded-full object-cover'/>
            {/* <h2>{userDetails.firstname}</h2> */}
          </div>
          </Link>
          <div className='flex items-center justify-center'>
            <div className='relative'>
          {/* <svg className="absolute top-1/2 left-0 translate-x-1/2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> */}
</div>
          <input type='text' className='bg-gray-200 px-3 py-1 text-sm focus:outline-none rounded-md focus:w-[250px] duration-300' placeholder='search'></input>
          </div>
          <div className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#002D74" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
<div className='rounded-full w-[17px] h-[17px] bg-green-700 absolute bottom-4 text-center text-white text-bold text-[12px]'>7</div>
</div>
        </nav>
    </div>
  )
}
export default Header