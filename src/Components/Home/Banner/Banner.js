import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner primary-font  h-[200px] lg:h-[300px] ">
        <h1 className="text-white  font-bold text-[1.7rem] md:text-[2.5rem]  lg:text-[5.5rem]  ">
          Experience the <span className="text-primary">Satisfying</span> taste
        </h1>
      </div>
    </div>
  );
};

export default Banner;
