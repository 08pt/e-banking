import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginForm from "../Customer/LoginForm";

function LogOut() {
  return (
    <div>
      <ul>
        <Link to="/logout">Log out</Link>
      </ul>
      <Routes>
        <Route path="/logout" element={<LoginForm/>}></Route>
      </Routes>
    </div>
  );
}
export default LogOut;
