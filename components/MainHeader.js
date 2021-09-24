import React, { useRef, useContext } from "react";
import Api from "../api/index";
import styles from "../styles/Home.module.css";
import { ProfilesContext } from "../contexts/profilesContext";
import serializeUser from "../utils/serializeUser";
import serializeRepo from "../utils/serializeRepo";

const MainHeader = () => {
  const { setProfile, profiles } = useContext(ProfilesContext);
  const usernameRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const username = usernameRef.current.value;
      const userResponse = await Api.getUserProfile(username);
      const user = serializeUser(userResponse);
      const tempRepos = await Api.getUserRepos(username);
      const repos = tempRepos.map((repo) => serializeRepo(repo));
      user.repos = repos;
      setProfile(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header className={styles.header}>
        <h1>Github Api WebApp</h1>
        <h2>Enter a github username and search</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            ref={usernameRef}
            placeholder="Enter username"
          ></input>
        </form>
      </header>
    </>
  );
};
export default MainHeader;
