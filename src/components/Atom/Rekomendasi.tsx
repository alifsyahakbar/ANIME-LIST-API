import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import NotData from "./NotData";
import Loading from "./skeleton/Loading";
import SkeletonRekomendasi from "./skeleton/atom/skeletonRekomendasi";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Rekomendasi() {
  const router = useRouter();

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}&w=${width}`;
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/5114/recommendations`,
    fetcher
  );

  var tunggu = !data && !error;

  if (tunggu) {
    return (
      <div className="w-full">
        <SkeletonRekomendasi></SkeletonRekomendasi>
      </div>
    );
  }

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <h1 className="text-lg text-start lg:text-2xl mx-2 mt-2 font-bold pt-2">
        Rekomendasi Anime
      </h1>
      <div className="flex overflow-x-scroll dark:bg-black scrollbar-hide">
        {data?.data?.map((data: any, index: number) => {
          return (
            <div key={index} className="py-2 mr-2">
              <div
                onClick={() => router.push(`/anime/${data.entry.mal_id}`)}
                className="relative overflow-hidden shadow-lg hover:scale-105 w-36 h-auto mb-6 ml-2 cursor-pointer ease-out duration-200"
              >
                <Image
                  loader={myLoader}
                  unoptimized={true}
                  src={data.entry.images.webp.image_url}
                  alt={data.entry.title}
                  width={100}
                  height={100}
                  className="w-full h-[220px] bg-cover rounded-lg hover:shadow-lg ease-out duration-200 "
                ></Image>
                <div className=" ml-1">
                  <h1 className="w-full border-l-[3px] border-[#867ee0] bg-gradient-to-b from-transparent to-black absolute text-start px-1  text-white bottom-1 text-md font-bold hover:underline">
                    {data.entry.title}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
