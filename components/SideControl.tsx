import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { AppDispatch, useAppSelector } from "@/context-redux/store";
import { useDispatch } from "react-redux";
import { closeMenu } from "@/context-redux/feats/menu-slice";

export default function SideControl() {
  const isOpen = useAppSelector((state) => state.menu.value.isOpen);
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`absolute z-20 top-0 left-0 transition-all duration-300 ease-out -translate-x-full
      h-full w-full sm:relative sm:w-1/5 sm:block sm:translate-x-0 sm:transition-none ${
        open ? "translate-x-0" : ""
      }`}
    >
      <div className="w-3/4 sm:w-full bg-slate-100 p-2 h-full">
        <div className="flex flex-col gap-4 px-4">
          <SearchBar />
          <NavBar />
        </div>
      </div>
    </div>
  );
}
