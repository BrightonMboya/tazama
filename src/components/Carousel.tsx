// Importing utilities from 'fast-web-kit' and hooks from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState, FunctionComponent } from 'react';
import { array } from "fast-web-kit";
import Link from "next/link"
// Interface defining the structure of each slide in the carousel
interface Slide {
  imageSource: string;
  title: string;
  description: string;
}

// Interface for the props expected by the Carousel component
interface CarouselProps {
  slides: Slide[];
}

// Carousel component definition with CarouselProps as its expected props
const Carousel: FunctionComponent<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  console.log(slides, "jjajajajaj")

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        <button
          className="absolute left-5 top-1/2 z-10 h-2 w-2 p-3 md:h-6 md:w-6 md:p-6 bg-black bg-opacity-50 rounded-full cursor-pointer"
          onClick={prevSlide}
        >
          <svg className="w-2 md:w-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="24" height="18" viewBox="0 0 476 509" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M476 508.549L0 254.277L476 -2.65572e-05L334.263 254.277L476 508.549Z" fill="white" />
          </svg>
        </button>

        {array.sort(slides, "asc", "rank").map((slide, index) => (
          <AnimatePresence key={index}>
            {index === current && (
              <Link href={slide.link}>
              <motion.div
                initial={index < current ? { opacity: 0, x: "100%" } : { opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5
                }}
                key={index}
                className="w-full max-w-[65rem] relative mx-auto"
              >
                {/* Slide image */}
                <img src={`/assets/images/gallery/${slide.imageSource}`} alt={slide.title} className="w-full object-cover h-full max-h-[40rem]" loading="lazy" />
                {/* Overlay with slide title and description */}
                <div className="absolute bottom-0 left-0 px-2 py-1.5 sm:p-4 bg-black bg-opacity-50 w-full">
                  <h3 className="text-base sm:text-2xl md:text-3xl text-white mb-2">{slide.title}</h3>
                  <p className="text-xs sm:text-sm text-white font-now line-clamp-2">{slide.description}</p>
                </div>
              </motion.div>
            </Link>
            )}
          </AnimatePresence>
        ))}

        <button
          className="absolute right-5 top-1/2 z-10 h-2 w-2 p-3 md:h-6 md:w-6 md:p-6 bg-black bg-opacity-50 rounded-full cursor-pointer rotate-180"
          onClick={nextSlide}
        >
          <svg className="w-2 md:w-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="24" height="18" viewBox="0 0 476 509" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M476 508.549L0 254.277L476 -2.65572e-05L334.263 254.277L476 508.549Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;