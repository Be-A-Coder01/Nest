import React from "react";
import Landing from "./Landing";
import Authentication from "./Authentication";
import Login from "./Login";
import SignUp from "./SignUp";

import { Routes, Route } from "react-router-dom";

const RoutePages = () => {
  return (
    <div className="bg-[#0F0A10]">
      <Routes>
        <Route path="/nest" element={<Landing />}></Route>
        {/* <Route path="/authentication" element={<Authentication />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<SignUp />}></Route>
        {/* <Route path="/profile" element={}></Route> */}
      </Routes>
    </div>
  );
};

export default RoutePages;
