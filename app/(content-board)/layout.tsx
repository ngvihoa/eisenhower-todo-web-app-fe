"use client";

import { useAppSelector } from "@/context-redux/store";
import { ActiveId } from "@/lib/type";
import React, { useEffect, useState } from "react";

export default function ContentBoard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [idColor, setIdColor] = useState<ActiveId | null>(null);
  const id = useAppSelector((state) => state.active.value.id);

  useEffect(() => {
    setIdColor(id);
  }, [id]);

  return (
    <section className="w-full h-full sm:w-4/5">
      <div className={`bg-${idColor}-1 w-full h-full rounded-ss-xl p-4 pt-6`}>
        {children}
      </div>
    </section>
  );
}
