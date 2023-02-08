import React, { useEffect, useState } from "react";
import All from "./All";
import TableList from "../Atom/TableList";
import ListSeason from "../Atom/ListSeason";
import RelationSection from "../Molekul/RelationSection";
import Rekomendasi from "../Atom/Rekomendasi";
import Loading from "../Atom/skeleton/Loading";
import SkeletonRekomendasi from "../Atom/skeleton/atom/skeletonRekomendasi";
import Gabungan from "../Atom/skeleton/molekul/skeletonGabungan";
import SkeletonTable from "../Atom/skeleton/atom/skeletonTable";
import SkeletonGabungan from "../Atom/skeleton/molekul/skeletonGabungan";
import Welcome from "../Atom/loading/welcome";
import TopAnime from "../Molekul/TopAnime";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return <SkeletonGabungan></SkeletonGabungan>;
  }

  return (
    <div>
      {/* {isLoading ? (
        <Loading></Loading>
      ) : ( */}
      <div className="flex flex-wrap lg:flex-auto w-full p-2 bg-white dark:bg-[#121212]">
        <div className="flex flex-wrap justify-center w-full text-center">
          <Rekomendasi></Rekomendasi>
        </div>
        <div className="w-full">
          {/* <div className="w-full hidden lg:flex">
            <TableList value={"anime"} limit={"5"}></TableList>
            <TableList value={"manga"} limit={"5"}></TableList>
          </div> */}
          <TopAnime value={"anime"} limit={"5"}></TopAnime>
          <TopAnime value={"manga"} limit={"5"}></TopAnime>
        </div>
        <div className="overflow-x-scroll scrollbar-hide">
          <ListSeason></ListSeason>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
