import React from 'react'
import './Home.css'
import Swal from 'sweetalert2'
// import Signup from '../LoginForm/Signup'
import {useNavigate} from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleUserLoginClick = () => {
    // Navigate to the login component
    navigate('/userLogin');
  };
  const  handleAdminLoginClick = () => {
    // Navigate to the login component
    navigate('/adminLogin');
  };

 
  // const open = () => {
  //   <Signup />
  // }

  const log = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login Successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (

    <div className='lms'>


      <div className="btn-area">
        {/* <button className='btn-1' onClick={() => { log() }} >Student-Login</button> */}
        <button className='btn-1' onClick={handleUserLoginClick} >Student-Login</button>
        <button className='btn-2' onClick={handleAdminLoginClick}>Admin-Login</button>

      </div>

    </div>

  )
}


export default Home;