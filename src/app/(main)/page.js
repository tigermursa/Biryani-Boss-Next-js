import Biryani from "@/Components/Biryani/Biryani";
import Banner from "@/Components/Home/Banner/Banner";
import { data } from "@/Database/data";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <div className=" container mx-auto">
        <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3 xl:grid-cols-4 xl:gap-[1.9rem] py-12">
          {data.map((product) => {
            return <Biryani product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
