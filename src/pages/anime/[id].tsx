import axios from "axios";
import React from "react";
import Header from "../../components/Organisme/Header";
import Footer from "../../components/Organisme/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import MyTab from "../../components/Molekul/MyTab";
import { FaArrowLeft } from "react-icons/fa";

export default function Details({ data }: any) {
  const myLoader = ({ src, width }: any) => {
    return `${src}&w=${width}}`;
  };

  const router = useRouter();

  return (
    <div>
      <Header></Header>
      <div className="relative">
        <button
          onClick={() => router.back()}
          className="absolute ml-2 px-2 py-1 rounded-sm top-0 left-0"
        >
          <FaArrowLeft size={20}></FaArrowLeft>
        </button>
        <div className="w-full flex flex-col items-center justify-center text-center mt-4">
          <Image
            priority
            loader={myLoader}
            unoptimized={true}
            src={data.images.webp.image_url}
            alt={data.title}
            width={100}
            height={100}
            className="bg-slate-200 w-52 rounded-md h-auto bg-cover bg-center"
          ></Image>
          <div className=" px-8 mt-3">
            <h1 className="font-bold text-xl">{data.title}</h1>
            <h3 className="font-normal text-sm mt-2">{data.duration}</h3>
          </div>
        </div>
        <div className="flex justify-around lg:justify-center lg:space-x-20 items-center mt-4 text-center">
          <div>
            <h1 className="text-md font-bold text-[#484197]">+{data.score}</h1>
            <h3>Rate</h3>
          </div>
          <div>
            <h1 className="text-md font-bold">{data.episodes}</h1>
            <h3>Eps</h3>
          </div>
          <div>
            <h1 className="text-md font-bold">
              {data?.studios?.map((a: any) => a.name)}
            </h1>
            <h3>Studio</h3>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-[#202020] h-auto mx-2 px-4 py-6 mt-6 rounded-xl">
          <h4 className="font-bold text-lg mb-2">Synopsis</h4>
          <p>{data.synopsis}</p>
        </div>
        <div className="flex mt-8">
          <MyTab data={data}></MyTab>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getServerSideProps = async ({ query }: any) => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/anime/${query.id}/full`
  );
  const data = await res.data.data;

  return {
    props: {
      data,
    },
  };
};
