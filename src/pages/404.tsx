import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Notfound() {
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-[500px] flex justify-center items-center drop-shadow-md">
        <Image
          src={"/assets/not-found.png"}
          alt={"not-found"}
          width={100}
          height={100}
          className={"w-32 lg:w-44"}
        ></Image>
        <div className="font-bangers text-2xl lg:text-6xl text-center text-black drop-shadow-md ">
          <h1 className="text-4xl lg:text-7xl">404</h1>
          <h1>Page Not Found</h1>
          <button
            onClick={() => router.back()}
            className="text-sm lg:text-lg text-white bg-slate-800 rounded-md px-6 py-1 mt-1 hover:bg-slate-700"
          >
            Back
          </button>
        </div>
      </div>
      <div className="flex-1 text-center m-4 p-2 text-slate-800 dark:text-white">
        <h2 className="font-bangers text-lg lg:text-3xl">Moshidesu.Moe</h2>
        <a href="https://github.com/alifsyahakbar">
          <small className="font-serif font-bold hover:underline">
            &copy;2023 Vivy
          </small>
        </a>
      </div>
    </div>
  );
}
