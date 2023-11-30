import React, { useState } from 'react'
import '../styles/input.css'
import { Link, useNavigate } from 'react-router-dom'
import {doc,serverTimestamp,setDoc} from "firebase/firestore"
import { db } from '../firebaseConfig'
import { useUserAuthContext } from '../context/userAuthContext'

const OthersForm = () => {
    // const [data , setData] = useState({})
    const {user} = useUserAuthContext()
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
      e.preventDefault()
      const data = new FormData(e.target)
      const finalData = Object.fromEntries(data.entries())
      try {
        const res = await setDoc(doc(db ,"users",user.uid),{
            ...finalData,
            isLabour:false,
            timeStamp : serverTimestamp()
        })

            await setDoc(doc(db ,"others",user.uid),{
            ...finalData,
            timeStamp : serverTimestamp()
        })
        navigate("/home")

      } catch (error) {
        console.log(error)
      }
    }
  return (
    
    <div className='w-full h-[100vh] p-6 relative'>
        <div className="">
            <p className='para'>Let's start with filling in the basic details about yourself </p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-6 text-sm lg:text-md'>
                <div className='inputBox'>
                <input type="text" name="firstname" required="required" />
                <span>First Name</span>
                </div>

                <div className='inputBox'>
                <input type="text" name="lastname" required 
                />
                <span>Last Name</span>
                </div>

                <div className='inputBox'>
                <input type="number" name="phonenumber" required />
                <span>Phone Number</span>
                </div>

                <div className='inputBox'>
                <input type="text" name="email" required />
                <span>Email Id</span>
                </div>

                <div className='inputBox'>
                <select name="location">
                    <option value="">Current Location</option>
                    <option>Perinthalmanna</option>
                    <option>Pattambi</option>
                    <option>Pulamanthole</option>
                    <option>Kulathore</option>
                </select>
                </div>         
                <div className=' w-full h-[50px] bg-gray-50 flex items-center justify-end p-6 border-t-2'>
             <button type="submit"className='bg-[#002D74] rounded-md py-2 px-3 text-white hover:scale-102 duration-300 text-center cursor-pointer'>Sumbit</button>
        </div>
            </form>
        </div>

        
    </div>
  )
}

export default OthersForm