import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { TextField , MenuItem ,Autocomplete ,Checkbox ,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio, CircularProgress, Backdrop, Button} from '@mui/material'
import { jobs,kerala_cities } from '../data';
import PublishIcon from '@mui/icons-material/Publish';
import { doc ,getDoc,setDoc,updateDoc,addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { db , storage } from '../firebaseConfig'
import { useUserAuthContext } from '../context/userAuthContext';
import Swal from 'sweetalert2'
import Spinner from 'react-bootstrap/Spinner';
import GridLoader from "react-spinners/GridLoader";


const PostJob = () => {
    const navigate = useNavigate()
    const {user} = useUserAuthContext()
    const [job , setJob] = useState("")
    const [loading , setLoading] = useState(false)

    const handleSubmit = async(e)=>{
    e.preventDefault()
      const data = new FormData(e.target)
      const finalData = Object.fromEntries(data.entries())
      try {
        setLoading(true)
        const docRef = await addDoc(collection(db, "jobs"), {
         ...finalData,
         job_poster:user.uid,
         isActive:true,
         time_stamp :new Date().toDateString()
        });
        // console.log(docRef._key.path.segments[1])
        setLoading(false)
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "Your Job is posted , please stay tuned to get response from laboures",
            footer: '<a href="/home">Go to job posts</a>',
            
          })
      } catch (error) {
        console.log(error)
      }
   
    }
  return (
    <>
    <div className=''>
        <h1 className="text-md">Whome did you wanted to hire</h1>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <Autocomplete
                required
                options={jobs} renderInput={(params)=> <TextField variant='standard' required  {...params} label="Job title" name="job_title" sx={{paddingBottom:2,}}></TextField>} 
                onChange={(e , value)=>{
                  setJob(e.target.outerText)
                  // console.log(district)
                  // console.log(kerala_places[district].places)
                }}></Autocomplete>

        <Autocomplete
                required
                options={kerala_cities} renderInput={(params)=> <TextField variant='standard' required  {...params} label="Job location" name="job_location" sx={{paddingBottom:2,color:"#fff"}}></TextField>} 
                onChange={(e , value)=>{
                //   setJob(e.target.outerText)
                  // console.log(district)
                  // console.log(kerala_places[district].places)
                }}></Autocomplete>

        <FormControl required>
            <FormLabel id="job_time">
                Time of work
            </FormLabel>
            <RadioGroup name="work_time" aria-label='job_time' row>
                <FormControlLabel control={<Radio size='small'/>} label="Day" value="Day"/>
                <FormControlLabel control={<Radio size='small'/>} label="Night" value="Night"/>
                <FormControlLabel control={<Radio size='small'/>} label="Both" value="Both"/>
            </RadioGroup>
        </FormControl>

        <TextField id="standard-basic" label="Daily wage" variant="standard" name='daily_wage'/>

        <textarea name="description" rows="4" cols="50" style={{border:"1px solid gray",marginTop:3,padding:2}} placeholder='Job description'>

</textarea>
<Button variant="contained" endIcon={<PublishIcon />} type='submit'>
  Post Job
</Button>
</form>
    </div>


<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 ,fontWeight:"bold",backgroundColor:"teal"}}
        open={loading}
      > <div className='flex flex-col items-center justify-center gap-4'>
        <GridLoader color='#fff'/>
        <span style={{marginLeft:10}}>Your job js posting , Please wait.....</span>
        </div>
      </Backdrop>
    </>


  )
}

export default PostJob