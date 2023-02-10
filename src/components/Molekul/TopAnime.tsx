import Image from "next/image";
import React from "react";
import star from "../../../public/star.svg";
import useSWR from "swr";
import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa";
import SkeletonTop from "../Atom/skeleton/atom/skeletonTop";

export default function TopAnime({ value, limit }: any) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/top/${value}?limit=${limit}`,
    fetcher
  );

  const loading = !data && !error;

  const router = useRouter();
  if (loading) {
    return <SkeletonTop></SkeletonTop>;
  }
  return (
    <div className={` ${value == "manga" ? "mt-8" : ""}`}>
      <div className="flex justify-between items-center mx-2">
        <h1 className=" pb-1 font-bold text-lg capitalize tracking-normal">
          Top {`${value}`}
        </h1>
        <button
          onClick={() => router.push(`/${value}`)}
          className="flex items-center text-sm font-bold drop-shadow-sm "
        >
          More <FaAngleRight size={15}></FaAngleRight>
        </button>
      </div>

      {data &&
        data?.data?.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className=" flex flex-row items-center px-1 my-2 py-1 mx-1  shadow-md rounded-md"
            >
              <div className="relative  w-[120px] h-auto">
                <Image
                  onClick={() => router.push(`/${value}/${data.mal_id}`)}
                  loader={myLoader}
                  unoptimized={true}
                  src={data.images.jpg.image_url}
                  alt={data.title}
                  width={100}
                  height={100}
                  className="rounded-md"
                ></Image>
                <div className="absolute px-1 top-0 left-0 backdrop-opacity-10 backdrop-invert bg-black/60  rounded-md">
                  <h1 className="text-white font-bangers text-lg mx-1">
                    {data.rank}
                  </h1>
                </div>
              </div>
              <div className="flex justify-between w-full mx-2">
                <div className="flex flex-col w-3/4 text-start">
                  <h1
                    onClick={() => router.push(`/${value}/${data.mal_id}`)}
                    className="text-md font-bold hover:underline"
                  >
                    {data.title}
                  </h1>
                  <span className="font-sans">
                    {value === "anime" ? (
                      <small>
                        {data.type} ( {data.episodes} Eps )
                      </small>
                    ) : (
                      <small>
                        {data.type} ({" "}
                        {data.volumes === null ? " ?" : `${data.volumes}`} Vol )
                      </small>
                    )}
                  </span>
                  <small className="font-sans">{data.members} Members</small>
                  <small className="lg:flex font-semibold font-sans">
                    {data.aired?.string}
                  </small>
                </div>
                <div className="flex items-center mx-1">
                  <Image
                    src={star}
                    alt="star-icon"
                    width={100}
                    height={100}
                    className="mr-1 w-4 h-4 drop-shadow-sm"
                  ></Image>
                  <h1 className="text-lg font-bold">{data.score}</h1>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
