"use client";

import React, { useEffect } from "react";
import Avatar from "./Avatar";
import Clock from "./Clock";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/context-redux/store";
import { closeMenu, toggleMenu } from "@/context-redux/feats/menu-slice";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="w-full overflow-hidden rounded-r-md rounded-l-md h-[88px] sm:h-14">
      <div className="w-full bg-slate-100 relative py-[5px] px-4 flex items-center">
        <div className="font-bold text-3xl pl-2">EMatrX</div>
        <div
          className="p-1 hover:bg-gray-200 ml-4 sm:hidden rounded-md 
        active:scale-95 cursor-pointer transition focus:bg-gray-200"
          onClick={handleToggleMenu}
        >
          <FiMenu
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </div>
        <Clock className="hidden sm:block" />
        <Avatar />
      </div>
      <div className="w-full bg-gray-500 py-1.5 px-4 flex items-center text-white sm:hidden">
        <Clock />
      </div>
    </header>
  );
}
