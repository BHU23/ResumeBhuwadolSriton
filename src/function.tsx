import React, { useEffect } from "react";

const ScrollToSection = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
  offset: number = 0
) => {
  event.preventDefault();

  if (window.location.pathname !== "/") {
    sessionStorage.setItem("scrollTo", href);
    sessionStorage.setItem("scrollOffset", offset.toString());
    window.location.href = `http://localhost:5173`;
  } else {
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};

// ฟังก์ชันใช้เพื่อตรวจสอบและเลื่อนไปยังตำแหน่งที่บันทึกไว้
const useScrollOnLoad = () => {
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    const scrollOffset = parseInt(
      sessionStorage.getItem("scrollOffset") || "0"
    );

    if (scrollTo) {
      const target = document.querySelector(scrollTo);
      if (target instanceof HTMLElement) {
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - scrollOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        sessionStorage.removeItem("scrollTo");
        sessionStorage.removeItem("scrollOffset");
      }
    }
  }, []);
};

export { ScrollToSection, useScrollOnLoad };
