import React, { useEffect, useState } from "react";
import ListSeason from "../Atom/ListSeason";
import Rekomendasi from "../Atom/Rekomendasi";
import SkeletonGabungan from "../Atom/skeleton/molekul/skeletonGabungan";
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
      <div className="flex flex-wrap lg:flex-auto w-full p-2 bg-white dark:bg-[#121212]">
        <div className="flex flex-wrap justify-center w-full text-center">
          <Rekomendasi></Rekomendasi>
        </div>
        <div className="w-full">
          <TopAnime value={"anime"} limit={"5"}></TopAnime>
          <TopAnime value={"manga"} limit={"5"}></TopAnime>
        </div>
        <div className="overflow-x-scroll scrollbar-hide">
          <ListSeason></ListSeason>
        </div>
      </div>
    </div>
  );
}
