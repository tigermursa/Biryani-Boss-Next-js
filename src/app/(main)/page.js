//Main Biryani page
import Biryani from "@/Components/Biryani/Biryani";
//Banner page
import Banner from "@/Components/Home/Banner/Banner";
import JoinOurFbGroup from "@/Components/Home/JoinOurFBGroup/JoinOurFbGroup";
import OurDeliveryPartner from "@/Components/Home/OurDeliveryPartner/OurDeliveryPartner";
import Testimonial from "@/Components/Home/Testimonial/Testimonial";
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
      </section>
      <section>
        <OurDeliveryPartner />
      </section>
      <section>
        <JoinOurFbGroup />
      </section>
      <section className="container mx-auto">
        <Testimonial />
      </section>
    </>
  );
};

export default HomePage;
