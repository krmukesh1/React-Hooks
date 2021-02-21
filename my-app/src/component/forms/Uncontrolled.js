import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  // it like a useState only and its preserve the value . N0o rerender
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("plz fill the data") : setShow(true);
    console.log(luckyName.current.value);
  };
  return (
    <div>
      <h1>UnControled Form</h1>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">Enter Your Name</label>
          <input type="text" id="luckyName" ref={luckyName}></input>
          <br></br>
          <button>Submit</button>
        </div>
      </form>
      <p className="h1style">
        {show ? `your Name is ${luckyName.current.value}` : ""}
      </p>
    </div>
  );
};

export default Uncontrolled;
