import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../component/Navbar";
import UsersList from "@/component/UsersList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ users }) {
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
      <div className={styles.container}>
        <h1 className={styles.title}>
          User Profile <a href="/">Application</a>
        </h1>
      </div>
      <UsersList users={users} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
  return {
    props: { users },
  };
}
