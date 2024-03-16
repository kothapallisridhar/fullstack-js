import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>User Profiles</title>
        <meta name="keywords" content="user profile, profile details" />
        <meta
          name="description"
          content="This App is about knowing the User profiles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          User Profile <a href="/">Application</a>
        </h1>
      </main>
    </>
  );
}
