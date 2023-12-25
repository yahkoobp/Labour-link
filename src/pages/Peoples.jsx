import React, { useEffect, useState } from 'react'
import BottomTab from '../components/BottomTab'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleCard from '../components/PeopleCard';
import Header from '../components/Header';
import { useUserAuthContext } from '../context/userAuthContext';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


const Peoples = () => {

  const {user , logout} = useUserAuthContext()
  const [users , setUsers] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const fetchData = async()=>{
      let list = []
      try {
        const querySnapShot = await getDocs(collection(db , "users"));
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
  },[users])
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='sticky z-50 top-0 w-full'>
        <Header/>
        </div>
       <div className='flex items-center justify-center px-6 py-2 border border-gray-100 shadow-sm w-full'>
        <p className=' font-semibold text-md'>Peoples from your locality , search for more peoples</p>
       </div>
        <div className='flex flex-wrap gap-3 px-2 py-2 items-center justify-center bg-gray-50'>
         {
          users.map((user)=>(
            <PeopleCard user={user}/>
          ))
         }
         </div>

        <div className='w-full fixed bottom-0 left-0'>
          <BottomTab value={2}/>
          </div>
    </div>
  )
}

export default Peoples