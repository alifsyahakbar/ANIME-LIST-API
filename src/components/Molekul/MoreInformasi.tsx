import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect } from "react";
import ListInformasi from "../Atom/ListInformasi";

export default function MoreInformasi({ close, data }: any) {
  return (
    <div className="fixed z-50 left-0 top-0 backdrop-blur-sm bg-white/30 w-full h-full shadow-lg">
      <div className="bg-white absolute top-14 h-auto pb-4 w-screen text-black">
        <div className="flex justify-between items-center px-4 py-2 border-b-2">
          <h1 className="text-start text-xl font-bangers ">Information</h1>
          <button onClick={() => close(false)} className="text-black">
            <MdOutlineClose size={20}></MdOutlineClose>
          </button>
        </div>
        <ListInformasi data={data}></ListInformasi>
        <div className="text-center mt-4">
          <button
            onClick={() => close(false)}
            className="bg-black text-white rounded-md px-9 py-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
