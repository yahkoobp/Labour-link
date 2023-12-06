import {createContext, useContext, useEffect, useState} from "react"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebaseConfig";


const userAuthContext = createContext();

export function UserAuthContextProvider ({children}){
  const[user ,setUser ] = useState(JSON.parse(localStorage.getItem("user")))
  
      function signUp(email , password) {
        return createUserWithEmailAndPassword(auth,email , password)
      }

      function login(email , password) {
        return signInWithEmailAndPassword(auth,email , password)
      }

      function logout (){
        return signOut(auth)
      }

      useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth , (currentUser) =>{
         setUser(currentUser)
         localStorage.setItem("user",JSON.stringify(currentUser))
       });
       return ()=>{
        unsubscribe()
       }
      },[])
      return <userAuthContext.Provider value ={{user , signUp ,login ,logout} }>
        {children}
      </userAuthContext.Provider>
}

export function useUserAuthContext(){
    return useContext(userAuthContext)
}