import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Authentication;
