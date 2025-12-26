import Link from "next/link";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-8xl">
      <h2>L</h2> <span className="animate-spin">⭐</span>
      <h2>ading</h2>
    </div>
  );
};

export default loading;
