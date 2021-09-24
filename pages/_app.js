import "../styles/globals.css";
import ProfilesContextProvider from "../contexts/profilesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProfilesContextProvider>
      <Component {...pageProps} />
    </ProfilesContextProvider>
  );
}

export default MyApp;
