const MyContainer = ({ children}) => {
  return (
    <div className="w-full h-full max-w-[1230px] px-[20px] mx-auto border">
      {children}
    </div>
  );
};

export default MyContainer;
