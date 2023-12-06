import React, { useState } from 'react';
import './UpdateDetails.css';




const UpdateDetails = () => {
  const [objectid,setObjectId]=useState('');
  const [id,setId] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  

  function sendData(e){
    e.preventDefault();
  const newUpdate = {
    id,
    name,
    telephone,
    address
     
  }
    
  }
  const handleSave = () => {
    let studentId = document.getElementById('id').value
    let studentName = document.getElementById('name').value
    let studentTelephone = document.getElementById('telephone').value
    let studentAddress = document.getElementById('address').value
    

    var obj={
      id:studentId,
      name:studentName,
      telephone:studentTelephone,
      address:studentAddress,
      
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

  const updateStudent = ()=>{
    let updateObjectId = document.getElementById('objectid').value
    let updateId = document.getElementById('id').value
    let updateName = document.getElementById('name').value
    let updateTelephone = document.getElementById('telephone').value
    let updateAddress = document.getElementById('address').value

    var object={
      
      id:updateId,
      name:updateName,
      telephone:updateTelephone,
      address:updateAddress
    };
    console.log(object);
    fetch('http://192.168.8.142:8070/student/update/'+updateObjectId, {
  method: 'PUT',
  
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(object),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  };
  
  
  return (

    

    <div className="update-details-dialog">

      <h2 className='updttitle'>UPDATE DETAILS</h2>

      <label htmlFor="objectid">Object ID:</label>
      <input
        type="varchar"
        id="objectid"
        className="input-field"
        value={objectid}
        onChange={(e) => setObjectId(e.target.value)}
      />

      <label htmlFor="id">Student ID:</label>
      <input
        type="number"
        id="id"
        className="input-field"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <label htmlFor="name">Student Name:</label>
      <input
        type="text"
        id="name"
        className="input-field-std"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="telephone">Telephone No:</label>
      <input
        type="number"
        id="telephone"
        className="input-field"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        className="input-field"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* <label htmlFor="profilePic">Profile Pic:</label>
      <input
        type="file"
        id="profilePic"
        className="input-field" */}
        {/* //value={profilePic}
        //onChange={(e) => setProfilePic(e.target.value)}
      /> */}

      {/* <button className="save-button" onClick={handleSave}>Add Student</button> */}
      <button className='update' onClick={()=>{updateStudent()}}>UPDATE</button>
     
    </div>
  
  );

  };
export default UpdateDetails;
