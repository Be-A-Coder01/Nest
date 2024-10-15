import React from "react";

const FriendListSection = ({ userData }) => {
  return (
    <div className="lg:flex text-white  lg:justify-between items-center">
      <div className="lg:flex  lg:space-x-5 lg:items-center lg:w-64">
        <img
          src={userData.profilePic}
          alt="profile pic"
          className="h-8 lg:items-center w-8 rounded-full"
        />
        <div className="lg:flex lg:flex-col justify-center ">
          <p className="text-[12px] ">{userData.name}</p>
          <span className="text-[8px] text-[#848385]">
            {userData.profession}
          </span>
        </div>
      </div>

      <i class="fa-solid fa-user-plus text-[8px]"></i>
    </div>
  );
};

export default FriendListSection;
