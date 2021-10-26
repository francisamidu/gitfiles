import React, { createContext, useState, useContext } from "react";
const { v4 } = require("uuid");

export const ProfilesContext = createContext({});

export const ProfilesContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  return (
    <ProfilesContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfilesContext.Provider>
  );
};
