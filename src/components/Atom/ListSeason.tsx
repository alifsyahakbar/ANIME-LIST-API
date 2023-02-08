import React from "react";
import useSWR from "swr";
import Image from "next/image";
import NotData from "./NotData";
import SkeletonRekomendasi from "./skeleton/atom/skeletonRekomendasi";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function ListSeason() {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/seasons/upcoming?limit=5`,
    fetcher
  );

  const loading = !data && !error;

  if (loading) {
    return (
      <div className="w-full">
        <SkeletonRekomendasi></SkeletonRekomendasi>
      </div>
    );
  }

  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <h1 className="text-lg lg:text-2xl mx-2 my-2 font-bold pt-2">
        Upcoming Anime Season
      </h1>
      {(data?.data || []).length ? (
        <div className="flex overflow-x-scroll dark:bg-black scrollbar-hide">
          {data?.data?.map((data: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  alert(`Oops!.. Tidak ada detail Anime ${data.title}`);
                }}
                className="py-2 mr-2"
              >
                <div className="relative overflow-hidden shadow-lg mb-6 hover:scale-105 w-36 h-auto ml-2 cursor-pointer ease-out duration-200">
                  <Image
                    loader={myLoader}
                    unoptimized={true}
                    src={data.images.jpg.image_url}
                    alt={data.title}
                    width={100}
                    height={100}
                    className="w-full h-[220px] bg-cover rounded-lg hover:shadow-lg ease-out duration-200"
                  ></Image>
                  <div className="ml-1">
                    <h1 className="w-full border-l-[3px] border-[#867ee0] bg-gradient-to-b from-transparent to-black absolute text-start px-1  text-white bottom-1 text-md font-bold hover:underline">
                      {data.title}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // <div className="flex justify-center">
        //   <NotData
        //     value={`Tidak ada rekomendasi Anime`}
        //     fonts={"text-lg"}
        //   ></NotData>
        // </div>
        ""
      )}
    </div>
  );
}
