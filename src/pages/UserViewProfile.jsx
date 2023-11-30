import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProfileModel from '../components/ProfileModel'
import { useNavigate } from 'react-router-dom'
import { doc ,getDoc,setDoc } from 'firebase/firestore'
import { db , storage } from '../firebaseConfig'
import { useUserAuthContext } from '../context/userAuthContext'
import {ref ,uploadBytesResumable ,getDownloadURL } from 'firebase/storage'
import { useLocation } from 'react-router-dom'


const UserProfileview = () => {
    const [userDetails , setUserDetails] = useState({})
    const [modelVisible , setModelVisible] = useState(false)
    const [file , setFile] = useState("")
    const location = useLocation()
    const user_id = location.pathname.split("/")[2]

    const navigate = useNavigate()

    const goBack =()=>{
        navigate(-1)
    }

    useEffect(()=>{
      const fetchData = async()=>{
        const docRef = doc(db, "users", user_id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setUserDetails(docSnap.data())
          // console.log(userDetails)
          // console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }}
        fetchData()
    },[user_id ,file])
  return (
    <div className='h-screen relative'>
<div className='shadow-md'>
        <div className='w-full h-[70px] bg-[#002D74]'>
            <div onClick={goBack} className='ml-3 cursor-pointer inline'>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
</div>
              <div className='rounded-full w-[100px] h-[100px] absolute top-6 ml-6 border-4 border-white cursor-pointer'>  
              <img src={userDetails.image?userDetails.image :"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1701156585~exp=1701157185~hmac=ac68d03b1add36a89081d098324072530d782a1bd6a57a0eebb5ff7e6ae9cea8"} className='w-full h-full rounded-full object-cover'/>
              </div>
              
             
        </div>

        <div className='mt-14 px-6 py-2'>
            <h1 className='font-semibold text-xl'>{userDetails.firstname}</h1>
            <p className='font-semibold mb-2'>{userDetails.bio}</p>
            <div className='text-sm font-semibold'>
            <p>{userDetails.address}</p>
            <p>Pin :{userDetails.pincode}</p>
            <p>Mob :{userDetails.phonenumber}</p>
            </div>
            <div className='flex gap-6 items-center'>
            <div className='text-bold bg-[#002D74] h-[40px] w-[200px] rounded-full px-5 text-white flex items-center justify-center mt-4 mb-3'>Open to work</div>
            <button className='text-bold bg-[#002D74] h-[40px] w-[200px] rounded-full px-5 text-white flex items-center justify-center mt-4 mb-3 hover:bg-[#4267a1]'>Message</button>
            </div>
        </div>
        </div>
{/* 
        <div id="model" >
          <div  className='absolute top-0 left-0 h-full w-full bg-black opacity-5'>
             <div className='absolute p-2 h-[300px] bg-white w-full bottom-0 left-0'>
                 <h2 className='font-semibold text-black'>Update profile picture</h2>
                 fdvfdhjgfhjdgfhjgdhjfgdhjgfhjdgfhjgdhjfgdhjgjdhg
             </div>
        </div>
        </div> */}
    </div>
  )
}

export default UserProfileview

//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
