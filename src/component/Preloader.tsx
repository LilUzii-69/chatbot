// Preloader.tsx
import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
