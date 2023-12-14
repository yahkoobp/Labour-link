import React, { useState } from 'react'
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
import { jobs } from '../data';
import { Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';


 const TabNav = (props) => {
    const [value, setValue] = React.useState('1');
    const [visibleBox , setVisibleBox] = useState(true)
    const navigate= useNavigate()
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [query , setQuery] = useState("")
    const tabnav = document.getElementById("tabnav")
    console.log(tabnav?.classList)

    const handleFocus =()=>{
        setVisibleBox(false)
    }
    const handleBlur = ()=>{
      setVisibleBox(true)
    }
  
    return (
    
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} >
         {visibleBox &&
         <Fade in={true} timeout={1000}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider',fontWeight:"bold" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered indicatorColor='secondary'>
              <Tab label="Jobs" value="1"  sx={{fontWeight:"bold"}}/>
              <Tab label="Committed" value="2" sx={{fontWeight:"bold"}}/>
              <Tab label="Post a job" value="3" sx={{fontWeight:"bold"}} />
            </TabList>
          </Box>
          </Fade>}
          <TabPanel value="1">
          <div className='sticky z-100 top-0 w-full ml-0'>
        <div className=' py-4 shadow-sm bg-white w-full'>
        <div className='w-full flex items-center justify-center'>
        <Paper  onChange={(e)=>setQuery(e.target.value)}
      component="form"
      sx={{ p: '2px 1px', display: 'flex', alignItems: 'center', width:400 ,boxShadow:1 , height:45,borderRadius:2 , marginTop:0 ,backgroundColor:"white"}}
      >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Jobs"
        value={query}
        inputProps={{ 'aria-label': 'search jobs' }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
    </div>
    <ul className='ml-0 '>
        {query !== "" && jobs.filter((job=>job.toLowerCase().startsWith(query))).map((filteredItem)=>(
            <div className='flex border-b border-b-gray-200 items-center justify-start w-full bg-white'>
                <SearchIcon sx={
                    {color:"gray"}
                }/>
            <li onClick={()=>setQuery(filteredItem)} className="cursor-pointer p-4 w-full font-semibold text-sm">
                {filteredItem}
            </li>
            </div>
        ))}
       </ul>
       </div>
    </div>
            <JobCard/>
            <JobCard />
            <JobCard />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    );
}
export default TabNav
