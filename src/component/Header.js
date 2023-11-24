import React from "react";
import call_icon from "../assets/call_icon.png";
import user_icon from "../assets/user_icon.png";
import { MdChevronLeft } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { TfiBlackboard } from "react-icons/tfi";
import { MdOndemandVideo } from "react-icons/md";
import { FaChalkboard } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { GrDocumentVideo } from "react-icons/gr";

const Header = () => {
  return (
    <div>
      <div className="flex space-x-[540px] mt-6">
        <div className="flex">
          <MdChevronLeft className="bg-gray-200 ml-6 text-3xl p-1 rounded-lg cursor-pointer hover:bg-gray-400 duration-300" />
          <h1 className="ml-2 text-2xl font-bold">Basic Mathematics 101</h1>
        </div>
        <div className="flex">
          <div className="flex cursor-pointer">
            <img className=" h-[40px] w-auto " src={call_icon} />
            <h1 className="mt-2 font-bold">Call Teacher</h1>
          </div>
          <div className="ml-4 flex cursor-pointer">
            <img className="h-[40px] w-auto " src={user_icon} />
            <h1 className="mt-2 font-bold">Support</h1>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] mt-3 ml-6 rounded-full py-1 px-2 bg-gray-200">
        <div className="flex ml-4 cursor-pointer rounded-full hover:bg-white duration-300 py-1 px-5">
          <SiGoogleclassroom className="mt-1" />
          <h1 className="ml-1">Classroom</h1>
        </div>
        <div className="flex ml-6 cursor-pointer rounded-full hover:bg-white duration-300 py-1 px-5">
          <TfiBlackboard className="mt-1" />
          <h1 className="ml-1">Whiteboard</h1>
        </div>
        <div className="flex ml-6 cursor-pointer rounded-full bg-white duration-300 py-1 px-5">
          <MdOndemandVideo className="mt-1" />
          <h1 className="ml-1">Videos</h1>
        </div>
        <div className="flex ml-6 cursor-pointer rounded-full hover:bg-white duration-300 py-1 px-5">
          <FaChalkboard className="mt-1" />
          <h1 className="ml-1">Side Show</h1>
        </div>
        <div className="flex ml-6 cursor-pointer rounded-full hover:bg-white duration-300 py-1 px-5">
          <GrDocumentText className="mt-1" />
          <h1 className="ml-1">Documents</h1>
        </div>
        <div className="flex ml-6 cursor-pointer rounded-full hover:bg-white duration-300 py-1 px-5">
          <GrDocumentVideo className="mt-1" />
          <h1 className="ml-1">Doc.Cam</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
