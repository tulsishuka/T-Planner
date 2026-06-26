import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

   
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

  
    const timer = setTimeout(scrollToElement, 100);

    return () => clearTimeout(timer);
  }, [hash]);

  return null;
};

export default ScrollToHash;