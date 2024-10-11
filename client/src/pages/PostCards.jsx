import React from "react";

const PostCards = ({ data }) => {
  console.log(data.postImage);
  return (
    <div className="bg-[#1D181E]  lg:flex lg:flex-col space-y-2 rounded-lg py-5">
      <div className="lg:flex    text-white px-14 lg:justify-between items-center">
        <div className="lg:flex lg:space-x-5 lg:items-center lg:w-64">
          <img
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640%2C427"
            alt="profile pic"
            className="h-8 lg:items-center w-8 rounded-full"
          />
          <div className="lg:flex lg:flex-col justify-center ">
            <p className="text-[12px] ">Shruti patel</p>
            <span className="text-[8px] text-[#848385]">Mumbai ,India</span>
          </div>
        </div>

        <i class="fa-solid fa-user-plus text-[8px]"></i>
      </div>
      <div className="text-white  px-14 ">
        {/* <p className="text-xs my-2">finallllly! PEACE</p> */}
        {data.content ? (
          <p className="text-sm my-2">{data.content}</p>
        ) : (
          <div className="h-[500px] mt-4">
            <img
              src={`http://localhost:7000/${data.postImage}`}
              alt="post"
              className="h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCards;
