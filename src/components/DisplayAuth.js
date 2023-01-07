import React from "react";
import { UserContext } from "../context/UserContext";
import { useUser } from "../hooks/useUser";
import { useContext } from "react";
import { GlobalState } from "../store/global/global.state";
// import { GlobalState } from "../store/globalStore";
import { Component2 } from "./Component2";

export const DisplayAuth = () => {
  const name = useUser(UserContext);
  const { isLoggedIn, login, logout } = useContext(GlobalState);
  return (
    <div>
      <div>
        <div className="App">
          {isLoggedIn ? "Welcome back" : "Please login"}
        </div>
        <button onClick={login}> Login </button>
        <button onClick={logout}> Logout </button>{" "}
      </div>
      <p> component1</p>
      {name}
      <Component2 />
    </div>
  );
};
