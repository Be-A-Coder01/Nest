import React, { useEffect } from "react";
import FriendListSection from "./FriendListSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../features/userInfo/friendList";

const FriendList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);

  const { userProfileDetails } = useSelector((state) => state.userFriends);

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
      <div className="px-5  py-3 bg-[#1D181E] rounded-lg">
        <p className=" pb-5 text-white">Friend List</p>
        {userProfileDetails && (
          <div className="lg:flex lg:flex-col space-y-3">
            {userProfileDetails.userList.map((user) => (
              <FriendListSection userData={user}></FriendListSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendList;
