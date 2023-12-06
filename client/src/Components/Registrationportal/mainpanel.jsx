import React, { useEffect, useState } from "react";
import Entryform from "./entryform";
import Updateform from "./updateform";
import "./entryform.css";
import registration from "../Video/registration.mp4";
import Paymentform from "./paymentform";
import Courseform from "./courseform";

const Mainpanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const getStudents = () => {
    fetch("http://192.168.8.142:8070/student/")
      .then((response) => response.json())
      .then((json) => setUsers(json))

      .finally(() => {
        setLoading(false);
      });
  };

  const deleteStudent = () => {
    let studentDelete = document.getElementById("delid").value;
    fetch("http://192.168.8.142:8070/student/delete/" + studentDelete, {
      method: "DELETE",
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [upModal, setUpModal] = useState(false);
  const [payModal, setPayModal] = useState(false);
  const [courseModal, setCourseModal] = useState(false);

  const click = () => {
    setShowModal(true);
  };

  const update = () => {
    setUpModal(true);
  };

  const addpayment = () => {
    setPayModal(true);
  };

  const courses = () => {
    setCourseModal(true);
  };

  const close = () => {
    {
      setShowModal(false);
    }
    {
      setUpModal(false);
    }
    {
      setPayModal(false);
    }
    {
      setCourseModal(false);
    }
  };

  return (
    <div class="main-area ">
      <div class="title">STUDENT REGISTRATION PORTAL</div>

      <div class="create">
        <input class="inp" type="varchar" id="delid"></input>
        <button
          class="deletebutton"
          onClick={() => {
            deleteStudent();
          }}
        >
          Delete
        </button>
        <button
          class="createbutton"
          id="showstudents"
          onClick={() => {
            getStudents();
          }}
        >
          GET STUDENTS
        </button>
        -
        <button class="createbutton" onClick={() => click()}>
          ADD STUDENT
        </button>
        -
        <button class="createbutton" id="refresh" onClick={() => close()}>
          REFRESH
        </button>
        <button
          class="updatebutton"
          onClick={() => {
            update();
          }}
        >
          UPDATE
        </button>
        <input class="inp" type="number"></input>
      </div>

      <div className="subcatagory">
        <button
          className="studentpayment"
          onClick={() => {
            addpayment();
          }}
        >
          {" "}
          ADD PAYMENT
        </button>

        <button
          className="coursedetails"
          onClick={() => {
            courses();
          }}
        >
          ADD LESSONS
        </button>
      </div>

      <div className="Profile">
        {loading ? (
          <div className="mainpanelwelcome">
            <video
              src={registration}
              autoPlay
              loop
              muted
              className="videoplay"
            />
            Include the caption here
          </div>
        ) : (
          <>
            <div className="areaviewx">
              {showModal && <Entryform />}
              {payModal && <Paymentform />}
              {courseModal && <Courseform />}

              <table border={1} class="maintable">
                <tr class="fnt">
                  <th>ID </th>
                  <th>NAME </th>
                  <th>ADDRESS </th>
                  <th>CONTACT </th>
                  <th>NIC </th>
                  <th>MAIL </th>
                  <th>USERNAME </th>
                  {/* <th>PASSKEY      </th> */}
                  <th>COURSE </th>
                  <th>REFERENCE </th>
                </tr>
                <th></th>

                {users.map((user) => (
                  <tr key={user.id} class="subtopics">
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.address}</th>
                    <th>{user.contact}</th>
                    <th>{user.nic}</th>
                    <th>{user.mail}</th>
                    <th>{user.username}</th>
                    {/* <th>{user.passkey}</th> */}
                    <th>{user.course}</th>
                    <th>{user._id}</th>
                  </tr>
                ))}
              </table>
            </div>
          </>
        )}
      </div>

      {upModal && <Updateform />}
    </div>
  );
};
export default Mainpanel;
