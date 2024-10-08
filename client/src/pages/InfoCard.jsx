import React, { useEffect, useState } from "react";
import defaultpic from "/defaultProfilePic.png";

const InfoCard = () => {
  const [info, setInfo] = useState();

  const profile = async () => {
    if (localStorage.length > 0) {
      let store = await localStorage.getItem("userInfo");

      await setInfo(JSON.parse(store));

      console.log(info);
    }
  };

  useEffect(() => {
    profile();
  }, []);

  // console.log(info);
  // profile();

  return (
    <>
      {info && (
        <div className=" w-[300px] lg:h-fit space-y-4 py-5 bg-[#1D181E] px-6 text-white rounded-lg">
          <div className=" ">
            <div className="lg:flex   lg:items-center lg:justify-between">
              <div className="lg:flex   lg:space-x-5 lg:items-center lg:w-64">
                <img
                  // src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640%2C427"
                  src={info.profilePic}
                  alt="profile pic"
                  className="h-10 bg-[#322D33]  lg:items-center w-10 rounded-full"
                />

                <div className="lg:flex lg:flex-col justify-center ">
                  <p className="text-[14px] ">{info.userName}</p>
                  <span className="text-[10px] text-[#848385]">2 friends</span>
                </div>
              </div>
              <i class="fa-solid fa-user-plus text-xs"></i>
            </div>
          </div>
          <hr className="" />
          <div className=" lg:flex lg:flex-col space-y-4">
            <div className="lg:flex lg:space-x-4 mx-1">
              <i class="fa-solid fa-location-dot text-md text-normal w-8"></i>
              <p className="text-xs text-[#848385]">
                {`${info.city} , ${info.country}`}
              </p>
            </div>
            <div className="lg:flex lg:space-x-4 mx-1">
              <i class="fa-solid fa-suitcase text-md text-normal w-8"></i>
              <p className="text-xs text-[#848385]">{info.profession}</p>
            </div>
          </div>
          <hr />
          <div className="lg:flex lg:flex-col space-y-2">
            <div className="lg:flex justify-between w-full items-center">
              <p className="text-sm text-[#848385]">Number of posts</p>
              <p className="text-xs">231</p>
            </div>
            <div className="lg:flex justify-between w-full items-center">
              <p className="text-sm text-[#848385]">Number of friends</p>
              <p className="text-xs">2</p>
            </div>
          </div>
          <hr />
          <div className="lg:flex lg:flex-col space-y-4">
            <div className="lg:flex lg:justify-between">
              <div className="lg:flex space-x-3 items-center">
                <i class="fa-brands fa-twitter text-normal"></i>
                <p className="text-[14px]">Twitter</p>
              </div>
              <i class="fa-solid fa-pencil text-xs"></i>
            </div>
            <div className="lg:flex lg:justify-between">
              <div className="lg:flex space-x-3 items-center">
                <i class="fa-brands fa-linkedin text-normal"></i>
                <p className="text-[14px]">Linkedin</p>
              </div>
              <i class="fa-solid fa-pencil text-xs"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoCard;
