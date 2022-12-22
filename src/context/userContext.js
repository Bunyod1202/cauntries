import {  createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({children}) => {
  const [darkmode, setDarkmode] = useState(localStorage.getItem("theme")|| "black");
  return (
    <UserContext.Provider
      value={{
        darkmode,
        setDarkmode,
      }}
    >{children}</UserContext.Provider>
  );  
}