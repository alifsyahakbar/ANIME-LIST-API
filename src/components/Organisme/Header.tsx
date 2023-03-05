import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import NavMenu from "../Molekul/NavMenu";
import MenuBar from "../Atom/MenuBar";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
export default function Header({ HandleSearch }: any) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="">
      <Link href="/">
        <div className="flex justify-center w-full pt-2 hover:bg-[#484197] bg-[#484197]">
          <h1 className="relative flex drop-shadow-xl font-bangers text-4xl lg:text-5xl text-white text-center my-4 dark:text-white">
            Moshidesu<div className="animate-[bounce_1.5s_infinite]">.</div>Moe
            <Image
              src={logo}
              alt="logo"
              width={0}
              height={0}
              className="w-10 rotate-12 absolute -top-5 -left-8"
            ></Image>
          </h1>
        </div>
      </Link>
      <MenuBar HandleSearch={HandleSearch}></MenuBar>
      <NavMenu HandleSearch={HandleSearch}></NavMenu>
    </div>
  );
}
