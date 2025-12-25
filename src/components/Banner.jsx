"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      console.log(router);
      router.push("/dashboard");
    }
  };
  return (
    <div className="text-center space-y-4 bg-linear-60 to-yellow-50 from-yellow-950 py-4 text-black">
      <h2 className="text-4xl">Welcome to Dev Story</h2>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-700 text-white rounded cursor-pointer hover:bg-sky-950 duration-200"
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
