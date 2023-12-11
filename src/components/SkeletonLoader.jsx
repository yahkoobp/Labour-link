import React, { useEffect } from 'react'
import { Skeleton } from '@mui/material'
const SkeletonLoader = () => {
  
  useEffect(()=>{
    const container = document.getElementById("container")
    const content = document.getElementById("content")
    for(let i=0 ; i<6 ; i++){
      let child = content?.cloneNode(true)
      container?.appendChild(child)
    }
  },[])

  
  return (
    <div id="container" className='flex flex-col gap-2 mt-6'>
      <div id="content" className='flex items-center'>
        <div className='ml-4 mt-2'>
       <Skeleton variant='circular' width={50} height={50} animation="wave"/>
       </div>
       <div className='flex flex-col w-full ml-4'>
       <Skeleton variant='text' height={30} animation="wave"/>
       <Skeleton variant='text' height={10}  animation="wave"/>
       </div>
       <div className='px-4'>
       <Skeleton variant='rectangular' width={60} height={30} animation="wave" />
       </div>
       </div>
    </div>
  )
}

export default SkeletonLoader