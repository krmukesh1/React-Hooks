import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("I am first one");
    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);
  useEffect(() => {
    console.log("I am fine");
  }, []);
  console.log("Hello Outside");
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
