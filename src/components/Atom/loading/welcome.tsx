import Image from "next/image";
import React from "react";
import welcome from "../../../public/assets/not-data.png";

export default function Welcome() {
  return (
    <div className="">
      <div className="px-4 h-screen flex-col flex justify-center text-center duration-300 transition-opacity">
        <h1 className="text-xl text-black">
          Welcome to{" "}
          <span className="font-bangers text-3xl">Moshidesu.moe !</span>
        </h1>
      </div>
    </div>
  );
}
