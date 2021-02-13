import React, { useState } from "react";

const UseStateObjects = () => {
  const [myObject, setmyObject] = useState({
    myName: "mukesh kumar",
    myAge: 25,
    degree: "B.tech",
  });
  const onChange = () => {
    setmyObject({ ...myObject, myAge: 26, myName: "kundan" });
  };
  return (
    <div>
      <h1>Spread Operator in Objects</h1>
      <h1 className="h1style">
        Name:{myObject.myName}, Age:{myObject.myAge}, degree:{myObject.degree}
      </h1>
      <button className="btn" onClick={onChange}>
        Change
      </button>
    </div>
  );
};

export default UseStateObjects;
