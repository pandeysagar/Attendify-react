import React from "react";
import ReactDom from "react-dom";
import App from "./App"
import { BrowserRouter as Router, Routes, 
    Route, Redirect,Switch} from "react-router-dom";
import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Subjects from "./components/Subjects";
import MyAttendance from "./components/MyAttendance";
ReactDom.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
          </Route>
          <Route path = "/Dashboard" element = {<Dashboard />}></Route>
          <Route path = "/Subjects" element = {<Subjects />}></Route>
          <Route path = "/MyAttendance" element = {<MyAttendance />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );