import Image from "next/image";
export default function NotData({ style, fonts, value }: any) {
  return (
    <div className={style}>
      <div className="flex items-center drop-shadow-md">
        <h1 className={`font-bangers tracking-wide ${fonts}`}>{value}</h1>
        <Image
          src={"/assets/not-data.png"}
          alt="not-found"
          width={100}
          height={100}
          className={"w-24 h-auto ml-2"}
        ></Image>
      </div>
    </div>
  );
}
