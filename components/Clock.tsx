"use client";

import React, { useEffect, useState } from "react";

export default function Clock({ className }: { className?: string }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    // Get the current date as soon as possible
    setInterval(() => setDate(new Date().toUTCString()), 1000);
  }, []);
  return (
    <div
      className={`relative text-sm flex items-center  sm:ml-auto ${className}`}
    >
      {date.slice(0, -3)}
    </div>
  );
}
