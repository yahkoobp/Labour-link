import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuthContext } from '../context/userAuthContext'
import { Navigate } from 'react-router-dom'


function Register() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPass , setConfirmPass] = useState("")
  const [error , setError] = useState("")
  const [loading , setLoading] = useState(false)
  const {signUp} = useUserAuthContext()
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{

    e.preventDefault()
    setError("")
    try {
      setLoading(true)
      await signUp(email,password)
      setLoading(false)
      navigate("/profile-form")
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }
  return (
    <div>
   <div className="flex flex-col items-center justify-center w-full flex-1 px-1 text-center h-screen bg-gray-100">
        <div className='bg-white flex flex-col rounded-md shadow-lg lg:shadow-lg max-w-2xl '>
           <div className='w-full p-5 lg:px-16'>
              <h2 className='font-bold text-2xl text-[#002D74] text-left my-1'>Register</h2>
              {error && <span className='text-red-700 text-sm'>{error}</span>}
              <form className='flex flex-col gap-4' action="">
                <input className='p-2 rounded-md bg-gray-100 focus:outline-none mt-10' type="email" name="email" id="" placeholder='Email'
                onChange={(e)=>{
                   setEmail(e.target.value)
                }}/>
                <input  className='p-2 rounded-md w-full bg-gray-100 focus:outline-none'type="password" name="password" id="" placeholder='password' 
                 onChange={(e)=>{
                  setPassword(e.target.value)
                  
               }}/>
                <input  className='p-2 rounded-md w-full bg-gray-100 focus:outline-none'type="password" name="password" id="" placeholder='confirm password' 
                onChange={(e)=>{setConfirmPass(e.target.value)}}/>
                {confirmPass === password &&confirmPass!="" ? <span className='text-sm text-green-500'>Password matched</span> : confirmPass!="" &&<span className='text-sm text-red-600'>Password not matched</span>}
                <button onClick={handleSubmit} className='bg-[#002D74] rounded-md text-white py-2 hover:scale-105 duration-300'>{loading ? 'Loading...' : 'Signup'}</button>
              </form>

              <div className='mt-10 text-gray-500 grid grid-cols-3 items-center'>
                <hr className='border-gray-400'/>
                <p className="text-center">OR</p>
                <hr className='border-gray-400'/>
              </div>
              <button className='bg-white border py-2 w-full rounded-md mt-5 flex justify-center items-center gap-3 hover:scale-105 duration-300'>
              <svg className='mt-3 text-sm' xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>
                Register with google</button>
           <div className='text-sm flex gap-2 justify-between items-center mt-3'>
            <p>Already have an account? </p>
           <Link to='/login'> <button className='py-2 px-5 bg-white border rounded-md hover:scale-105 duration-300 hover:bg-[#002D74] hover:text-white '>Login</button></Link>
           </div>
              
           </div>
          
           {/* <div className="w-1/2">
            <img className='rounded-2xl' src="pexels-luis-dalvan-1770809.jpg" alt="image not available" />
           </div> */}
        </div>
    </div>
    </div>
  )
}

export default Register