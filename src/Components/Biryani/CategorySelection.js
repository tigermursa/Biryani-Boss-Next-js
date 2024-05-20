const CategorySelection = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <div className="flex justify-center mb-6 mt-6">
        {["all", "beef", "chicken", "mutton", "rice"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 rounded-3xl font-semibold ${
              selectedCategory === category
                ? "border-2 border-red-500"
                : "border-2 border-red-500 bg-primary text-white gradient"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
