"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/banner-photo.jpg",
    title: "Upgrade Your Skills Today 🚀",
    subtitle:
      "Learn from industry experts and build your future with SkillSphere",
  },
  {
    image: "/banner2.jpg",
    title: "Learn Anytime, Anywhere 💻",
    subtitle: "Access world-class courses from your home",
  },
  {
    image: "/banner3.jpg",
    title: "Build Your Career With Us 🎯",
    subtitle: "Master real-world skills and get job-ready",
  },
];
const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="h-124"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative bg-cover bg-center h-124"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {slide.title}
              </h1>

              <p className="text-lg md:text-2xl max-w-2xl">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
