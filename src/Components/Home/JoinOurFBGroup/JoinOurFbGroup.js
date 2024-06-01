"use client";
import AnimatedCounter from "@/utils/AnimatedCounter/AnimatedCounter";
import Image from "next/image";

const JoinOurFbGroup = () => {
  const targetCount = 70580;
  const duration = 6000;
  return (
    <div className="mt-10 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[60rem] mx-auto shadow-xl p-5 rounded-md">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* left side */}
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <Image
              src="https://nealschaffer.com/wp-content/uploads/rubaitul-azad-Yl-vTtA8CCo-unsplash.jpeg"
              alt="Facebook Group"
              width={300}
              height={300}
              className="w-[10rem] h-[7rem] rounded-r-full"
            />
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold">
                Our Official Facebook Group
              </h3>
              <p className="text-lg font-semibold">
                Join with the{" "}
                <AnimatedCounter
                  targetCount={targetCount}
                  duration={duration}
                />
                + people
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="mt-4 lg:mt-0">
            <button className="rounded-md gradient p-2 ps-6 pe-6">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurFbGroup;
