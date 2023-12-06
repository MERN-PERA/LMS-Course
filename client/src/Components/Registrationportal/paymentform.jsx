import React from 'react'
import './entryform.css';




const Paymentform=()=> {

  const Addpay =()=>{

let PaymentcourseId = document.getElementById('cid').value;
let PaymentcourseName = document.getElementById('cname').value;
let PaymentcourseFee = document.getElementById('cfee').value;
let PaymentcourseStatus = document.getElementById('cstatus').value;
let PaymentcourseDate = document.getElementById('cdate').value;

var obj={
  paycourseid:PaymentcourseId,
  paycoursename:PaymentcourseName,
  paycoursefee:PaymentcourseFee,
  paycoursestatus:PaymentcourseStatus,
  paycoursedate:PaymentcourseDate
};
console.log(obj);
fetch("http://192.168.8.142:8070/paymentmodel/addpayment",{
 method:"POST",
 headers:{
    'Content-type': 'application/json'},
    body:JSON.stringify(obj)}
    ).then((response) => {
      response.json().then(data => {
      console.log(data);

          if (response.status === 200) {
            console.log("payment made");
          }
      });
  });

  }

  return (


<div className='payblock'>

<label class="pcourseid">Course Id</label>
<input class="icourseid" type='number' id='cid'></input><br></br>

<label class="pcoursename">Course Name</label>
<select class="scoursename" type='text' id='cname'>

<option value="java">Java</option>
<option value="python">Python</option>
<option value="reactjs">ReactJs</option>
<option value="jp">Java & Python</option>
<option value="jr">Java & ReactJs</option>
<option value="pr">Python & ReactJs</option>
<option value="jpr">Java,Python & ReatJs</option>
</select><br></br>

<label class="pcoursefee">Course Fee</label>
<input class="icoursefee" type='text' id='cfee'></input><br></br>

<label class="pcoursestatus">Payment Status</label>
<select class="scoursestatus" type='text' id='cstatus'>

<option value="paid">Paid</option>
<option value="notpaid"> Not Paid</option>
</select><br></br>


<label class="pcoursedate">Payment Date</label>
<input class="icoursedate" type='date' id='cdate'></input><br></br>

<button className='paymentbutton'  onClick={()=>{Addpay()}}>ADD PAYMENT</button>
</div>



  )


}
export default Paymentform;
