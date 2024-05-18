const Title = ({ data }) => {
  return (
    <div className="text-center">
      <h1 className="font-bold primary-font text-4xl md:text-5xl mt-3 mb-3 pt-2 pb-2 text-gray-700">
        {data}
      </h1>
    </div>
  );
};

export default Title;
