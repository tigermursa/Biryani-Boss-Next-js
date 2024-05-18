//Main Biryani page
import Biryani from "@/Components/Biryani/Biryani";
//Banner page
import Banner from "@/Components/Home/Banner/Banner";
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
    </>
  );
};

export default HomePage;
