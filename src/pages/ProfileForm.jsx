import React, { useState } from 'react'
import '../styles/input.css'
import { Link, useNavigate } from 'react-router-dom'
import {doc,serverTimestamp,setDoc} from "firebase/firestore"
import { db } from '../firebaseConfig'
import { useUserAuthContext } from '../context/userAuthContext'
import { TextField , MenuItem ,Autocomplete ,Checkbox ,} from '@mui/material'
import { locations } from '../data'
import { kerala_cities ,jobs } from '../data'



const ProfileForm = () => {
    // const [data , setData] = useState({})
    const {user} = useUserAuthContext()
    // let cities = []
    const [work_areas , setWorkAreas] = useState([])
    const navigate = useNavigate()
    // const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    // const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const handleSubmit = async (e)=>{
      e.preventDefault()
      const data = new FormData(e.target)
      const finalData = Object.fromEntries(data.entries())
      console.log({...finalData ,work_areas:work_areas})
      try {
        const res = await setDoc(doc(db ,"users",user.uid),{
            ...finalData,
            isLabour:true,
            work_areas:work_areas,
            timeStamp : serverTimestamp()
        })

        await setDoc(doc(db ,"labours",user.uid),{
          ...finalData,
          work_areas:work_areas,
          timeStamp : serverTimestamp()
      })  
        navigate("/home")

      } catch (error) {
        console.log(error)
      }
    }
    // console.log(locations.Kerala[0].city)
    // locations.Kerala.map(element=>{
    //     cities.push(element.city)
    //  })
    //  console.log(cities)
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
                <input type="text" name="bio" required 
                />
                <span>Bio</span>
                </div>

                <div className='inputBox'>
                <input type="number" name="phonenumber" required />
                <span>Phone Number</span>
                </div>

                <div className='inputBox'>
                <input type="text" name="email" value={user.email} required />
                <span>Email Id</span>
                </div>

                <div className='inputBox'>
                <input type="text" name="address" required 
                />
                <span>Address</span>
                </div>

                <div className='inputBox'>
                <input type="text" name="pincode" required />
                <span>Pin Code</span>
                </div>

                <div className=''>
                <Autocomplete 
                options={kerala_cities} renderInput={(params)=> <TextField {...params} label="Select Location" name="location"></TextField>} 
                ></Autocomplete>
                </div>

                <div className=''>
                <Autocomplete 
                width="full"
      multiple
      id="checkboxes-tags-demo"
      options={jobs}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li name="work_areas" {...props}>
          <Checkbox
            style={{ marginRight: 8}}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: "100%" ,fontSize:"12px" }}
      renderInput={(params) => (
        <TextField {...params} label="Select Work Areas" placeholder="Work Areas" />
      )}
      onChange={(e,value)=>{
         
         setWorkAreas(value)
      }}
    />

<div className='inputBox mt-6'>
                <input type="text" name="expected_daily_wage" required 
                />
                <span>Expected Daily Wage in INR</span>
                </div>
                </div>
                <div className='sticky bottom-0 left-0 w-full h-[50px] bg-gray-100 z-50 flex items-center justify-end p-4 border-t-2'>
             <button type="submit"className='bg-gray-900 rounded-md py-2 px-3 text-white hover:scale-102 duration-300 text-center cursor-pointer'>Sumbit</button>
        </div>
            </form>
        </div>

        
    </div>
  )
}

export default ProfileForm