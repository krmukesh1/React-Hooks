import React, { useState } from "react";
import UseTitleCount from "./GItHub/UseTitleCount";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  //  custom Hook
  UseTitleCount(count);
  console.log("Hello Outside");
  return (
    <div>
      <h1>UseEffect </h1>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Count+
      </button>
    </div>
  );
};

export default UseEffect;
