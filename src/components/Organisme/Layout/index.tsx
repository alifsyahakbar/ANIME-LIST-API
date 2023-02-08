import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}
