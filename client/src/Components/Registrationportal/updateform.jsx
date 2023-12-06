import React, { useState } from "react";

const Updateform= () =>{

    const [active, setActive] = useState(false);

    function closeItem() {
      setActive(true);
    }
    function openItem() {
      setActive(false);
    }

    return(


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
    </div><div class="hspace"></div>

    <div class="lbl1">
        <label class="one">E-mail</label>
        <input class="onei" type='email' id='mail'></input>
    </div><div class="hspace"></div>

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
        <input class="onei" type='varchar' id='course'></input>
    </div>


<div class="addstudent">
    <button class="stdbtn" onClick={""}><b>UPDATE</b></button>
</div>
</div>

    )


}
export default Updateform;