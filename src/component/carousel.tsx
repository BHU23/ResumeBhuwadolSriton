import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
type CarouselProps = {
  slides: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Carousel({
  slides,
  autoSlide = true,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current, autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative h-full rounded-xl ">
      <div
        className="flex transition ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            alt={`slide ${index}`}
            className="w-full h-auto"
          />
        ))}
        <img src="../data/banna_cafe_img/7.png" alt="Example Image" />
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white md:px-10 px-6 text-3xl">
        <button onClick={previousSlide}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="md:h-6 md:w-6 h-3 w-3 p-2 bg-slate-500 rounded-full opacity-70"
          />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="md:h-6 md:w-6 h-3 w-3 p-2 bg-slate-500 rounded-full opacity-70"
          />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={`circle-${i}`}
            onClick={() => setCurrent(i)}
            className={`rounded-full w-3 h-3 cursor-pointer md:h-5 md:w-5 ${
              i === current ? "bg-b1" : "bg-black opacity-20"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
