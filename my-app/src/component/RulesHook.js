import React, { useState } from "react";

export const RulesHook = () => {
  const [myName, setMyName] = useState("mukesh Kumar");
  return (
    <div>
      <h1>{myName}</h1>
    </div>
  );
};
export default RulesHook;
