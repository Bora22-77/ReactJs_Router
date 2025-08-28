import React, { useEffect } from "react";
import { Carousel } from "flowbite";

const Banner = () => {

  useEffect(() => {
    const carouselElement = document.getElementById("default-carousel");
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 3000, // 3 seconds
        wrap: true,
        ride: "carousel"
      });
    }
  }, []);

  return (
    <div>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">

        {/* Carousel wrapper */}
        <div className="relative h-30 overflow-hidden rounded-lg md:h-96">

          {/* Item 1 */}
          <div className="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rMadI-Zz9l0vd44f0/000000-00000-0brjqx0oev_thumb.jpg "
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 1"
            />
          </div>

          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rMadI-Zz9l0vd44f0/000000-00000-tiuxi26-hz_thumb.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 2"
            />
          </div>

          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rMadI-Zz9l0vd44f0/000210-70070-yzwylclft_thumb.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 3"
            />
          </div>

        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>

        {/* Controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </span>
        </button>

      </div>
    </div>
  );
};

export default Banner;
