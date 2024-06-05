import AOS from "aos";
import "aos/dist/aos.css";

const initAnimation = () => {
  AOS.init({
    duration: 1000,
    once: false, 
    mirror: true, // Elements do not reanimate while scrolling past them
  });
};

export default initAnimation;
