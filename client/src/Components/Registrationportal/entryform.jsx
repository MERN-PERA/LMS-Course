import React, { useState } from "react";
import './entryform.css';





const Entryform =()=> {

    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [contact,setContact]=useState('');
    const [nic,setNic]=useState('');
    const [mail,setMail]=useState('');
    const [username,setUsername]=useState('');
    const [passkey,setPasskey]=useState('');
    const [course,setCourse]=useState('');

    function sendData(e){
        e.preventDefault();
      const newChild = {
        id,
        name,
        address,
        contact,
        nic,
        mail,
        username,
        passkey,
        course
         
      }
    }

    const childSave = () => {
        let studentId = document.getElementById('id').value
        let studentName = document.getElementById('name').value
        let studentAddress = document.getElementById('address').value
        let studentContact = document.getElementById('contact').value
        let studentNic = document.getElementById('nic').value
        let studentMail = document.getElementById('mail').value
        let studentUsername = document.getElementById('username').value
        let studentPasskey = document.getElementById('passkey').value
        let studentCourse = document.getElementById('course').value
        let studentLesson = document.getElementById('lesson').value
        let studentPayment = document.getElementById('payment').value

        
    
        var obj={
          id:studentId,
          name:studentName,
          address:studentAddress,
          contact:studentContact,
          nic:studentNic,
          mail:studentMail,
          username:studentUsername,
          passkey:studentPasskey,
          course:studentCourse,
          lesson:studentLesson,
          payment:studentPayment,
          
        };
        console.log(obj);
        fetch("http://192.168.8.142:8070/student/add",{
          
          method:"POST",
          headers:{
            'Content-type': 'application/json'
          },
          body:JSON.stringify(obj)
          
        }).then((response) => response.json())
        .then((json) => console.log(json));
    
    
      };




    const [active, setActive] = useState(false);

    function closeItem() {
      setActive(true);
    }
    function openItem() {
      setActive(false);
    }
    

  return (


    <div class="entryform-main">

    <div class="hspace"></div>
    <div class="lbl1">
        <label class="one">Student ID</label>
        <input class="onei" type='number' id='id'></input>
    </div><div class="hspace"></div>

    <div class="lbl1">
        <label class="one">Name in Full</label>
        <input class="onei" type='text' id='name'></input>
    </div><div class="hspace"></div>

    <div class="lbl1">
        <label class="one">Address</label>
        <input class="onei" type='text' id='address'></input>
    </div><div class="hspace"></div>

    <div class="lbl1">
        <label class="one">Contact Number</label>
        <input class="onei" type='number' id='contact'></input>
    </div><div class="hspace"></div>

    <div class="lbl1">
        <label class="one">N.I.C</label>
        <input class="onei" type='varchar' id='nic'></input>
    </div>
    <div class="hspace"></div>

    <div class="lbl1">
        <label class="one">E-mail</label>
        <input class="onei" type='email' id='mail'></input>
    </div>
    <div class="hspace"></div>

    <div class="lbl1">
        <label class="one">Username</label>
        <input class="onei" type='varchar' id='username'></input>
    </div><div class="hspace"></div>

    <div class="lbl1">
        <label class="one">Password</label>
        <input class="onei" type='password' id='passkey'></input>
    </div><div class="hspace"></div>

    <div class="lbl1">
        <label class="one">Registered Courses</label>
        <select class="two" type='text' id='course'>

        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="reactjs">ReactJs</option>
        <option value="jp">Java & Python</option>
        <option value="jr">Java & ReactJs</option>
        <option value="pr">Python & ReactJs</option>
        <option value="jpr">Java,Python & ReatJs</option>

        </select><div class="hspace"></div>

      <div class="lbl1">
      <label class="one">Lesson Id</label>
       <input class="onei" type='number' id='lesson'></input>
    </div>
    <div class="hspace"></div>

    <div class="lbl1">
    <label class="one">Payment Id</label>
     <input class="onei" type='number' id='payment'></input>
    </div>
    </div>


<div class="addstudent">
    <button class="stdbtn" onClick={()=>{childSave()}}><b>ADD STUDENT</b></button>
</div>



    </div>


  )


}
export default Entryform;