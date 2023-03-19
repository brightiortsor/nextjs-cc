import { ReactNode } from "react";
import styles from "../src/styles/Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>MY FIRST NEXTjs PROJECT</h1>
        {children}
      </main>
    </div>
  );
}
