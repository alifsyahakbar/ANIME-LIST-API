import axios from "axios";
import { useState } from "react";
import React from "react";
import Header from "../../components/Organisme/Header";
import Footer from "../../components/Organisme/Footer";
import Image from "next/image";
import { FaStar, FaCaretRight, FaAngleRight } from "react-icons/fa";
import Character from "../../components/Organisme/Character";
import ScrollToTop from "../../components/Atom/button/ScrollToTop";
import RelationSection from "@/components/Molekul/RelationSection";

export default function Details({ data }: any) {
  const [open, setOpen] = useState(false);

  const myLoader = ({ src, width }: any) => {
    return `${src}&w=${width}}`;
  };

  return (
    <div className="relative">
      <Header></Header>
      <div className=" bg-[#f0ebeb] dark:bg-[#2c2c2c] p-3 lg:pl-4">
        <h1 className="text-2xl lg:text-3xl font-serif font-bold">
          {data.title}
        </h1>
        <h3 className="lg:text-xl">{data.title_japanese}</h3>
      </div>
      <div className="flex lg:justify-between">
        <div className="flex">
          <div className="mr-3">
            <Image
              loader={myLoader}
              unoptimized={true}
              src={data.images.webp.image_url}
              alt={data.images.webp.image_url}
              width={100}
              height={100}
              className="w-[150px] lg:w-72 h-auto"
            ></Image>
          </div>
          <div className="text-start mt-2 lg:mt-4">
            <ul>
              <li>
                <h1 className="flex items-center font-bold text-xl lg:text-3xl gap-2 lg:gap-3">
                  <FaStar></FaStar> {data.score}{" "}
                  <span className="font-normal text-xs lg:text-lg">
                    ( {data.members} Members )
                  </span>
                </h1>
                <p className="text-lg lg:text-2xl lg:mt-2">
                  Ranked #<span className="font-bold">{data.rank}</span>
                </p>
              </li>
              <li className="lg:mt-2 leading-3">
                <h1 className="flex items-center font-bold mb-2 text-xl lg:text-3xl gap-2 lg:gap-3">
                  {data.type}{" "}
                  <span className="font-normal text-sm lg:text-lg">
                    ( {data.volumes == null ? "?" : data.volumes} Volumes )
                  </span>
                </h1>
              </li>
              <li>
                <h1 className="flex items-center font-bold text-xl lg:text-3xl gap-2 lg:gap-3">
                  <p className="text-lg lg:text-2xl lg:mt-2 hidden lg:flex">
                    Published{" "}
                    <span className="font-bold">{data.published.string}</span>
                  </p>
                </h1>
                <p className="text-lg lg:text-2xl lg:mt-2 font-bold">
                  {data.favorites}
                  <span className="font-normal"> Favorites</span>
                </p>
              </li>
            </ul>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center text-lg font-bold mt-2 lg:hidden"
            >
              <FaCaretRight></FaCaretRight>More Information
            </button>
            <div>
              {/* {open && (
                <MoreInformasi close={setOpen} data={data}></MoreInformasi>
              )} */}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex my-auto "></div>
      </div>
      <div className="flex items-center gap-2 px-4 py-2  bg-[#f0ebeb] dark:bg-black">
        <h4>Top</h4>
        <span>
          <FaAngleRight></FaAngleRight>
        </span>
        <h4 className="capitalize">
          {data?.genres.type === null ? "" : data.genres[0].type}
        </h4>
        <span>
          <FaAngleRight></FaAngleRight>
        </span>
        <h4 className="truncate">{data.title_japanese}</h4>
      </div>
      <div className="lg:flex">
        <div className="px-4 mb-4">
          <h1 className="text-xl lg:text-2xl font-bangers tracking-wide mt-2">
            Synopsis
          </h1>
          <p className="mt-2">{data.synopsis}</p>
        </div>
      </div>
      <div>
        <RelationSection anime={data} value={"manga"}></RelationSection>
      </div>
      <div>
        <Character value={data}></Character>
      </div>
      <div className="fixed bottom-5 right-4">
        <ScrollToTop></ScrollToTop>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getServerSideProps = async ({ query }: any) => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/manga/${query.id}/full`
  );
  const data = await res.data.data;

  return {
    props: {
      data,
    },
  };
};
