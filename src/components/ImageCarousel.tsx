import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      image: '/images/madhuprabha.png',

    },
    {
      image: '/images/certification.jpeg',

    },
    {
      image: '/images/Vikas Sir.jpeg',

    },
    {
      image: '/images/carazol5.JPG',

    },
    {
      image: '/images/all member .JPG',

    },
    {
      image: '/images/Prajktaproject.JPG',

    },
    {
      image: '/images/carazol6.JPG',

    }
  ];

  // Removed automatic scroll - now only manual navigation

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX - touchStartX.current > 50) {
      prevSlide();
    } else if (touchStartX.current - touchEndX > 50) {
      nextSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
  className="relative top-0 w-full h-64 sm:h-80 md:h-[500px] lg:h-screen overflow-hidden carousel-laptop"

      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full flex items-items-start  justify-center">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill object-center rounded-none transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      ))}

      {/* Navigation Buttons - responsive */}
      <button
        onClick={prevSlide}
        className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 md:p-3 rounded-full transition-colors duration-200 z-10 backdrop-blur-sm"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 md:p-3 rounded-full transition-colors duration-200 z-10 backdrop-blur-sm"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
      </button>

      {/* Dots - responsive */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;








