import Footer from "@/Components/Home/Footer/Footer";
import Navigation from "@/Components/Home/Navigation/Navigation";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
      <section className="container mx-auto">
        <Footer />
      </section>
    </main>
  );
};

export default MainLayout;
