import React, { useState } from "react";
import UseTitleCount from "./UseTitleCount";

const Test = () => {
  const [count, setCount] = useState(0);
  //  custom Hook
  UseTitleCount(count);
  console.log("Hello Outside");
  return (
    <div>
      <h1>UseEffect </h1>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Test Count+
      </button>
    </div>
  );
};

export default Test;
