import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Home from '../pages/Home';
import JobCard from './JobCard';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { jobs, kerala_places } from '../data';
import { Autocomplete, Fade, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PostJob from './PostJob';
import { collection , getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import JobPosts from './JobPosts';
import TuneIcon from '@mui/icons-material/Tune';


 const TabNav = (props) => {
    const [value, setValue] = React.useState('1');
    const [visibleBox , setVisibleBox] = useState(true)
    const [AllJobs ,setAllJobs] = useState([])
    const [jobsByTitle , setJobsByTitle] = useState([])
    const [selected , setSelected] = useState(false)
    const [district , setDistrict] = useState("")
    const districts = Object.keys(kerala_places)
    const default_option =["Please select a district"]
    const navigate= useNavigate()
    const listView = document.getElementById("list")
   
   
    // console.log(jobsByTitle)
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [filterQuery , setFilterQuery] = useState("")
    const tabnav = document.getElementById("tabnav")
    let temp_query = filterQuery

    const handleFocus =()=>{
        // setVisibleBox(false)
    }
    const handleBlur = ()=>{
      // setVisibleBox(true)
    }

    const handleSearch = async (item)=>{
      const listView = document.getElementById("list")
      setFilterQuery(item)
      setSelected(true)
      let list = []
    try {
        const jobsQuery = query(
          collection(db,"jobs"),
          where("job_title","==",item)
        )
        const querySnapshot = await getDocs(jobsQuery);
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id ,...doc.data()})
});
      setJobsByTitle(list)
      
    } catch (error) {
      console.log(error)
    }
    }
  
    useEffect(()=>{
      console.log("useeffect is working")
      let unSubscribe = false
      const listView = document.getElementById("list")

      const fetchJob = async()=>{
        let list = []
        try {
          const querySnapShot = await getDocs(collection(db , "jobs"));
          querySnapShot.forEach((doc)=>{
            list.push({job_id: doc.id ,...doc.data()})
          })
          setAllJobs(list)
        } catch (error) {
          console.log(error)
        }
      }
      if(unSubscribe == false){
      fetchJob()
      }

      return () => {
        console.log("component unmonted and cleaning up")
        unSubscribe = true
      }

    },[])
    return (
      <div className=''>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} >
         {visibleBox &&
         <Fade in={true} timeout={1000}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider',fontWeight:"bold" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" indicatorColor='secondary' variant="scrollable"
              scrollButtons="auto">
              <Tab label="Jobs" value="1"  sx={{fontWeight:"bold"}}/>
              <Tab label="Committed" value="2" sx={{fontWeight:"bold"}}/>
              <Tab label="Post a job" value="3" sx={{fontWeight:"bold"}} />
              <Tab label="Job posts" value="4" sx={{fontWeight:"bold"}} />
            </TabList>
          </Box>
          </Fade>}
          <TabPanel value="1">
          <div className='sticky z-100 top-0 w-full ml-0 border-b-2 border-b-gray-300'>
        <div className=' py-4 bg-white w-full'>
        <div className='w-full flex items-center justify-center'>
        <Paper  onChange={(e)=>{setFilterQuery(e.target.value)
        console.log(filterQuery)}}
      component="form"
      sx={{ p: '2px 1px', display: 'flex', alignItems: 'center', width:400 ,boxShadow:1 , height:45,borderRadius:2 , marginTop:0 ,backgroundColor:"white"}}
      >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Jobs"
        value={filterQuery}
        inputProps={{ 'aria-label': 'search jobs' }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
    </div>
    <ul id="list" className='ml-0 '>
        {filterQuery !== "" && jobs.filter((job=>job.toLowerCase().includes(filterQuery.toLocaleLowerCase()))).map((filteredItem , i)=>(
            <div className='flex border-b border-b-gray-200 items-center justify-start w-full bg-white'>
                <SearchIcon sx={
                    {color:"gray"}
                }/>
            <li key={i} onClick={()=>handleSearch(filteredItem)} className="cursor-pointer p-4 w-full font-semibold text-sm">
                {filteredItem}
            </li>
            </div>
        ))}
       </ul>
       {/* <div className='flex items-center justify-center w-full px-16 gap-8'>
           <div className='w-[180px]'>
                <Autocomplete
                size='small'
                sx={{width:"400px"}}
                variant="standard"
                options={districts} renderInput={(params)=> <TextField variant='standard' sx={{font:"12px",width:"100px"}}  {...params} label="district" name="district"></TextField>} 
                onChange={(e , value)=>{
                  setDistrict(e.target.outerText)
                  // console.log(district)
                  // console.log(kerala_places[district].places)
                }}></Autocomplete>
                </div>

                <div className='w-[180px]'>
                <Autocomplete
                sx={{width:"200px"}}
                size='small'
                
                options={kerala_places[district]?kerala_places[district]?.places:default_option} renderInput={(params)=> <TextField variant='standard' {...params} label="city" name="city"></TextField>} 
                ></Autocomplete>
                </div>
       </div> */}
       </div>
    </div>
    {filterQuery!=="" && selected ? jobsByTitle.map((job)=>(
        <JobCard job={job}/>
      )) :
      AllJobs.map((job)=>(
        <JobCard job={job}/>
      ))
    }
          </TabPanel>
          <TabPanel value="2">
            item2
          </TabPanel>
          <TabPanel value="3">
            <PostJob/>
          </TabPanel>
          <TabPanel value="4">
            <JobPosts/>
          </TabPanel>
        </TabContext>
      </Box>
      </div>
    );
}
export default TabNav
