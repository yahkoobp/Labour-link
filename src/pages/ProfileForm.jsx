import React, { useState } from 'react'
import '../styles/input.css'
import { Link, useNavigate } from 'react-router-dom'
import {doc,serverTimestamp,setDoc} from "firebase/firestore"
import { db } from '../firebaseConfig'
import { useUserAuthContext } from '../context/userAuthContext'
import { TextField , MenuItem ,Autocomplete ,Checkbox ,} from '@mui/material'
import { locations } from '../data'
import { kerala_cities ,jobs ,kerala_places} from '../data'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const ProfileForm = () => {
    // const [data , setData] = useState({})
    const {user} = useUserAuthContext()
    const [loading ,setLoading] = useState(false)
    const [district , setDistrict] = useState("")
    // let cities = []
    const [work_areas , setWorkAreas] = useState([])
    const navigate = useNavigate()
    const districts = Object.keys(kerala_places)
    const default_option =["Please select a district"]
    // const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    // const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const handleSubmit = async (e)=>{
      e.preventDefault()
      setLoading(true)
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
        setLoading(false)
        navigate("/home")

      } catch (error) {
        setLoading(false)
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

                <div className=''>
                <Autocomplete
                required
                options={districts} renderInput={(params)=> <TextField required  {...params} label="Select district" name="district"></TextField>} 
                onChange={(e , value)=>{
                  setDistrict(e.target.outerText)
                  // console.log(district)
                  // console.log(kerala_places[district].places)
                }}></Autocomplete>
                </div>

                <div className=''>
                <Autocomplete
                required
                options={kerala_places[district]?kerala_places[district]?.places:default_option} renderInput={(params)=> <TextField required {...params} label="Select city" name="city"></TextField>} 
                ></Autocomplete>
                </div>

                <div className=''>
                <Autocomplete
                required
                width="full"
      multiple
      id="checkboxes-tags-demo"
      options={jobs}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li name="work_areas" {...props}>
          <Checkbox
            required
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

        <div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:"#001079",fontWeight:"bold"}}
        open={loading}
      > <div className='flex flex-col items-center justify-center gap-4'>
        <CircularProgress color="inherit"/>
        <span style={{marginLeft:10}}>Your job js posting , Please wait.....</span>
        </div>
      </Backdrop>
    </div>
    </div>
  )
}

export default ProfileForm