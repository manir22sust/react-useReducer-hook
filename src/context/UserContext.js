import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const title = "The Context Api";

  return <UserContext.Provider value={title}>{children}</UserContext.Provider>;
};
