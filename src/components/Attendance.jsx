import React from "react";
import "./Attendance.css"
function Attendance(){
    return <div className="attendance">
        <p className="warning">* Attendance cannot be changed once submitted</p>
        <form>
            <label htmlFor="">Choose date</label>
            <input type = "date"></input> <br /> <br />
            <a className = "btn btn-danger" href = "/Subjects">Slots and Subjects</a>
        </form>
    </div>
}

export default Attendance