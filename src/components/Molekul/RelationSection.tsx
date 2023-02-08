import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import NotData from "../Atom/NotData";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function RelationSection({ anime, value }: any) {
  const router = useRouter();

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}&w=${width}}`;
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/${value}/${anime.mal_id}/recommendations`,
    fetcher
  );

  return (
    <div>
      {(data?.data || []).length ? (
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
                    className="w-full h-[220px] bg-cover rounded-lg hover:shadow-lg ease-out duration-200"
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
      ) : (
        <div className="flex justify-center">
          <NotData
            value={`Tidak ada rekomendasi ${value}`}
            fonts={"text-lg"}
          ></NotData>
        </div>
      )}
    </div>
  );
}
