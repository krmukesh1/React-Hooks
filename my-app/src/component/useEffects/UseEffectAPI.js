import React, { useState, useEffect } from "react";
import GitHubUsers from "./GItHub/GitHubUsers";
import Loading from "./GItHub/Loading";
const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      console.log("My Error is" + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>UseEffectAPI</h1>
      <GitHubUsers users={users} />
    </>
  );
};

export default UseEffectAPI;
