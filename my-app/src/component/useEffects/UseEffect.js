import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Chats(${count})`;
  });
  return (
    <div>
      <h1>UseEffect </h1>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        CLick Count+
      </button>
    </div>
  );
};

export default UseEffect;
