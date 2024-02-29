"use client";

// import { ColorBoard } from "@/lib/data";
import React from "react";

const ColorBoard = {
  p1: "bg-[#FFE4E9]",
  p2: "bg-[#D4F1EF]",
  p3: "bg-[#BDF0CB]",
  p4: "bg-[#5E72C0]",
};
export default function TaskBoard() {
  const colorClass = ColorBoard["p2"];
  return (
    <section className="w-full h-full sm:w-4/5">
      <div className={`${colorClass} w-full h-full rounded-ss-xl p-4 pt-6`}>
        Content
      </div>
    </section>
  );
}
