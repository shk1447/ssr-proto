"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useViewModel } from "x-view-model";
import GlobalViewModel from "@/view-models/GlobalViewModel";
import Link from "next/link";

export default function Home() {
  const [state, send] = useViewModel(GlobalViewModel, ["count"]);
  return (
    <main className={styles.main}>
      {state.count} <button onClick={() => send("increase", 1)}>+</button>
      <button onClick={() => send("decrease", 1)}>-</button>
      <Link href={"/"}>Root</Link>
    </main>
  );
}
