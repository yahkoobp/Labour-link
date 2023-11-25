import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useUserAuthContext } from '../context/userAuthContext'

const ProtectedRoute = ({children}) => {
    const {user} = useUserAuthContext()
    const navigate = useNavigate()
    if(!user) {
          return <Navigate to='/'/>
    }
  return children
  
}

export default ProtectedRoute