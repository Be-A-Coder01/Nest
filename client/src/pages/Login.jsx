import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../features/Authenticate/userSlice";
import nest from "../assets/Nest_logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [form, setForm] = useState();

  const dispatch = useDispatch();
  const {
    formState: { errors, isSubmitting },
  } = useForm();

  let userCredentials = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let get = await dispatch(loginUser(form));
    console.log(get, "get from login");
    if (get.payload.token) {
      localStorage.setItem("userInfo", JSON.stringify(get.payload.checkUser));
      await localStorage.setItem(
        "userToken",
        JSON.stringify(get.payload.token)
      );
      toast(`${get.payload.message}`);
      // navigate("/");
    } else {
      toast("Please enter correct detail");
    }
  };

  return (
    <>
      <div className="h-screen lg:flex justify-between px-40">
        <div className="flex ">
          <img src={nest} alt="banner" className="h-60 mt-40" />
        </div>
        <div className=" lg:flex ">
          <form className="lg:flex flex-col lg:h-1/2  space-y-5 lg:justify-center lg:mt-32 lg:px-8 lg:bg-[#1D181E] rounded-md">
            <input
              type="email"
              placeholder="email"
              name="email"
              className="pl-5 w-80 py-1 bg-[#322D33] rounded-sm"
              onChange={userCredentials}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              className="w-80 pl-5 py-1 bg-[#322D33] rounded-sm"
              onChange={userCredentials}
            />
            <input
              className="py-1 px-7 rounded-2xl bg-blue-500 text-white"
              type="submit"
              value="Submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            />
            <p className="justify-center space-x-2 flex text-sm text-white">
              <span>New User ?</span>
              <Link to="/" className="text-blue-500">
                Register
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

export default Login;
