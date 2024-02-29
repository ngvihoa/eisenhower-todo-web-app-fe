"use client";

import Header from "@/components/Header";
import Matrix from "@/components/Matrix";
import SideControl from "@/components/SideControl";
import TaskBoard from "@/components/TaskBoard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const isAuth = true;
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (isAuth) router.push("/p1");
  }, []);
}
