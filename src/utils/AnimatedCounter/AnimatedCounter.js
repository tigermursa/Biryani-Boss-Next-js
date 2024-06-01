import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ targetCount, duration }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        const bottom = containerRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if the component is in the viewport
        if (top < windowHeight && bottom > 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(targetCount / (duration / 100)); // Increment amount

    // Start the animation when the component is in view
    if (isInView) {
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetCount) {
          setCurrentCount(targetCount);
          clearInterval(timer);
        } else {
          setCurrentCount(start);
        }
      }, 100);

      return () => clearInterval(timer); // Cleanup
    }
  }, [isInView, targetCount, duration]);

  return <span ref={containerRef}>{currentCount.toLocaleString()}</span>;
};

export default AnimatedCounter;
