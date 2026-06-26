
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="testimonial">
        <TestimonialsSection />
      </div>

      <div id="how-it-works">
        <HowItWorksSection />
      </div>
    </>
  );
};

export default Home;