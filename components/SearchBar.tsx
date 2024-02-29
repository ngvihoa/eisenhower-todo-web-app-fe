"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function SearchBar() {
  const [text, setText] = useState("");
  return (
    <div
      className="w-full p-1 px-2 bg-white border-[0.5px] border-black/10 border-b-black/30 shadow-sm rounded-md
    border-b-2 focus-within:border-b-purple-600 flex justify-between"
    >
      <input
        type="text"
        className="w-full outline-none border-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text !== "" && (
        <AiOutlineClose
          color="gray"
          size={24}
          className="mr-1 hover:bg-gray-100 rounded-md p-0.5"
          onClick={() => setText("")}
        />
      )}
      <HiOutlineMagnifyingGlass color="gray" size={24} />
    </div>
  );
}
