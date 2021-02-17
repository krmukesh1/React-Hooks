import React, { useState, useEffect } from "react";
const useEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log("remove Event");
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div>
      <h1>useeffect</h1>
      <p className="center">The actual size of the window is:</p>
      <h1 className="center">{widthCount}</h1>
    </div>
  );
};

export default useEffect2;
