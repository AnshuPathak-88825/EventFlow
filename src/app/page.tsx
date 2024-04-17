"use client"
import Image from "next/image";
import Navbar from "./section/Navbar";
import { useEffect, useState } from "react";
import { FetchData } from "./utils/api";
export default function Home() {
  const [user,setUserData]=useState(null);
  useEffect(()=>{
    
    const getuserData=async()=>{
      try {
      const response=await FetchData("/api/me");
      setUserData(response);
        
      } catch (error) {
        setUserData(null)
      }
    }
    getuserData();
  },[])
  return (
    <main className="">
      <Navbar user={user} />
    </main>
  );
}
