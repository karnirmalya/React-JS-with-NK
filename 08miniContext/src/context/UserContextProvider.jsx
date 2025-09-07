import React from "react";
import { useState } from "react";
import userContext from "../context/userContext";


//children => prop( jo bhi a raha he usse as it is pass kardo)
const UserContextProvider = ({ children }) => {
  // const [user,setUser]= useState(null)
  const [user, setUser] = React.useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
