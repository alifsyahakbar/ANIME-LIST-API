import React from "react";

export default function SkeletonTop() {
  return (
    <div className="mx-2">
      <div className="flex justify-between items-center mx-2">
        <h1 className="bg-gray-100 rounded-sm w-32 h-6 animate-pulse pb-1 font-bold text-lg capitalize tracking-normal"></h1>
        <button className="bg-gray-100 w-14 h-5 rounded-sm animate-pulse flex items-center text-sm font-bold drop-shadow-sm "></button>
      </div>

      {[1, 2, 3, 4, 5].map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center px-1 my-2 py-1 mx-1   rounded-md"
          >
            <div className="bg-gray-100 w-28 h-28 rounded-md animate-pulse"></div>
            <div className="flex justify-between w-full mx-2">
              <div className="flex flex-col w-3/4 text-start">
                <h1 className="bg-gray-100 w-40 h-5 rounded-sm animate-pulse text-md font-bold hover:underline"></h1>
                <span>
                  <p className="bg-gray-100 w-16 h-4 rounded-sm mt-2 animate-pulse"></p>
                </span>
                <p className="bg-gray-100 w-32 h-4 rounded-sm mt-2 animate-pulse"></p>
                <p className="bg-gray-100 w-28 h-4 rounded-sm mt-2 animate-pulse"></p>
              </div>
              <div className="flex items-center mx-1">
                <h1 className="bg-gray-100 w-10 h-4 rounded-sm mt-1 animate-pulse"></h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
