import React from "react";

const FriendList = () => {
  return (
    <div className="w-[300px]">
      <div className="bg-[#1D181E] lg:flex lg:flex-col space-y-2 px-5 py-4 rounded-lg mb-10">
        <div className="lg:flex lg:justify-between">
          <p className="text-xs text-white">Sponsored</p>
          <p className="text-[10px] text-[#848385]">Create Ad</p>
        </div>
        <div>
          <img
            src="https://static1.squarespace.com/static/5c4f6ba1e2ccd1ee6075495d/5c5b8862e4966b048bc2c495/60d0adb7814fdc4e8e51748c/1658165826524/pharmaceutical-cosmetic-skin-care-products.jpg?format=1500w"
            alt="productPhoto"
            className="rounded-lg"
          />
        </div>
        <div className="text-[#848385] text-xs">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nesciunt adipisci delectus, qui, eius voluptate sunt assumenda fugit
            libero ullam dignissimos provident veritatis neque ratione!
          </p>
        </div>
      </div>
      <div className="px-5 py-4 bg-[#1D181E] rounded-lg">
        <p className="py-3 text-white">Friend List</p>
        <div className="lg:flex lg:flex-col space-y-3">
          <div className="lg:flex     text-white  lg:justify-between items-center">
            <div className="lg:flex  lg:space-x-5 lg:items-center lg:w-64">
              <img
                src="https://www.shutterstock.com/image-photo/profile-picture-indian-man-wearing-260nw-1200996607.jpg"
                alt="profile pic"
                className="h-8 lg:items-center w-8 rounded-full"
              />
              <div className="lg:flex lg:flex-col justify-center ">
                <p className="text-[12px] ">Joseph D'souza</p>
                <span className="text-[8px] text-[#848385]">
                  Product Manager
                </span>
              </div>
            </div>

            <i class="fa-solid fa-user-plus text-[8px]"></i>
          </div>
          <div className="lg:flex     text-white  lg:justify-between items-center">
            <div className="lg:flex  lg:space-x-5 lg:items-center lg:w-64">
              <img
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="profile pic"
                className="h-8 lg:items-center w-8 rounded-full"
              />
              <div className="lg:flex lg:flex-col justify-center ">
                <p className="text-[12px] ">Shruti patel</p>
                <span className="text-[8px] text-[#848385]">
                  Data Scientist
                </span>
              </div>
            </div>

            <i class="fa-solid fa-user-plus text-[8px]"></i>
          </div>
          <div className="lg:flex     text-white  lg:justify-between items-center">
            <div className="lg:flex  lg:space-x-5 lg:items-center lg:w-64">
              <img
                src="https://thumbs.dreamstime.com/b/confident-indian-business-woman-21143444.jpg"
                alt="profile pic"
                className="h-8 lg:items-center w-8 rounded-full"
              />
              <div className="lg:flex lg:flex-col justify-center ">
                <p className="text-[12px] ">Poorvika Rajesh</p>
                <span className="text-[8px] text-[#848385]">
                  Data Scientist
                </span>
              </div>
            </div>

            <i class="fa-solid fa-user-plus text-[8px]"></i>
          </div>
          <div className="lg:flex     text-white  lg:justify-between items-center">
            <div className="lg:flex  lg:space-x-5 lg:items-center lg:w-64">
              <img
                src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
                alt="profile pic"
                className="h-8 lg:items-center w-8 rounded-full"
              />
              <div className="lg:flex lg:flex-col justify-center ">
                <p className="text-[12px] ">Spofia singh</p>
                <span className="text-[8px] text-[#848385]">Artist</span>
              </div>
            </div>

            <i class="fa-solid fa-user-plus text-[8px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
