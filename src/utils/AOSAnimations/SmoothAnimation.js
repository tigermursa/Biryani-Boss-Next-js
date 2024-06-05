import { useEffect } from "react";
import initAnimation from "./initAnimation";

const useAnimationEffect = () => {
  useEffect(() => {
    initAnimation();
  }, []);
};

export default useAnimationEffect;
