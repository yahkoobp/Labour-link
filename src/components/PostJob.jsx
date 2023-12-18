import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { TextField , MenuItem ,Autocomplete ,Checkbox ,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio, CircularProgress, Backdrop, Button} from '@mui/material'
import { jobs,kerala_cities } from '../data';
import PublishIcon from '@mui/icons-material/Publish';


const PostJob = () => {
    const navigate = useNavigate()
    const [job , setJob] = useState("")
    const handleSubmit = (e)=>{
    e.preventDefault()
      const data = new FormData(e.target)
      const finalData = Object.fromEntries(data.entries())
      console.log(finalData)
    }
  return (
    <div className=''>
        <h1 className="text-xl">Whome did you wanted to hire</h1>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5'>
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
        
<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <CircularProgress color="inherit"/>
        <span style={{marginLeft:10}}>Your job js posting , Please wait.....</span>
      </Backdrop>


    </div>
  )
}

export default PostJob