"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const JoinOurFbGroup = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const targetCount = 70580; // Replace with your actual member count
  const duration = 6000; // Duration for the animation in milliseconds
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        const bottom = containerRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if the component is in the viewport
        if (top < windowHeight && bottom > 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(targetCount / (duration / 100)); // Increment amount

    // Start the animation when the component is in view
    if (isInView) {
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetCount) {
          setCurrentCount(targetCount);
          clearInterval(timer);
        } else {
          setCurrentCount(start);
        }
      }, 100);

      return () => clearInterval(timer); // Cleanup
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="mt-10 mb-10">
      <div className="max-w-[60rem] mx-auto shadow-xl p-5 rounded-md">
        <div className="flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center gap-5">
            <Image
              src="https://nealschaffer.com/wp-content/uploads/rubaitul-azad-Yl-vTtA8CCo-unsplash.jpeg"
              alt=""
              width={300}
              height={300}
              className="w-[10rem] h-[7rem] rounded-r-full"
            />
            <div>
              <h3 className="text-2xl font-bold">
                Our Official Facebook Group
              </h3>
              <p className="text-lg font-semibold">
                Join with the {currentCount.toLocaleString()}+ people
              </p>
            </div>
          </div>
          {/* right side */}
          <div>
            <button className="rounded-md gradient p-2 ps-6 pe-6">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurFbGroup;
