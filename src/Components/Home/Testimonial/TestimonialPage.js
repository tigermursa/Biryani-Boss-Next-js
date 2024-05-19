"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import testimonialsData from "@/Database/testimonialData";
import Image from "next/image";

// Initialize Swiper core components
SwiperCore.use([Pagination, Autoplay]);

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true}
      className="border-8 border-red-700"
    >
      <div className="border-8 border-green-700 w-[80%]">
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center mx-auto">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
                width={300}
                height={300}
              />
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
              <p className="text-center mt-4">{testimonial.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default TestimonialSlider;
