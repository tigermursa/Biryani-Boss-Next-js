import Image from "next/image"; // Importing Next.js Image component for optimized image rendering
import { useEffect, useState } from "react"; // Importing React hooks for state management
import { IoMdCheckmark } from "react-icons/io"; // Importing React Icons for checkbox icon

const Drinks = ({ drinks, additionalDrinks, setAdditionalDrinks }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
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

    handleDrinks();
  }, [isChecked, additionalDrinks, drinks, setAdditionalDrinks]);

  return (
    <div
      className={`${
        isChecked && "border-orange bg-black bg-opacity-5"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md shadow-md relative`}
    >
      <Image
        src={drinks.image}
        alt=""
        width={70}
        height={70}
        className="mb-2"
      />
      <div className="text-sm capitalize text-center font-medium">
        {drinks.name}
      </div>
      <div className="text-sm font-semibold capitalize text-center mt-1">
        ({drinks.price} &#2547;)
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
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-primary" />
      </div>
    </div>
  );
};

export default Drinks;
