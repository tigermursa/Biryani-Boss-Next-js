import Footer from "@/Components/shared/Footer/Footer";
import NavigationBar from "@/Components/shared/Navigationbar/Navigationbar";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";

const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <Menu/>
      <Footer />
    </div>
  );
};

export default MainPage;
