import Image from "next/image";
import { useEffect, useState } from "react";
import SizeSelection from "../Reuseable/SizeSelection/SizeSelection";
import Drinks from "../Reuseable/Drinks/Drinks";

const BiryaniDetails = ({ product, modal }) => {
  const [size, setSize] = useState("small");
  const [additionalDrinks, setAdditionalDrinks] = useState([]);
  const [additionalDrinksPrice, setAdditionalDrinksPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(product.priceSm + additionalDrinksPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(product.priceMd + additionalDrinksPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(product.priceLg + additionalDrinksPrice).toFixed(2))
      : null;
  });

  useEffect(() => {
    if (additionalDrinks.length > 0) {
      const toppingPrice = additionalDrinks.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setAdditionalDrinksPrice(toppingPrice);
    } else {
      setAdditionalDrinksPrice(0);
    }
  }, [additionalDrinks]);

  return (
    <>
      <div className=" flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
        <div className="lg:flex-1 flex justify-center items-center">
          <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0 ">
            <Image
              width={450}
              height={450}
              src={product.image}
              alt=""
              priority={1}
              className="mx-auto relative"
            />
          </div>
        </div>
        <div className=" flex flex-col flex-1">
          <div className="flex-1 p-2 text-center lg:text-left ">
            <div className="flex-1 bg-yellow-100 bg-opacity-0 overflow-y-scroll h-[46vh]  scrollbar-thin scrollbar-thumb-secondary scrollbar-track-yellow-100 pr-2">
              <div className="font-semibold">
                <h2 className="capitalize text-3xl mb-1">{product.name}</h2>
                <div className="mb-6 text-lg font-medium">
                  <span>
                    {size === "small"
                      ? "25 cm"
                      : size === "medium"
                      ? "30 cm"
                      : size === "large"
                      ? "35 cm"
                      : null}
                  </span>
                </div>
              </div>
              <SizeSelection product={product} size={size} setSize={setSize} />
              <div className="mb-4 text-xl font-semibold">Choose Drinks</div>
              <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start ">
                {product.drinks?.map((drinks, index) => {
                  return (
                    <Drinks
                      drinks={drinks}
                      additionalDrinks={additionalDrinks}
                      setAdditionalDrinks={setAdditionalDrinks}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="h-full flex items-center px-2 lg:items-end">
            <button
              onClick={() => {
                addToCart(
                  product.id,
                  product.image,
                  product.name,
                  price,
                  additionalDrinks,
                  size,
                  crust
                );
                setModal(false);
              }}
              className="btn btn-lg gradient w-full  flex justify-center  gap-x-2 "
            >
              <div>Add to cart for</div>
              <div>${price}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiryaniDetails;
