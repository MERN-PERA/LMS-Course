// import React from 'react'
import './entryform.css';
import React, {useState } from 'react';


const Courseform = ()=> {

  
  

const ViewCourse = ()=>{

  let StudentID = document.getElementById("selectstdid").value;
  let CourseId =  document.getElementById("selectcid").value;
  let CourseMonth =  document.getElementById("selectcmonth").value;
  let CourseWeek =  document.getElementById("selectcname").value;
  let VideoLink =  document.getElementById("cvideolink").value;

  var obj={
    stdidc:StudentID,
    idc:CourseId,
    monthc:CourseMonth,
    weekc:CourseWeek,
    linkc:VideoLink
};
console.log(obj);
fetch("http://192.168.8.142:8070/coursemodel/addcourse",{
 method:"POST",
 headers:{
    'Content-type': 'application/json'},
    body:JSON.stringify(obj)}
    ).then((response) => {
      response.json().then(data => {
          console.log(data);
          if (response.status === 200) {
            console.log("okayyyyzz");
          }
      });
  });


}
       
 



  return (


    <div className='courseblock'>

<label class="pcourseid">Student Id</label>
<input class="stccourseid" type='number' id='selectstdid'></input><br></br>

<label class="pcourseid">Course Id</label>
<input class="ccourseid" type='number' id='selectcid'></input><br></br>


<label class="pcoursefee">Month</label>
<select class="ccoursemonth" type='text' id='selectcmonth'>
<option value="jan">January</option>
<option value="feb">February</option>
<option value="Mar">March</option>
<option value="Apr">April</option>
<option value="May">May</option>
<option value="Jun">June</option>
<option value="Jul">July</option>
<option value="Aug">August</option>
<option value="Sep">September</option>
<option value="Oct">October</option>
<option value="Nov">November</option>
<option value="Dec">December</option>
    
</select><br></br>

<label class="pcoursename">Course Week</label>
<select class="cscoursename" type='text' id='selectcname'>

<option value="week 1">Week 1</option>
<option value="week 2">Week 2</option>
<option value="week 3">Week 3</option>
<option value="week 4">Week 4</option>

</select><br></br>

<label class="pcoursedate">Video Link</label>
<input class="videolink" type='text' id='cvideolink'></input><br></br>

<button className='paymentbutton' onClick={()=>{ViewCourse()}}>ADD LESSON</button>
<div className='vvv'></div>


    </div>





  )


  }

export default Courseform;