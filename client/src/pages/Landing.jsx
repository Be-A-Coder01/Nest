import React from "react";
import InfoCard from "./InfoCard";
import Posts from "./Posts";
import FriendList from "./FriendList";

const Landing = () => {
  return (
    <div className="flex py-5 justify-center space-x-10">
      <InfoCard></InfoCard>
      <Posts></Posts>
      <FriendList></FriendList>
    </div>
  );
};

export default Landing;
