import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {Routes ,Route} from 'react-router-dom';
import Home from "./pages/Home";
import BottomTab from "./components/BottomTab";
import Profile from "./pages/Profile";
import Splash from "./pages/Splash";
import { UserAuthContextProvider } from "./context/userAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileForm from "./pages/ProfileForm";
import UserViewProfile from "./pages/UserViewProfile";
import Admin_Login from "./Admin/Admin_Login";
import Admin_home from "./Admin/Admin_home";
import { AdminAuthContextProvider } from "./context/adminAuthContext";
import LabOrClient from "./pages/LabOrClient";
import OthersForm from "./pages/OthersForm";
import Jobs from "./pages/Jobs";
import SkeletonLoader from "./components/SkeletonLoader";
import Peoples from "./pages/Peoples";
import JobView from "./pages/JobView";
import MyProfile from "./pages/MyProfile";



function App() {
  // const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="App">
      <UserAuthContextProvider>
        <AdminAuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/profile" element={<Profile/>}/> */}
        <Route path="/profile" element={<MyProfile/>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/profile-form" element={<ProtectedRoute><ProfileForm/></ProtectedRoute>}/>
        <Route path="/others-form" element={<ProtectedRoute><OthersForm/></ProtectedRoute>}/> 
        <Route path="/userProfile/:uid" element={<ProtectedRoute><UserViewProfile/></ProtectedRoute>}/>
        <Route path="/jobs" element={<ProtectedRoute><Jobs/></ProtectedRoute>}/>
        <Route path="/peoples" element={<ProtectedRoute><Peoples/></ProtectedRoute>}/>
        <Route path="/jobview/:jid" element={<ProtectedRoute><JobView/></ProtectedRoute>}/>
        <Route path="/laborclient" element={<LabOrClient/>}/>
        <Route path="/admin-login" element={<Admin_Login/>}/>
        <Route path="/admin-home" element={<Admin_home/>}/>
      </Routes>
      {/* <SkeletonLoader/> */}
      </AdminAuthContextProvider>
      </UserAuthContextProvider>
     
    
     
    </div>
  );
}

export default App;
