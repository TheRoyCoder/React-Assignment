import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiWechatLogoBold } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";

const Body = () => {
  return (
    <div className="flex">
      <div className="h-full">
        <Sidebar />
      </div>
      <div>
        <Header />
        <div>
          <div className="flex">
            <div>
              <div className="mt-6 ml-6">
                <img className="h-[140px] w-auto cursor-pointer" src={user_1} />
                <img className="h-auto w-[176px] cursor-pointer" src={user_2} />
              </div>
              <div className="ml-[43px] mt-5">
                <div className="flex">
                  <div className="">
                    <IoVideocamOutline className="bg-gray-200 hover:bg-gray-400 cursor-pointer duration-300 p-2 text-4xl rounded-lg" />
                    <p>Cam</p>
                  </div>
                  <div className="ml-3">
                    <MdOutlineKeyboardVoice className="bg-gray-200 hover:bg-gray-400 cursor-pointer duration-300 p-2 text-4xl rounded-lg" />
                    <p>Mic</p>
                  </div>
                  <div className="ml-3">
                    <FaRegShareFromSquare className="bg-gray-200 hover:bg-gray-400 cursor-pointer duration-300 p-2 text-4xl rounded-lg" />
                    <p>Share</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="">
                    <PiWechatLogoBold className="bg-gray-200 hover:bg-gray-400 cursor-pointer duration-300 p-2 text-4xl rounded-lg" />
                    <p>Chat</p>
                  </div>
                  <div className="ml-3">
                    <PiSignOut className="bg-blue-600 cursor-pointer text-white p-2 text-4xl rounded-lg" />
                    <p>Leave</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-6 mt-6">
              <iframe
                width="886"
                height="470"
                src="//www.youtube.com/embed/HeQX2HjkcNo?si=bdstgyIOX3YASS_W"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
