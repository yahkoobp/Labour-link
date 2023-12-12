import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BottomTab from '../components/BottomTab'
import { useUserAuthContext } from '../context/userAuthContext'
import { collection , getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { Link } from 'react-router-dom'
import { BottomNavigation , BottomNavigationAction } from '@mui/material'
import SkeletonLoader from '../components/SkeletonLoader'
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';

function Home() {
  const {user , logout} = useUserAuthContext()
  const [users , setUsers] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const fetchData = async()=>{
      let list = []
      try {
        const querySnapShot = await getDocs(collection(db , "labours"));
        querySnapShot.forEach((doc)=>{
          list.push({id: doc.id ,...doc.data()})
        })
        setUsers(list)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[])
  console.log(users)
  //  const body=document.body
  //  console.log(body.classList)
  //  let lastScroll = 0
  //  window.addEventListener('scroll',()=>{
  //   console.log(window.scrollY)
  //   const currentScroll = window.scrollY
  //   if(currentScroll <=0){
  //       body.classList.remove("scroll-up")
  //   }

  //   if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
  //       body.classList.remove("scroll-up")
  //       body.classList.add("scroll-down")

  //   }

  //   if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
  //       body.classList.remove("scroll-down")
  //       body.classList.add("scroll-up")

  //   }
  //   lastScroll = currentScroll
  //  } )
  return (
    <div className=''>
        <div className='sticky z-50 top-0 w-full'>
        <Header/>
        </div>
        {
          loading?<SkeletonLoader/> :
        users.map((user)=>(
          <Fade in={true} timeout={2500}>
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
          <button className='px-4 py-2 bg-gray-900 shadow-lg font-bold text-white rounded-sm border-none hover:bg-gray-700'>View</button>
          </Link>
          </div>
          </Fade>
          ))
}
          <div className='w-full fixed bottom-0 left-0'>
          <BottomTab value={0}/>
          </div>

          
    </div>
  )
}

export default Home