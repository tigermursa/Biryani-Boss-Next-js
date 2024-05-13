import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full h-full max-w-[1230px] px-[20px] mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
