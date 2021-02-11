import React, { useState } from "react";
import "./App.css";
import RulesHook from "./component/RulesHook";
import UseStateArray from "./component/UseStateArray";
function App() {
  // const[isToggled, setToggled]=useState('mukesh kumar')
  //  const[myName, setMyName]=useState('mukesh Kumar');
  //   const changeName=()=>{
  //     setMyName('Amber Kumar')

  // }
  // console.log(myName)
  return (
    <div className="app">
      {/* <h1>{myName}</h1>

   <button onClick={changeName}>Click me</button> */}

      <RulesHook />
      <UseStateArray />
    </div>
  );
}

export default App;
