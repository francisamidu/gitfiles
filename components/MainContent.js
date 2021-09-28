import React, { useContext } from "react";
import { ProfilesContext } from "../contexts/profilesContext";
import Image from "next/image";
import styles from "../styles/Profile.module.css";

const MainContent = () => {
  const { profile } = useContext(ProfilesContext);
  return (
    <>
      {profile ? (
        <div className={styles.card}>
          <div className={styles.profile}>
            <h2 className={styles.name}>
              <a href={profile?.url}>{profile?.name}</a>
            </h2>
            <h3 className={styles.heading}>{profile?.company}</h3>
            <p className={styles.bio}>{profile?.bio}</p>
            <div className={styles.details}>
              <p>
                {profile?.followers || 10}
                <span>Following</span>
              </p>
              <p>
                {profile?.followers}
                <span>Followers</span>
              </p>
              <p>
                {profile?.repos?.length}
                <span>Public Repos</span>
              </p>
            </div>
            <div className={styles.repos}>
              {profile?.repos?.map((repo, index) => (
                <a href={repo.url} key={index}>
                  {repo.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className={styles.headertext}>Search for user</h1>
      )}
    </>
  );
};
export default MainContent;
