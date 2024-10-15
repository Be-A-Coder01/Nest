import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/Authenticate/userSlice";
import nest from "../assets/Nest_logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const SignUp = () => {
  const [form, setForm] = useState();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  let userCredientials = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let formSubmit = async (e) => {
    e.preventDefault();
    let get = await dispatch(registerUser(form));
    if (get.payload.token) {
      // toast(`${get.payload.message}`);
      // await dispatch(addDetails(get.payload.userRegistered));
      localStorage.setItem(
        "userInfo",
        JSON.stringify(get.payload.userRegistered)
      );
      await localStorage.setItem(
        "userToken",
        JSON.stringify(get.payload.token)
      );
    }
    toast(`${get.payload.message}`);
  };

  return (
    <>
      <div className="h-[220vh]  lg:flex justify-between px-40">
        <div className="flex ">
          <img src={nest} alt="banner" className="h-60 mt-40" />
        </div>
        <div className=" lg:flex ">
          <form
            className="lg:flex flex-col h-fit  space-y-5 py-7 lg:justify-center lg:mt-32 lg:px-8 text-white  lg:bg-[#1D181E] rounded-md"
            autoComplete="on"
            onSubmit={handleSubmit()}
          >
            <input
              type="text"
              placeholder="username"
              name="userName"
              className="pl-5 w-80 py-1  outline-none bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="pl-5 w-80 py-1 outline-none  bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />
            <input
              type="number"
              placeholder="Ph no."
              name="number"
              className="pl-5 w-80 py-1  outline-none bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="pl-5 w-80 py-1  outline-none bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              className="pl-5 w-80 py-1  outline-none bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              className="pl-5 w-80 py-1  outline-none bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />
            <input
              type="text"
              placeholder="profession"
              name="profession"
              className="pl-5 w-80 py-1  outline-none bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />

            <input
              type="password"
              placeholder="password"
              name="password"
              className="w-80 pl-5 py-1  outline-none bg-[#322D33] text-sm rounded-sm"
              onChange={userCredientials}
            />
            <input
              className="py-1 outline-none px-7 rounded-2xl bg-blue-500 text-white"
              disabled={isSubmitting}
              type="submit"
              onClick={formSubmit}
              value="Register"
            />
            <p className="justify-center space-x-2 flex text-sm text-white">
              <span>Existing User ?</span>
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
};

export default SignUp;
