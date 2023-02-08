import { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "../Organisme/Sidebar";
import FormSearch from "./FormSearch";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuBar({ HandleSearch }: any) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenuBar = () => {
    setOpen(!open);
  };

  useEffect(() => setMounted(true), []);
  const { asPath } = useRouter();

  const [positionHeader, setpositionHeader] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 125) {
        setpositionHeader("w-full fixed z-20 top-0 bg-white shadow-lg");
      } else {
        setpositionHeader("");
      }
    });
  });

  return (
    <div className={`${positionHeader}`}>
      <div className="relative z-50  py-1 lg:hidden w-full">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 5 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full"
            >
              <Sidebar></Sidebar>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between my-2 items-center">
          <div className=" ml-4 rounded-md">
            <button
              onClick={toggleMenuBar}
              className={`text-[#484197] drop-shadow-lg  p-1 rounded-md ${
                open ? "rotate-90 " : "-rotate-30"
              } transition-all duration-150`}
            >
              {open ? (
                <MdOutlineClose size={25}></MdOutlineClose>
              ) : (
                <CgMenuLeftAlt size={25}></CgMenuLeftAlt>
              )}
            </button>
          </div>
          <div>
            <FormSearch
              HandleSearch={HandleSearch}
              title={`Cari ${asPath === "/manga" ? "manga" : "anime"}`}
              styleInput={"px-4 py-1 rounded-l-xl text-black"}
              styleButton={
                "px-3 py-1 rounded-r-xl bg-slate-800 hover:bg-slate-100 text-white hover:text-black"
              }
            ></FormSearch>
          </div>
        </div>
      </div>
    </div>
  );
}
