import Head from "next/head";
import Header from "../../components/Organisme/Header";
import Footer from "../../components/Organisme/Footer";
import { useState } from "react";
import ResultSearch from "../../components/Organisme/ResultSearch";
import All from "../../components/Organisme/All";

export default function Home() {
  const [search, setSearch] = useState("");

  const HandleSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setSearch(inputQuery);
  };

  return (
    <>
      <Head>
        <title>MoshiDesu.Moe | API Anime</title>
        <meta name="description" content="Generated by Api Anime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header HandleSearch={HandleSearch}></Header>
      <h1 className="font-bangers text-2xl ml-6 lg:ml-12 mt-6 mb-2">
        - Anime -
      </h1>
      <hr />
      {search ? (
        <ResultSearch search={search} value={"anime"}></ResultSearch>
      ) : (
        <All value={"anime"} limit={""}></All>
      )}
      <Footer></Footer>
    </>
  );
}
