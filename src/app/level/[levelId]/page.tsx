"use client";

import styles from "./page.module.css";

export default function Home(props: { params: { postId: string } }) {
  console.log(props);
  return <main className={styles.main}>{JSON.stringify(props)}</main>;
}
