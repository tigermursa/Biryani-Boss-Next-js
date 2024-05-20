import Image from "next/image";
import SelectItemModal from "../Reuseable/Modals/SelectItemsModal/SelectItemModal";

const ItemsPage = ({
  openModal,
  setModal,
  product,
  modal,
  closeModal,
  selectedProduct,
}) => {
  return (
    <div>
      <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl shadow-md border flex flex-col justify-center items-center">
        <Image
          onClick={() => openModal(product)}
          className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 object-cover cursor-pointer rounded-xl w-[21rem] h-[15rem]"
          width={270}
          height={270}
          src={product.image}
          alt=""
          priority={1}
        />
        {/* Title */}
        <div onClick={() => openModal(product)}>
          <div className="text-xl font-bold mb-3 capitalize text-gray-800 cursor-pointer ">
            {product.name}
          </div>
        </div>
        {/* Description */}
        <div className="text-sm text-justify ps-2 pe-2 font-semibold text-gray-500 min-h-[60px] mb-6 ">
          {product.description}
        </div>
        {/* Price and Button */}
        <div className="mb-6 flex items-center justify-between ">
          <div className="hidden lg:flex text-xl font-semibold me-5 ">
            Start at {product.priceSm}
            <span className="font-extrabold">&#2547;</span>
          </div>
          <button
            onClick={() => openModal(product)}
            className="hidden lg:flex gradient rounded-lg btn-sm font-semibold text-sm"
          >
            Choose
          </button>
          {/* Button for phone */}
          <button
            onClick={() => openModal(product)}
            className="btn btn-sm gradient text-sm lg:hidden px-3"
          >
            Start at {product.priceSm}
            <span className="font-extrabold">&#2547;</span>
          </button>
        </div>
        {/* Modal */}
        {modal && selectedProduct && (
          <SelectItemModal
            product={selectedProduct}
            setModal={setModal}
            closeModal={closeModal}
            modal={modal}
          />
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
