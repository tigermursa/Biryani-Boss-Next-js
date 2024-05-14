import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Drinks = ({ drinks, additionalDrinks, setAdditionalDrinks }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleDrinks = () => {
    if (isChecked) {
      const newDrinks = new Set([...additionalDrinks, { ...drinks }]);
      setAdditionalDrinks(Array.from(newDrinks));
    } else {
      const newDrinks = additionalDrinks.filter((drinksObj) => {
        return drinksObj.name !== drinks.name;
      });
      setAdditionalDrinks(newDrinks);
    }
  };

  useEffect(() => {
    handleDrinks();
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-yellow-100 shadow-md  relative`}
    >
      <Image
        src={drinks.image}
        alt=""
        width={70}
        height={70}
        className="mb-2"
      />
      <div className="text-sm capitalize text-center  font-medium">
        {drinks.name}
      </div>
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1 `}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Drinks;
