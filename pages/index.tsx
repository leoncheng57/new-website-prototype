import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AnotherTechFalo's Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image alt="profile picture" src="/" width="100px" height="100px" />

        <p>Hi, I'm Leon</p>

        <p>I am a Fullstack Software Engineer.</p>

        <p> I also enjoy UX design and rapid prototyping.</p>
      </main>
    </div>
  );
};

export default Home;
