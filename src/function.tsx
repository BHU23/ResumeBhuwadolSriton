import React from "react";

const ScrollToSection = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string
) => {
  event.preventDefault();
  const target = document.querySelector(href);
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

export default ScrollToSection;
