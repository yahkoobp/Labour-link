import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAdminAuthContext } from '../context/adminAuthContext'

const Admin_Login = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [loading , setLoading ] = useState(false)
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const {login} = useAdminAuthContext()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError("")
        try {
          setLoading(true)
          await login(email,password)
          setLoading(false)
          navigate("/admin-home")
        } catch (error) {
          setError(error.message)
          setLoading(false)
        }
      }
  
  return (
    <div>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-1 text-center h-screen bg-gray-100">
        <div className='bg-white flex flex-col rounded-md shadow-lg lg:shadow-lg max-w-2xl '>
           <div className='w-full px-10 py-10 '>
              <h2 className='font-bold text-2xl text-[#002D74] text-center my-3'>Admin Login</h2>
             
              <form className='flex flex-col gap-6' action="">
                <input className='p-2 mt-6  rounded-md bg-gray-100 focus:outline-none' type="email" name="email" id="" placeholder='Enter email'
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}/>
               
                <input  className='p-2 rounded-md w-full bg-gray-100 focus:outline-none'type="password" name="password" id="" placeholder='Enter password' 
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}/>
               
               <Link to=''><button className='bg-[#002D74] rounded-md text-white py-2 hover:scale-105 duration-300 w-full' onClick={handleSubmit}>{loading?"Loading...":"Login"}</button></Link>
              </form>
           </div>
    </div>
    </div>
    </div>
  )
 }
export default Admin_Login