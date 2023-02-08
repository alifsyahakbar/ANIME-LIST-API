import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  });

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {showButton && (
        <button
          className="bg-white dark:bg-[#121212] border border-black rounded-md p-1"
          onClick={toTop}
        >
          <FaArrowUp size={25} className=""></FaArrowUp>
        </button>
      )}
    </div>
  );
}
