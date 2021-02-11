import React, { useState } from "react";

const UseStateArray = () => {
  const myBioData = [
    {
      id: 0,
      myName: "Mukesh",
      myAge: "24",
      homeTown: "bihar",
    },
    {
      id: 1,
      myName: "Kumar",
      myAge: "25",
      homeTown: "up",
    },
    {
      id: 2,
      myName: "Amber",
      myAge: "26",
      homeTown: "Delhi",
    },
  ];
  const [myArray, setmyBioData] = useState(myBioData);
  const clearArray = () => {
    setmyBioData([]);
  };
  return (
    <>
      {myArray.map((curElm) => {
        return (
          <h1 className="h1style" key={curElm.id}>
            Name:{curElm.myName} & Age:{curElm.myAge} & HomeTown:
            {curElm.homeTown}
          </h1>
        );
      })}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
