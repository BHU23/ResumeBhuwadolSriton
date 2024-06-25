import React, { useEffect, useState } from 'react'//rcfe

export function ButtonToUp() {
    const [isVisible, setIsVisible] = useState(false);
    var x =0
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      };
      console.log(x++);
      console.log(window.scrollY, "vs", window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    };

  return (
    <button
      className={`fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md transition-transform duration-500 delay-1500 ${
        isVisible
          ? "transform translate-x-0 opacity-100 visible"
          : "transform translate-x-full opacity-0 hidden"
      }`}
      onClick={scrollToTop}
    >
      ↑
      </button>
  );
}
