import Image from "next/image";

const SizeSelection = ({ product, size, setSize }) => {
  return (
    <div className="mx-auto max-w-sm  lg:max-w-none flex items-center justify-center lg:justify-center ">
      <div className="flex gap-x-12 items-baseline mb-10 font-medium ">
        {/* small */}
        <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "small"
                ? " border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            } mb-1`}
            src={product.image}
            alt=""
            width={60}
            height={60}
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Small
        </label>
        {/* medium */}
        <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "medium"
                ? " border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            } mb-1`}
            src={product.image}
            alt=""
            width={70}
            height={70}
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Medium
        </label>
        {/* Large */}
        <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "large"
                ? " border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            } mb-1`}
            src={product.image}
            alt=""
            width={80}
            height={80}
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
