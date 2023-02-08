import React from "react";

export default function TailerVideo({ data, width, height }: any) {
  return (
    <>
      <div className="shadow-lg h-52 lg:w-[700px] lg:h-[400px]">
        <iframe
          width={width}
          height={height}
          src={data.trailer.embed_url}
          title="Tailer"
          allowFullScreen
        />
      </div>
    </>
  );
}
