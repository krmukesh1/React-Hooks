import React, { createContext } from "react";
import ComB from "./ComB";

const BioData = createContext();
const ComA = () => {
  return (
    <BioData.Provider value={"mukesh"}>
      <ComB />
    </BioData.Provider>
  );
};

export default ComA;
export { BioData };
