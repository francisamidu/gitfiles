import Head from "next/head";
import MainHeader from "../components/MainHeader";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Gitfiles - A github Api webapp for searching github user profiles
        </title>
        <meta
          name="description"
          content="A github Api webapp for searching github user profiles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <MainContent />
    </main>
  );
}
