//Main Biryani page
import Biryani from "@/Components/Biryani/Biryani";
//Banner page
import Banner from "@/Components/Home/Banner/Banner";
import Title from "@/Components/Reuseable/Title/Title";
//Biryani data
import { data } from "@/Database/data";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Title data={"Our Special Items"} />
      <div className=" container mx-auto">
        <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3 xl:grid-cols-4 xl:gap-[1.9rem] py-12">
          {data.map((product, index) => {
            return <Biryani product={product} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
