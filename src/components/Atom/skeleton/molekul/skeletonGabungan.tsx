import React from "react";
import SkeletonRekomendasi from "../atom/skeletonRekomendasi";
import SkeletonTable from "../atom/skeletonTable";
import SkeletonTop from "../atom/skeletonTop";

export default function SkeletonGabungan() {
  return (
    <div className="w-full">
      <SkeletonRekomendasi></SkeletonRekomendasi>
      <SkeletonTop></SkeletonTop>
    </div>
  );
}
