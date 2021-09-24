import React, { createContext, useState } from "react";
const { v4 } = require("uuid");

export const ProfilesContext = createContext({});

const ProfilesContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    id: v4(),
    bio: "Javascript Enthusiast",
    avatarUrl: "/javascript.jpeg",
    name: "Javascript Dev",
    company: "Javascript Inc",
    repos: [
      {
        id: v4(),
        name: "React Starter",
        url: "github.com/react-starter",
      },
    ],
    followers: 10,
    url: "github.com/username",
  });
  return (
    <ProfilesContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfilesContext.Provider>
  );
};
export default ProfilesContextProvider;
