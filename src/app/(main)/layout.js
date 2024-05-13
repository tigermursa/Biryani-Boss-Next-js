import Navigation from "@/Components/Home/Navigation/Navigation";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default MainLayout;
