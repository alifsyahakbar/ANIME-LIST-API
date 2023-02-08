import Image from "next/image";
import TopHeader from "../Atom/MenuBar";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import NavMenu from "../Molekul/NavMenu";
import MenuBar from "../Atom/MenuBar";
// import AOS from "aos";

export default function Header({ HandleSearch }: any) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="">
      <Link href="/">
        <div
          className="flex justify-center w-full pt-2 hover:bg-[#484197] bg-[#484197] rounded-b-3xl"
          data-aos="fade-up"
        >
          <h1 className="flex drop-shadow-xl font-bangers text-4xl lg:text-5xl text-white text-center my-4 dark:text-white">
            Moshidesu<div className="animate-[bounce_1.5s_infinite]">.</div>Moe
          </h1>
        </div>
      </Link>
      <MenuBar HandleSearch={HandleSearch}></MenuBar>
      <NavMenu HandleSearch={HandleSearch}></NavMenu>
    </div>
  );
}
