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


function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/profile-form" element={<ProtectedRoute><ProfileForm/></ProtectedRoute>}/> 
      </Routes>
      </UserAuthContextProvider>
      {/* <Splash/> */}
      {/* <BottomTab/> */}
    {/* <Login/> */}
    {/* <Landing/> */}
    {/* <Navbar/> */}
    {/* <ProfileForm/> */}
     
    </div>
  );
}

export default App;
