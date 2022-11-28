import Head from "next/head";
import { FC, PropsWithChildren } from 'react';
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Franco</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Head>
        <meta name="keywords" content="franco, montenegro, curso" />
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
