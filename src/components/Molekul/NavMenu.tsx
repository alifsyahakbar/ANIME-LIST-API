import { useState, useEffect } from "react";
import FormSearch from "../Atom/FormSearch";
import DarkMode from "../Atom/button/DarkMode";
import ListMenu from "../Atom/ListMenu";
import { useRouter } from "next/router";

export default function NavMenu({ HandleSearch }: any) {
  const { asPath } = useRouter();

  const [positionHeader, setpositionHeader] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 126) {
        setpositionHeader("w-full fixed top-0");
      } else {
        setpositionHeader("");
      }
    });
  });

  return (
    <>
      <div
        className={` ${positionHeader} z-40 lg:justify-between items-center px-14  text-white hidden lg:flex`}
      >
        <ListMenu dislay={"flex"}></ListMenu>
        <div className="flex items-center">
          <DarkMode></DarkMode>
          <FormSearch
            HandleSearch={HandleSearch}
            title={`Cari ${asPath == "/manga" ? "manga" : "anime"}`}
            styleInput={"px-4 py-1 rounded-l-md text-black"}
            styleButton={
              "px-3 py-1 rounded-r-md bg-slate-100 hover:bg-slate-800 text-white hover:text-white"
            }
          ></FormSearch>
        </div>
      </div>
    </>
  );
}
