import React, { useEffect,useState } from 'react';
import './Profile.css';
import propic from '../../Assets/defaultProPic.jpg';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import UpdateDetails from './UpdateDetails';
import { Link, json, useNavigate } from 'react-router-dom'


const Profile = () => {

  const myVariable = localStorage.getItem('myVariable');
  // const coursevariable = localStorage.getItem('coursevariable');
  


  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const[videos,setVideos]=useState([])
  
   useEffect(() => {
    console.log("hoorayy");
    
    setLoading(true)
   
  }, [])


  let viewidentity=myVariable;

// const viewCourse = ()=>{

// fetch("http://192.168.8.142:8070/coursemodel/get/"+coursevariable)
// .then(response => response.json())
// .then(lesson => {console.log(lesson);
// setLoading(false)
// setVideos([lesson])
// })
// .catch(error => console.error(error));

// }




    const getStudent = ()=>{
       
  fetch("http://192.168.8.142:8070/student/get/"+viewidentity)
  .then(response => response.json())
  .then(data => {console.log(data);
  localStorage.setItem('videovariable', data[0].lessondetails[0].link);
  setLoading(false)
  setUsers(data)
  })

//   .then(data => setUsers(data))
// .catch(error => console.error(error));

// fetch("http://192.168.8.142:8070/coursemodel/get/"+coursevariable)
// .then(response => response.json())
// .then(lesson => {console.log(lesson);
// setLoading(false)
// setVideos([lesson])
// })


    }


    // console.log(users + "read this");


    const deleteStudent =()=>{
      let studentDelete = document.getElementById('object-id').value
      fetch("http://192.168.8.142:8070/student/delete/"+studentDelete, {
  method: 'DELETE',
});

    }

    const  [showModal , setShowModal] = useState(false);




    const click = () => {
      setShowModal(true)
    }
    
    const close = () => {
      setShowModal(false)    }
      

      const logout = ()=>{
        localStorage.removeItem('myVariable');
        localStorage.removeItem('videovariable');
        navigate('/');
      }

      

    const videoview =()=>{
      
      navigate('/video');
    }




    return (

      
        <div className='uppersec'>
          
        {/* <Navbar/> */}
        
      <div className="profile">

        <div className="left-s">

        <div className="Profile">
      {loading ? (
        <div className='refidview'>{viewidentity}</div>


      ) : (
        <>
        


          <div className='areaview' id='childview'>
            
            
          <div className='personalinfo'>

            PERSONAL INFO<br></br><br></br>

          <table border={0}>
            <th>
              <tr>ID          </tr><br/>
              <tr>NAME  </tr><br></br>
              <tr>ADDRESS     </tr><br></br>
              <tr>CONTACT       </tr><br></br>
              <tr>NIC    </tr><br></br>
              <tr>MAIL    </tr><br></br>
              <tr>USERNAME   </tr><br></br>
              {/* <tr>PASSKEY    </tr><br></br> */}
              <tr>COURSE    </tr><br></br>
              {/* <tr>REFERENCE  </tr><br></br> */}
            </th>
            {/* <th></th> */}
            <div className='tblspc'></div>
            {users.map(user => (
              <th key={user.id}>
                <tr>{user.id}</tr><br></br>
                <tr>{user.name}</tr><br></br>
                <tr>{user.address}</tr><br></br>
                <tr>{user.contact}</tr><br></br>
                <tr>{user.nic}</tr><br></br>
                <tr>{user.mail}</tr><br></br>
                <tr>{user.username}</tr><br></br>
                {/* <tr>{user.passkey}</tr><br></br> */}
                <tr>{user.course}</tr><br></br>
                {/* <tr>{user._id}</tr><br></br> */}

              </th>
            ))}
            
          </table>
          <i>"Distance learning has made the education progress by leaps and bounds."</i>

          </div>


         
          <div className='seneca'>
            
            <br></br>
          COURSES & LESSONS
<div className='coursetable'>

<table border={1} className='coursedtl'>
            <tr>
              <th>Student Id </th>
              <th>Course Id </th>
              <th>Month </th>
              <th>Week </th>
              <th>Link</th>
            </tr>
            {users.length > 0 && users[0].lessondetails.map(user => (
              <tr key={user._id}>
                <th>{user._id}</th>
                <th>{user.courseid}</th>
                <th>{user.coursemonth}</th>
                <th>{user.courseweek}</th>
                <th><a href={user.link}>lesson</a><button onClick={()=> videoview()}>view</button></th>
                </tr>
            ))}
            </table>

</div>
          



<div className='paymentinfo'>PAYMENT INFORMATION

<table border={0} className='paymentdtl'>
            <th>
              <tr>Payment Id </tr><br></br>
              <tr>Course Name </tr><br></br>
              <tr>Course fee </tr><br></br>
              <tr>Payment Status </tr><br></br>
              <tr>Payment Date</tr>
            </th>
            <div className='tblspc'></div>
            {users.length > 0 && users[0].pay.map(user => (
              <th key={user._id}>
                <tr>{user._id}</tr><br></br>
                <tr>{user.paymentname}</tr><br></br>
                <tr>{user.paymentfee}</tr><br></br>
                <tr>{user.paymentstatus}</tr><br></br>
                <tr>{user.paymentdate}</tr>
                </th>
            ))}
            </table>
</div>

          </div>

          



          </div>

        </>
        
      )}

    </div>
        
    <button class="show-profile" onClick={()=>{getStudent()}} >Show Profile</button>

        </div>

        </div>
        <div className='pp'>
          <img className="profile-picture" src={propic} alt="Profile" />
          <h4 className='profile-pictureName'>{}</h4>
        
        </div>
        
       
       <div>
       <button class="update-button" onClick={()=> click()}>Update</button>
        <button class="back-button" onClick={()=> close()}>Back</button>
        
        
       </div>

       <button class="logout-button" onClick={()=> logout()}>LOGOUT</button>
      
         {showModal && <UpdateDetails/> }  
        
         
     
       

      </div>
      
      
    );
  }




export default Profile;
