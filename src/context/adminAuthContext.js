import {createContext, useContext, useEffect, useState} from "react"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebaseConfig";


const adminAuthContext = createContext();

export function AdminAuthContextProvider ({children}){
  const[admin ,setAdmin ] = useState(JSON.parse(localStorage.getItem("admin")))
  
      function login(email , password) {
        return signInWithEmailAndPassword(auth,email , password)
      }

      function logout (){
        return signOut(auth)
      }

      useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth , (currentUser) =>{
         setAdmin(currentUser)
         localStorage.setItem("admin",JSON.stringify(currentUser))
       });
       return ()=>{
        unsubscribe()
       }
      },[])
      return <adminAuthContext.Provider value ={{admin ,login ,logout} }>
        {children}
      </adminAuthContext.Provider>
}

export function useAdminAuthContext(){
    return useContext(adminAuthContext)
}