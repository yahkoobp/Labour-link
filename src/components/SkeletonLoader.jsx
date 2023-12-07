import React, { useEffect } from 'react'
import { Skeleton } from '@mui/material'
const SkeletonLoader = () => {
  
  useEffect(()=>{
    const container = document.getElementById("container")
    const content = document.getElementById("content")
    for(let i=0 ; i<5 ; i++){
      let child = content?.cloneNode(true)
      container?.appendChild(child)
    }
  },[])

  
  return (
    <div id="container" className='flex flex-col'>
      <div id="content" className='flex px-4 py-2 items-center gap-2'>
       <Skeleton variant='circular' width={50} height={50} animation="wave"/>
       <div className='flex flex-col w-full'>
       <Skeleton variant='text' height={50} animation="wave"/>
       <Skeleton variant='text'  animation="wave"/>
       </div>
       <Skeleton variant='rectangular' width={80} height={30} animation="wave" />
       </div>
    </div>
  )
}

export default SkeletonLoader