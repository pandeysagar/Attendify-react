import { useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signup">
      <div className="form">
        <div>
          <h1>Welcome to Attendify</h1>
        </div>

        <form>
            <br></br>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
          <br></br> <br></br>

          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
            placeholder="Enter your password"
          />
          <br></br> <br></br>
          <a className="btn button" href = "/Dashboard">
            Submit
          </a>
        </form>
      </div>
      </div>
  );
}

// import React , {useState} from "react";

// function SignUp() {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     return (
//     <div>
//       <h1>Attendify</h1>
//       <form>
//         <input value = {email} type = "email" placeholder="Enter you email id"></input>
//         <input value = "password" type = "text" placeholder="Enter your password"></input>
//         <button>Sign Up</button>
//       </form>
//     </div>
//   );
// }

export default SignUp;
