import React from 'react'
import Header from '../components/Header'
import BottomTab from '../components/BottomTab'
import { useUserAuthContext } from '../context/userAuthContext'

function Home() {
  const {user , logout} = useUserAuthContext()
  console.log(user)
   const body=document.body
   console.log(body.classList)
   let lastScroll = 0
   window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    const currentScroll = window.scrollY
    if(currentScroll <=0){
        body.classList.remove("scroll-up")
    }

    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")

    }

    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")

    }
    lastScroll = currentScroll
   } )
  return (
    <div className='h-screen'>
        <header className='fixed top-0 left-0 z-50 w-full transition-all ease-in-out duration-500'>
        <Header/>
        </header>
        <div className='flex w-full shadow-md p-5 items-center justify-between gap-10 mt-[50px]'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>

          <div className='flex w-full shadow-md p-5 items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-9'>
        <div className='rounded-full w-[40px] h-[40px]'>
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full rounded-full object-cover'/>
          </div>
          <div>
            <h2 className='font-bold text-md'>Yahkoob</h2>
            <p className='font-md'>Carpenter</p>
          </div>
          </div>
          <button className='px-6 py-2 bg-green-700 shadow-lg font-bold text-white rounded-full border-none hover:bg-green-500'>View</button>
          </div>
         <div className='fixed top-0 left-0 z-50 w-full transition-all ease-in-out duration-300'>
          <BottomTab/>
          </div>

          
    </div>
  )
}

export default Home