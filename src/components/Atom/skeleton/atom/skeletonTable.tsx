import React from "react";

export default function SkeletonTable() {
  return (
    <div>
      <div className="pb-4 mb-8">
        <div className="flex justify-between items-center m-2">
          <h1 className=" pb-1 font-bold text-lg capitalize tracking-normal bg-gray-100 w-28 h-6 rounded-sm animate-pulse"></h1>
          <button className="flex items-center text-sm font-bold drop-shadow-sm bg-gray-100 w-14 h-6 rounded-sm animate-pulse"></button>
        </div>
        <table className="table-auto w-full text-center animate-pulse bg-white dark:bg-black [&>tbody>*:nth-child(even)]:bg-[#f8f8f8] dark:[&>tbody>*:nth-child(even)]:bg-[#121212]">
          <thead className="  ">
            <tr className="bg-gray-100 text-white font-bold animate-pulse">
              <th className="py-1 px-4  h-8"></th>
              <th className=""></th>
              <th className="py-1 px-4"></th>
            </tr>
          </thead>
          <tbody className="">
            {[1, 2, 3, 4, 5].map((data: any, index: number) => {
              return (
                <tr key={index} className="">
                  <td className="relative p-2 font-bangers text-3xl lg:text-4xl lg:w-32">
                    <div className="flex flex-col items-center text-center justify-center w-6 h-auto"></div>
                  </td>
                  <td className="">
                    <div className="flex justify-start items-center m-1 lg:p-2 w-14 h-20  cursor-pointer rounded-sm hover:opacity-90">
                      <div className="flex text-start flex-col ml-4">
                        <h1 className="font-bold font-md lg:text-lg hover:underline cursor-pointer"></h1>
                        <small></small>
                        <small className="hidden lg:flex"></small>
                        <small></small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center mr-1 w-4 h-4 drop-shadow-sm">
                      <h1 className="text-lg font-bold">{data.score}</h1>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
