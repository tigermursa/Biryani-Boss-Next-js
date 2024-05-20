"use client";
import { useState } from "react";
import { data } from "@/Database/data";
import CategorySelection from "./CategorySelection";
import ItemsPage from "./ItemsPage";

const Biryani = () => {
  // Item selection
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  // Modal State
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open Modal
  const openModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  // Close Modal
  const closeModal = () => {
    setModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Category Buttons */}
      <CategorySelection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* all items showing here */}
      <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[1.9rem] py-12 container mx-auto">
        {filteredData.map((product, index) => (
          <ItemsPage
            key={index}
            product={product}
            modal={modal}
            openModal={openModal}
            setModal={setModal}
            closeModal={closeModal}
            selectedProduct={selectedProduct}
          />
        ))}
      </div>
    </>
  );
};

export default Biryani;
