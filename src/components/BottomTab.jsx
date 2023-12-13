import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person'
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { Navigate, useNavigate } from 'react-router-dom';


const BottomTab = (props) => {

  // const [value , setValue] = useState(0)
  const value = props.value
  const navigate = useNavigate()
  const handleChange = (e,value)=>{
     
      if(value ===0){
         navigate("/home")
      }
      else if(value===1){
        navigate("/jobs")
      }
      else if(value===2){
        navigate("/peoples")
      }
      else if(value === 3){
        navigate("/profile")
      }
  }
  return (
  <BottomNavigation sx={{width:'100%' , position:"absolute" , bottom:0 , backgroundColor:"#f0f8ff"}} value={value} onChange={handleChange} showLabels>
     <BottomNavigationAction label="Home" icon={<HomeRoundedIcon/>}/>
     <BottomNavigationAction label="Jobs" icon={<HomeRepairServiceRoundedIcon/>}/>
     <BottomNavigationAction label="Peoples" icon={<PeopleAltRoundedIcon/>}/>
     <BottomNavigationAction label="My Profile" icon={<PersonIcon/>}/>
  </BottomNavigation>
   )
}
export default BottomTab

