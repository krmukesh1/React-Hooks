import React, { useContext } from "react";
import { BioData } from "./ComA";
const ComC = () => {
  const name = useContext(BioData);
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

export default ComC;
