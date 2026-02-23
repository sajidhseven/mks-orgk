import React, { useEffect, useState } from "react";


const Intro = ({ onFinish }) => {
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    // Trigger boom animation
    const boomTimer = setTimeout(() => {
      setBoom(true);
    }, 4500);

    // Finish intro after animation
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5500);

    return () => {
      clearTimeout(boomTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="intro-container">
      <img
        src="/logo.png"
        alt="MKS Logo"
        className={`intro-logo ${boom ? "boom" : ""}`}
      />
    </div>
  );
};

export default Intro;
