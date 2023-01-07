import React from "react";
import { UserContext } from "../context/UserContext";
import { useUser } from "../hooks/useUser";

export const Component4 = () => {
  const name = useUser(UserContext);
  return (
    <div>
      <p> Component4 : </p>
      {name}
    </div>
  );
};
