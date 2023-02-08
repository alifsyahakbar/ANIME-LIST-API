import React from "react";

export default function SkeletonRekomendasi() {
  return (
    <div>
      <div className="overflow-x-hidden ml-1 mt-4">
        <h1 className=" mx-2 mt-2 pt-2 h-6 w-44 rounded-sm bg-gray-100 animate-pulse shadow-sm"></h1>
        <div className="flex overflow-x-hidden mt-2 dark:bg-black scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data: any, index: number) => {
            return (
              <div key={index} className="py-2 mr-2">
                <div className="relative animate-pulse overflow-hidden rounded-md  w-36 h-[200px] bg-gray-100 mb-6 ml-2 cursor-pointer ease-out duration-200"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
