import React from "react"
import "./Navbar.css"
import logo from "./profile-pic.png"
function Navbar(){
    return <div>
<div id = "navbar" className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <img className="logo" src={logo} alt="" /> <br />
  <h4 className="name">Sagar Pandey</h4>
  <br></br>
        <p>RA2011003010089</p>
        <br></br>
        <p>Department : CTECH</p>
        <br></br>
        <p>Section : B1</p>
        <br></br>
        <p>Overall Attendance : 82.4%</p> <br />
        <a style={{color: "white" , textDecoration : "underline"}} href="/Dashboard">Mark Attendance</a>  <br /> <br />
        <a style={{color: "white" , textDecoration : "underline"}} href="/MyAttendance">My Attendance</a> <br /> <br />
        <a href="/">Logout</a>
  </div>
</div>
    </div>
}

export default Navbar