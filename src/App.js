import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    {/* <Login/> */}
    {/* <Landing/> */}
    {/* <Navbar/> */}
     
    </div>
  );
}

export default App;
