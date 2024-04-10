const Category = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) => {
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
          {["popular", "kacchi", "polaw", "chui", "drinks", "others"].map(
            (category) => (
              <li key={category}>
                <button
                  className={`w-[100px] border border-red-600 p-3 text-xl font-semibold rounded-3xl ${
                    selectedCategory === category ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Category;
