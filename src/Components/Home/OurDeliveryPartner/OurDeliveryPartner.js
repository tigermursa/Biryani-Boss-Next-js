"use client";
import { useEffect } from "react";
import Title from "@/Components/Reuseable/Title/Title";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const OurDeliveryPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Title data={"Our Delivery Partner"} />
      <Image
        src={"/logo/foodpanda.png"}
        alt="food panda logo"
        width={1200}
        height={800}
        className="flex mx-auto w-[25rem] mt-5"
      />
      <div className="container flex justify-center items-center mx-auto mt-5">
        <div>
          {/* Left side */}
          <div className="flex">
            <div
              className="left-div"
              data-aos="fade-right" // AOS animation for left div
            >
              <Image
                src={
                  "https://i0.wp.com/sethisfy.com/wp-content/uploads/2023/10/foodpanda-dining-min.jpg?fit=2560%2C1440&ssl=1"
                }
                alt="food panda's pink panda easting some food"
                className="rounded-br-full "
                width={820}
                height={580}
              />
            </div>
            <div
              className="right-div"
              data-aos="fade-left" // AOS animation for right div
            >
              <Image
                src={
                  "https://cdn.techinasia.com/cloudinary/transformations/wp-content/uploads/2022/02/1644557575_2e0afb145bb8446d5036e5c1e2d941f0_v1644557575_xlarge.webp"
                }
                alt="Our delivery partner food panda's delivery man going for delivery image"
                className="rounded-tl-full"
                width={780}
                height={520}
              />
            </div>
          </div>
          {/* Right side */}
        </div>
      </div>
    </>
  );
};

export default OurDeliveryPartner;
