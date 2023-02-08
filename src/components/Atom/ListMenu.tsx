import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ListMenu({ dislay, list }: any) {
  const array = ["home", "anime", "manga", "community", "about"];

  const { asPath } = useRouter();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className={`${dislay} container font-bangers tracking-wide text-lg`}
        >
          {array.map((data: any, index: number) => (
            <motion.li
              key={index}
              className={`${list} transition-all duration-150 ease-out `}
              variants={item}
            >
              <Link href={data === "home" ? "/" : `/${data}`}>
                <h1
                  className={`hover:text-black py-3 px-6  ${
                    asPath === `/${data}`
                      ? "bg-white dark:bg-[#121212] text-black dark:text-white"
                      : ""
                  }`}
                >
                  {data}
                </h1>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}
