"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonialData } from "@/Database/testimonialData";
import Title from "@/Components/Reuseable/Title/Title";

const Testimonial = () => {
  return (
    <>
      <div className="">
        <Title data={"Our Client's word"} />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          // For phones (up to 767px)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index} className="">
            <div className=" flex justify-center">
              <div className=" w-[] md:w-[50rem] lg:w-[60rem] font-sans  text-black p-8 rounded-md  my-8 md:shadow-lg   cursor-pointer transition-transform transform-gpu hover:rotate-y-10">
                <div className="flex flex-col md:flex-row justify-center items-center h-full gap-10 ">
                  <div className="flex flex-col relative ">
                    <div className="  w-[15rem]">
                      <div className=" text-primary text-7xl md:text-8xl rotate-12  flex-wrap-reverse absolute -top-16 md:-top-20 pt-2 ">
                        <FaQuoteLeft />
                      </div>
                      <Image
                        src={testimonial.img}
                        className="w-[250px] h-[200px] rounded-md   mx-auto   object-cover image-filter  "
                        alt="profile picture"
                        width={170}
                        height={170}
                      />
                    </div>
                  </div>

                  <div className=" text-center  ">
                    <h1 className=" text-gray-900  text-3xl font-bold mb-5 ">
                      &quot;{testimonial.title}&quot;
                    </h1>
                    <p className="font-semibold text-gray-600 text-lg leading-relaxed  text-balance  ">
                      {testimonial.comment}
                    </p>
                    <div className="">
                      <div className=" mt-14 flex flex-col justify-end items-end">
                        <h4 className="text-2xl font-bold text-gray-800">
                          {testimonial.fullName}
                        </h4>
                        <h4 className="text-base font-medium">
                          {testimonial.profession}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
