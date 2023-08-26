import React from "react"
import Navbar from "./Navbar"
import Attendance from "./Attendance"
function Dashboard(){
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Navbar />
                </div>
                <div className="col">
                    <Attendance />
                </div>
            </div>
        </div>
    </div>
}

export default Dashboard