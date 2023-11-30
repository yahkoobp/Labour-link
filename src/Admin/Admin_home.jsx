import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BottomTab from '../components/BottomTab'
import { useUserAuthContext } from '../context/userAuthContext'
import { collection , getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { Link } from 'react-router-dom'

function Home() {
  const {user , logout} = useUserAuthContext()
  const [users , setUsers] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      let list = []
      try {
        const querySnapShot = await getDocs(collection(db , "users"));
        querySnapShot.forEach((doc)=>{
          list.push({id: doc.id ,...doc.data()})
        })
        setUsers(list)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[user])
  console.log(users)
 
  return (
    <div className=''>
        {
          users.map((user)=>(
             
        <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
        <img src={user.image?user.image :"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1701156585~exp=1701157185~hmac=ac68d03b1add36a89081d098324072530d782a1bd6a57a0eebb5ff7e6ae9cea8"} className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-semibold text-md'>{user.firstname}</h2>
            <p className='text-sm max-w-[130px]'>{user.bio}</p>
          </div>
          </div>
          <Link to={`/userProfile/${user.id}`}>
          <button className='px-4 py-2 bg-[#2f5ca9] shadow-lg font-bold text-white rounded-sm border-none hover:bg-[#5784d3]'>View</button>
          </Link>
          </div>
          ))
}

         
         <div className='fixed top-0 left-0 z-50 w-full transition-all ease-in-out duration-300'>
          <BottomTab/>
          </div>

          
    </div>
  )
}

export default Home