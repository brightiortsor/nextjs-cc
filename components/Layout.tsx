import { ReactNode } from "react";
import styles from "../src/styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
