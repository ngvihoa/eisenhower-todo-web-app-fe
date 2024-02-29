import { setActive } from "@/context-redux/feats/active-slice";
import { toggleMenu } from "@/context-redux/feats/menu-slice";
import { AppDispatch, useAppSelector } from "@/context-redux/store";
import { ActiveList } from "@/lib/data";
import { ActiveId } from "@/lib/type";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

export default function NavBar() {
  const name = useAppSelector((state) => state.active.value.name);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClick = (id: ActiveId) => {
    dispatch(setActive(id));
    const winSize = window.innerWidth;
    if (winSize < 640) dispatch(toggleMenu());
  };

  return (
    <ul className="flex flex-col gap-1">
      {ActiveList.map((item, index) => (
        <Link
          href={item.link}
          key={item.name + index}
          className={`p-2 transition-all ease rounded-md relative ${
            name === item.name
              ? "bg-slate-200/70"
              : "hover:bg-slate-200/70 active:scale-95"
          }`}
          onClick={() => handleOnClick(item.id as ActiveId)}
        >
          {item.name}
          {name === item.name && (
            <span
              className="absolute w-1 h-1/2 -left-0.5 top-1/2 
              -translate-y-1/2 bg-blue-600 rounded-sm block"
            ></span>
          )}
        </Link>
      ))}
    </ul>
  );
}
