import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProfileModel from '../components/ProfileModel'
import { useNavigate } from 'react-router-dom'
import { doc ,getDoc,setDoc } from 'firebase/firestore'
import { db , storage } from '../firebaseConfig'
import { useUserAuthContext } from '../context/userAuthContext'
import {ref ,uploadBytesResumable ,getDownloadURL } from 'firebase/storage'
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Profile = () => {
    const {user ,logout} = useUserAuthContext()
    const [userDetails , setUserDetails] = useState({})
    const [modelVisible , setModelVisible] = useState(false)
    const [showAllWorks , setShowAllWorks] = useState(false)
    const [file , setFile] = useState("")
    const navigate = useNavigate()

    const handleLogOut = async()=>{
       try {
          logout()
          navigate("/")
       } catch (error) {
        
       }
    }

    const workHandler= ()=>{
        setShowAllWorks(true)
    }

    useEffect(()=>{
      const updateData = async(img)=>{
        try {
          const res = await setDoc(doc(db ,"users",user.uid),{
             ...userDetails,
             image :img
          })
          await setDoc(doc(db ,"labours",user.uid),{
            ...userDetails,
            image :img
         })

      //    await setDoc(doc(db ,"others",user.uid),{
      //     ...userDetails,
      //     image :img
      //  })
  
        } catch (error) {
          console.log(error)
        }
      }
     const uploadFile = ()=>{
      const name = new Date().getTime() + file.name
      const storageRef = ref(storage ,name)

      const uploadTask = uploadBytesResumable(storageRef , file)
      
      uploadTask.on(
        "state_changed",
        (snapshot)=>{
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("uploading is " + progress + "done")
          switch (snapshot.state){
            case "paused":
              console.log("uploading is paused")
              break;
            case "running":
              console.log("uploading is running")
              break;
            default:
              break;
          }
        },
        (error)=>{
          console.log(error)
        },
        ()=>{
             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
              console.log("file available at ",downloadURL)
              updateData(downloadURL)
             })
        }
      )

     }

     file && uploadFile()
    },[])


    const modelHandler = ()=>{
        setModelVisible(true)
    }
    const hideModel =()=>{
        setModelVisible(false)
    }

    const goBack =()=>{
        navigate(-1)
    }

    useEffect(()=>{
      const fetchData = async()=>{
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setUserDetails(docSnap.data())
          
          // console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }}
        fetchData()
    },[])
  return (
    <div className='h-screen relative'>
<div className='shadow-md'>
        <div className='w-full h-[70px] bg-gray-900'>
            <div onClick={goBack} className='ml-1 cursor-pointer inline'>
        <KeyboardBackspaceIcon sx={{color:"white" , width:"50px" , height:"40px"}}/>
</div>
              <div onClick={modelHandler} className='rounded-full w-[100px] h-[100px] absolute top-6 ml-6 border-4 border-white cursor-pointer'>
                <input type='file' id="file" className='hidden' onChange={(e)=>{
                  setFile(e.target.files[0])
                }}/>
              <label htmlFor="file">
              <img src={userDetails.image?userDetails.image :"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1701156585~exp=1701157185~hmac=ac68d03b1add36a89081d098324072530d782a1bd6a57a0eebb5ff7e6ae9cea8"} className='w-full h-full rounded-full object-cover'/>
              </label>
              <div className='bg-white rounded-full absolute top-[75px] left-14 border-2 border-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="blue" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
              </div>
              </div>
              <div className='h-[35px] w-[35px] bg-white absolute right-2 top-4 rounded-full flex items-center justify-center cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#002D74" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
              </div>
             
        </div>

        <div className='mt-14 px-6 py-2'>
            <h1 className='font-semibold text-xl'>{userDetails.firstname}</h1>
            <p className='font-semibold mb-2'>{userDetails.bio}</p>
            <div className='text-sm font-semibold'>
            <p>{userDetails.address}</p>
            <p>Pin :{userDetails.pincode}</p>
            <p>Mob :{userDetails.phonenumber}</p>
            </div>
            <div className='text-bold bg-gray-900 h-[40px] w-[200px] rounded-full px-5 text-white flex items-center justify-center mt-4 mb-3'>Open to work</div>
        </div>
        </div>

        <div className='mt-6 px-6 '>
          <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-xl'>Work Areas</h2>
          <div className='flex gap-3'>
            <AddIcon sx={{width:"30px",height:"30px",cursor:"pointer"}}/>
            <ModeEditIcon sx={{width:"30px",height:"30px",cursor:"pointer"}}/>
            </div>
          </div>
       {!showAllWorks ?
          <div className='mt-3 transition-all ease-in-out duration-300'>
            <ul className='flex flex-col gap-1'>
              { userDetails.work_areas?.filter((item , index)=>index <2)?.map((filteredItem)=>(
                <li className='border-b border-b-gray-200 p-2 font-semibold'>
               {filteredItem}
              </li>
              ))
              }
              { userDetails.work_areas?.length > 2 && <div onClick={workHandler} className='flex items-center justify-center border-b border-b-gray-200 cursor-pointer py-2 gap-2 hover:bg-gray-100'>
              <h2 className='font-semibold text-md text-gray-500'>Show all</h2>
              <ExpandMoreIcon sx={{width:"30px" , height:"30px" , color:"gray"}}/>
              </div>}
            </ul>
          </div> : 

<div className='mt-3'>
<ul className='flex flex-col gap-1'>
  { userDetails.work_areas?.map((filteredItem)=>(
    <li className='border-b border-b-gray-200 p-2 font-semibold'>
   {filteredItem}
  </li>
  ))
  }
  <div onClick={()=>{setShowAllWorks(false)}} className='flex items-center justify-center border-b border-b-gray-200 cursor-pointer py-2 gap-2 hover:bg-gray-100'>
  <h2 className='font-semibold text-md text-gray-500'>Show less</h2>
  <ExpandLessIcon sx={{width:"30px" , height:"30px" , color:"gray"}}/>
  </div>
</ul>
</div>

}
        </div>
        {/* <div className='p-4'>
        <button onClick={handleLogOut} className='font-semibold text-md bg-[#002D74] text-white p-2 rounded-md'>LogOut</button>
        </div> */}
    </div>
  )
}

export default Profile

//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
