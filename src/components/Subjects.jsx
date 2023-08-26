import React from "react";
import Navbar from "./Navbar";
import Attendance from "./Attendance";
import SubjectCard from "./SubjectCard";
function Subjects() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Navbar />
          </div>
          <div className="col">
            <Attendance />
            <div className="subjects">
              <br></br>
              <p>Day Order : 3</p>
            </div>
            <SubjectCard slot = "10:40 AM to 11:30 AM" name = "D slot"/> <br />
            <SubjectCard slot = "11:35 AM to 12:25 PM" name = "B slot" /> <br />
            <SubjectCard slot = "1:25 PM to 3:10 PM" name = "Minor Project Lab" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
