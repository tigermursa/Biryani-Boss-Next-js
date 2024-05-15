// Import necessary modules and components
import Image from "next/image"; // Importing Next.js Image component for optimized image rendering
import { useEffect, useState } from "react"; // Importing React hooks for state management
import { IoMdCheckmark } from "react-icons/io"; // Importing React Icons for checkbox icon

// Define the Drinks component, which receives props like drinks data, additional drinks, and a function to update additional drinks
const Drinks = ({ drinks, additionalDrinks, setAdditionalDrinks }) => {
  // Define state for checkbox status
  const [isChecked, setIsChecked] = useState(false);

  // Function to toggle checkbox status
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  // Function to handle adding/removing drinks based on checkbox status
  const handleDrinks = () => {
    if (isChecked) { // If checkbox is checked
      // Add the selected drink to the additional drinks list
      const newDrinks = new Set([...additionalDrinks, { ...drinks }]);
      setAdditionalDrinks(Array.from(newDrinks));
    } else { // If checkbox is unchecked
      // Remove the selected drink from the additional drinks list
      const newDrinks = additionalDrinks.filter((drinksObj) => {
        return drinksObj.name !== drinks.name;
      });
      setAdditionalDrinks(newDrinks);
    }
  };

  // Effect hook to trigger handleDrinks function when checkbox status changes
  useEffect(() => {
    handleDrinks();
  }, [isChecked]);

  return (
    // Render the drink item container
    <div
      // Apply conditional styles based on checkbox status
      className={`${
        isChecked && "border-orange bg-black bg-opacity-5"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md  shadow-md  relative`}
    >
      {/* Render the drink image */}
      <Image
        src={drinks.image}
        alt=""
        width={70}
        height={70}
        className="mb-2"
      />
      {/* Render the drink name */}
      <div className="text-sm capitalize text-center  font-medium">
        {drinks.name}
      </div>
      <div className="text-sm font-semibold capitalize text-center mt-1">
        ({drinks.price} &#2547;)
      </div>
      {/* Render the checkbox input */}
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      {/* Render the checkbox icon */}
      <div
        // Apply conditional opacity based on checkbox status
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1 `}
      >
        <IoMdCheckmark className="text-xl text-primary" />
      </div>
    </div>
  );
};

// Export the Drinks component
export default Drinks;
