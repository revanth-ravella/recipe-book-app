import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const ScrollRevealContainer = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal(".sr-left", {
      duration: 1000,
      origin: "left",
      distance: "20px",
      opacity: 0,
      scale: 1,
      delay: 400,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });

    // Initialize ScrollReveal for elements coming from the right
    ScrollReveal().reveal(".sr-right", {
      duration: 1000,
      origin: "right",
      distance: "20px",
      opacity: 0,
      scale: 1,
      delay: 400,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });

    ScrollReveal().reveal(".sr-top", {
      duration: 1000,
      origin: "top",
      distance: "20px",
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      delay: 400,
    });
    ScrollReveal().reveal(".sr-bottom", {
      duration: 1000,
      origin: "bottom",
      distance: "20px",
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, []);

  return <div className="sr-container">{children}</div>;
};

export default ScrollRevealContainer;
