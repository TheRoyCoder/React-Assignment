import React from "react";
import W_icon from "../assets/w-icon.png";
import image from "../assets/image.png";
import Bar from "../assets/Bar.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import { RiTimer2Line } from "react-icons/ri";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 h-[631px] w-[68px]">
      <div className="py-5 mx-1 ">
        <img
          className=" p-2 h-[40px] w-auto cursor-pointer hover:bg-gray-300 duration-300 rounded-lg"
          src={W_icon}
        />
      </div>
      <div className="pl-[11px] mx-[4px] text-4xl hover:bg-gray-300 duration-300 rounded-lg">
        <FaBarsStaggered className="p-2 cursor-pointer" />
      </div>
      <div className="pl-[11px] mt-8 mx-[4px] text-4xl hover:bg-gray-300 duration-300 rounded-lg">
        <FiBell className="p-2 cursor-pointer" />
      </div>
      <div className="pl-[11px] my-5 mx-[4px] text-4xl   blur-[1px]">
        <RiTimer2Line className="p-2  " />
      </div>
      <div className="pl-[11px] my-5 mx-[4px] text-4xl   blur-[1px]">
        <MdOutlineAssignmentTurnedIn className="p-2  " />
      </div>
      <div className="pl-[11px] my-5 mx-[4px] text-4xl   blur-[1px]">
        <IoEyeOutline className="p-2 " />
      </div>
      <div className="pl-[11px] my-5 mx-[4px] text-4xl  blur-[1px]">
        <IoPeopleOutline className="p-2 " />
      </div>
      <img className="pl-[14px]" src={Bar} />
      <div className="mt-[74px] ml-2">
        <img className=" cursor-pointer h-[50px] w-auto" src={image} />
      </div>
    </div>
  );
};

export default Sidebar;
