//Main Biryani page
import Biryani from "@/Components/Biryani/Biryani";
//Banner page
import Banner from "@/Components/Home/Banner/Banner";
import JoinOurFbGroup from "@/Components/Home/JoinOurFBGroup/JoinOurFbGroup";
import TestimonialSlider from "@/Components/Home/Testimonial/TestimonialPage";

import Title from "@/Components/Reuseable/Title/Title";

const HomePage = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <Title data={"Our Special Items"} />
        <Biryani />
        <JoinOurFbGroup />
        <TestimonialSlider />
      </section>
    </>
  );
};

export default HomePage;
