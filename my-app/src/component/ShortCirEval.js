import React, { useState } from "react";

const ShortCirEval = () => {
  const [demo, setDemo] = useState("ahishek");
  return (
    <div>
      <h1>Short Circut Evalution</h1>
      <h1 className="h1style">
        {demo || (
          <>
            <h1>Abhishek</h1>
            <p>Amber</p>
          </>
        )}
      </h1>
      <h1 className="h1style">{demo && "mukesh"}</h1>
    </div>
  );
};

export default ShortCirEval;
