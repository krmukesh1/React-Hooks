import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);
      setEmail("");
      setPassword("");
    } else {
      alert("plz fill the correct Data");
    }
  };

  return (
    <>
      <h1>Hello Form</h1>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="sub" type="submit">
          Login
        </button>
      </form>
      {allEntry.map((curEle) => {
        const { id, email, password } = curEle;
        return (
          <div className="h1style" key={id}>
            <p>{email}</p>
            <p>{password}</p>
          </div>
        );
      })}
    </>
  );
};

export default BasicForm;
