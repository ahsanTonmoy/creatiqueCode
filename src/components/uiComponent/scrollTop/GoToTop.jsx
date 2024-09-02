'use client'
import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="top-btn shadow-xl">
          <div className=" bg-[#ff3294] top-btn" onClick={goToBtn}>
            <BsArrowUp className="top-btn--icon" />
          </div>

        </div>
      )}
    </>


  );
};





export default GoToTop; 