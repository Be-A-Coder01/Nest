import React from "react";
import PostCards from "./PostCards";
import "./style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, addPostImage, fetchPost } from "../features/Posts/postsSlice";

const Posts = () => {
  const [content, setContent] = useState();
  const [postImage, setPostImage] = useState();

  const dispatch = useDispatch();

  let fetchPostData = async () => {
    let data = await dispatch(fetchPost());
    console.log(data);
  };

  fetchPostData();

  let handlePostContent = async (e) => {
    setContent({ content: `${e.target.value}` });
    console.log(content);
  };

  let handlePostImage = async (event) => {
    setPostImage(event.target.files[0]);
  };

  let handlePostSubmit = async (e) => {
    if (content && !postImage) {
      let get = await dispatch(addPost(content));
    } else if (postImage) {
      e.preventDefault();
      const formData = new FormData();
      await formData.append("postImage", postImage);

      dispatch(addPostImage(formData));
      setPostImage("");
    }
    // const result = await axios.post(
    //   "http://localhost:7000/postsImage",
    //   formData,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: JSON.parse(localStorage.getItem("userToken")),
    //     },
    //   }
    // );
  };
  return (
    <div className="  lg:flex lg:flex-col space-y-5 w-[600px]">
      <div className="px-5 py-4 space-y-3 bg-[#1D181E] rounded-lg">
        <div className="lg:flex justify-center space-x-7">
          <img
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640%2C427"
            alt="profilePic"
            className="h-10 lg:items-center w-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind.."
            name="newPost"
            className="w-3/4 rounded-full px-3 outline-none text-white bg-[#322D33]"
            onChange={handlePostContent}
          />
        </div>
        <hr />
        <div className="lg:flex justify-evenly  py-1">
          <div className=" text-[#848385] lg:flex lg:justify-start space-x-32 px-10  w-full">
            <div className="lg:flex lg:items-center space-x-1">
              <form action="">
                <label
                  htmlFor="uploadBtn"
                  className="text-xs lg:flex lg:items-center"
                  onChange={handlePostImage}
                >
                  <i class="fa-regular fa-image text-sm mr-1"></i>
                  Image
                  <input
                    type="file"
                    name="image"
                    className="hidden"
                    id="uploadBtn"
                  />
                </label>
              </form>
            </div>
            <div className="lg:flex lg:items-center space-x-1">
              <i class="fa-solid fa-paperclip text-sm"></i>
              <p className="text-xs">Attachment</p>
            </div>
            <div className="lg:flex lg:items-center space-x-1">
              <i class="fa-solid fa-microphone text-sm"></i>
              <p className="text-xs">Audio</p>
            </div>
          </div>
          <button
            className="text-white bg-blue-500 rounded-full px-4 text-xs"
            onClick={handlePostSubmit}
          >
            Post
          </button>
        </div>
      </div>
      <div className="lg:flex lg:flex-col space-y-10">
        <PostCards></PostCards>
        <PostCards></PostCards>
      </div>
    </div>
  );
};

export default Posts;
