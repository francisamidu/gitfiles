import React, { createContext, useState } from "react";
const { v4 } = require("uuid");

export const ProfilesContext = createContext({});

const ProfilesContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  return (
    <ProfilesContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfilesContext.Provider>
  );
};
export default ProfilesContextProvider;
