import "./App.css";
import Courses from "./Components/Courses/Courses";

import Navbar from "./Components/Navbar/Navbar";
import Payment from "./Components/Payment/Payment";
import Profile from "./Components/Profile/Profile";
// import UpdateDetails from "./Components/Profile/UpdateDetails";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mainpanel from "./Components/Registrationportal/mainpanel";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
// import Newlogin from "./Components/LoginForm/Newlogin";
import Videoview from "./Components/Videoview/videoview";
import Home from "./Components/Home/Home";
import Login from "./Components/LoginForm/userLogin/UserLogin";
import AdminLogin from "./Components/LoginForm/adminLogin/AdminLogin";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userLogin" element={<Login/>} />
            <Route path="/adminLogin" element={<AdminLogin/>} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/mainpanel" element={<Mainpanel />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/video" element={<Videoview />} />
          </Routes>
        </main>
      </BrowserRouter> 
   
       {/* <Payment/> userLogin*/}
     
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


{/* <Signup/> */}
{/* <Sidebar /> */}
{/* <LoginForm/> */}
{/* <Mainpanel /> */}
{/* <Profile /> */}
{/* <Payment /> */}
{/* <Courses /> */}