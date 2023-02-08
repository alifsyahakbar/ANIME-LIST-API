import Image from "next/image";
import loading from "../../../../public/assets/loading.png";

export default function Loading2({ title }: any) {
  return (
    <div className="flex justify-center text-center items-center w-full h-72 mb-8">
      <h1 className="font-bangers text-black text-xl lg:text-2xl drop-shadow-md dark:text-white mr-1">
        {title}
      </h1>
      <Image
        priority
        src={loading}
        alt="loading"
        width={100}
        height={100}
        className="w-20 h-20 drop-shadow-md"
      ></Image>
    </div>
  );
}
