import React from "react";
import Navbar from "./Navbar";
import "./MyAttendance.css"
function MyAttendance() {
  return (
    <div className="myattendance">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Navbar />
          </div>
          <div className="col percentage">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Slot</th>
                  <th scope="col">Category</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Faculty Name</th>
                  <th scope="col">Hours Conducted</th>
                  <th scope="col">Hours Absent</th>
                  <th scope="col">Percentage</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B</td>
                  <td>Theory</td>
                  <td>Service Oriented Architecture</td>
                  <td>Dr. S. Ramamoorthy (102506)</td>
                  <td>16</td>
                  <td>2</td>
                  <td>87.5%</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>Theory</td>
                  <td>Natural Language Processing</td>
                  <td>Mrs. Madhumitha K (102963)</td>
                  <td>13</td>
                  <td>0</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>G</td>
                  <td>Theory</td>
                  <td>Environmental Impact Assessment</td>
                  <td>Dr.P.Purushothoman (102529)</td>
                  <td>17</td>
                  <td>7</td>
                  <td>58.82</td>
                </tr>
                <tr>
                  <td>LAB</td>
                  <td>Practical</td>
                  <td>Minor Project</td>
                  <td>Dr.T.K.SivaKumar (100487)</td>
                  <td>12</td>
                  <td>2</td>
                  <td>83.33</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAttendance;
