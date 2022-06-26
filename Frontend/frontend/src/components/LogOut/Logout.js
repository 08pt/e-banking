import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginForm from "../Customer/LoginForm";

function LogOut() {
  return (
    <div>
      {/* //render to the login page */}
      <LoginForm/>
    </div>
  );
}
export default LogOut;
