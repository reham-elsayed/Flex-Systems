"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/website-construction.json"; 
const AnimatedTasks = () => {
  return (
    <div className="w-48 h-48">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
      />
    </div>
  );
};

export default AnimatedTasks;