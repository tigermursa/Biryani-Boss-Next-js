import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import SizeSelection from "../Reuseable/SizeSelection/SizeSelection";
import Drinks from "../Reuseable/Drinks/Drinks";
import { CartContext } from "@/context/CartContext";

const BiryaniDetails = ({ product, setModal }) => {
  //for size
  const [size, setSize] = useState("small");  
  
  //for selected drinks which will be a array with drinks data
  const [additionalDrinks, setAdditionalDrinks] = useState([]);

  //for selected drinks price
  const [additionalDrinksPrice, setAdditionalDrinksPrice] = useState(0);

  //the main price state
  const [price, setPrice] = useState(0);

  //the main function of the cart which will contain all the items
  const { addToCart } = useContext(CartContext);

//for my testing own state 
const [alex,setAlex] = useState("NICE")

  //for size selection
  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(product.priceSm + additionalDrinksPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(product.priceMd + additionalDrinksPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(product.priceLg + additionalDrinksPrice).toFixed(2))
      : null;
  });

  // for drinks selection
  useEffect(() => {
    if (additionalDrinks.length > 0) {
      const drinksPrice = additionalDrinks.reduce((a, c) => {
        return a + c.price;
      }, 0);
      //!the data is setting here to additionalDrinksPrice
      setAdditionalDrinksPrice(drinksPrice);
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
              className="mx-auto relative rounded-lg"
            />
          </div>
        </div>
        <div className=" flex flex-col flex-1">
          <div className="flex-1 p-2 text-center lg:text-left ">
            {/* using the overflow scroll for drinks selection */}
            <div className="flex-1 bg-yellow-100 bg-opacity-0 overflow-y-scroll h-[46vh] pr-2 scrollbar-red-thin">
              {/* Product name and size ui */}
              <div className="font-semibold">
                <h2 className="capitalize text-3xl mb-1">{product.name}</h2>
                <div className="mb-6 text-lg font-bold ">
                  <span>
                    {size === "small"
                      ? "1 person"
                      : size === "medium"
                      ? "3 person"
                      : size === "large"
                      ? "5 person"
                      : null}
                  </span>
                </div>
              </div>
              {/* Size selection by image component */}
              <SizeSelection product={product} size={size} setSize={setSize} />
              <div className="mb-4 text-xl font-semibold">Choose Drinks</div>
              {/* Chose drinks component */}
              <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start ">
                {product.drinks?.map((drinks, index) => {
                  return (
                    <Drinks
                      key={index}
                      drinks={drinks}
                      //sending the selected
                      additionalDrinks={additionalDrinks}
                      setAdditionalDrinks={setAdditionalDrinks}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="h-full flex items-center px-2 lg:items-end ">
            <button
              onClick={() => {
                addToCart(
                  product.id,
                  product.image,
                  product.name,
                  price,
                  additionalDrinks,
                  size,
                  alex,
                  setAlex
                );
                setModal(false);
              }}
              className="btn btn-lg gradient w-full  flex justify-center  gap-x-2 "
            >
              <div>Add to cart for</div>
              <div>&#2547;{price}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiryaniDetails;
