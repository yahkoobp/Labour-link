import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {Routes ,Route} from 'react-router-dom';
import Home from "./pages/Home";
import BottomTab from "./components/BottomTab";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
      {/* <BottomTab/> */}
    {/* <Login/> */}
    {/* <Landing/> */}
    {/* <Navbar/> */}
     
    </div>
  );
}

export default App;
