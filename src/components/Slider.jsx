import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-screen w-full m-auto group overflow-hidden">
      <div className="flex transition-transform ease-out duration-500">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${slide})`,
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.3s ease-out",
            }}
            className="w-full h-full bg-center bg-cover absolute top-0 left-0"
          >
            <span className="w-full h-full absolute bg-950 opacity-60"></span>
          </div>
        ))}
      </div>
      <button
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-1000/20 text-0 cursor-pointer"
        onClick={prevSlide}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-1000/20 text-0 cursor-pointer"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Slider;
