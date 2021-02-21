import React, { useState } from "react";
import "./App.css";

import RulesHook from "./component/RulesHook";
import UseStateArray from "./component/UseStateArray";
import UseStateObjects from "./component/UseStateObjects";
import ShortCirEval from "./component/ShortCirEval";
import BasicForm from "./component/forms/BasicForm";
import MultipleInput from "./component/forms/MultipleInput";
import UseEffect from "./component/useEffects/UseEffect";
import UseEffect2 from "./component/useEffects/UseEffect2";
import UseEffectAPI from "./component/useEffects/UseEffectAPI";
import Uncontrolled from "./component/forms/Uncontrolled";

function App() {
  const [myName, setMyName] = useState("mukesh Kumar");
  const changeName = () => {
    let val = myName;

    // if (val === "mukesh Kumar") {
    //   setMyName("Amber Kumar");
    // } else {
    //   setMyName("mukesh Kumar");
    // }
    // ternary operator
    val === "mukesh kumar"
      ? setMyName("Amber Kumar")
      : setMyName("mukesh kumar");
  };
  console.log(myName);
  return (
    <div className="app">
      <h1>Name changes Hooks Using Toogle Feature</h1>
      <h1>{myName}</h1>

      <button onClick={changeName}>Click me</button>
      <UseEffectAPI />
      <RulesHook />
      <UseStateArray />
      <UseStateObjects />
      <ShortCirEval />
      <BasicForm />
      <MultipleInput />
      <UseEffect />
      <UseEffect2 />
      <Uncontrolled />
    </div>
  );
}

export default App;
