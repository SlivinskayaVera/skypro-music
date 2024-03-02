import Tracks from "@components/Tracks/Tracks";
import styles from "./page.module.css";
import { Header } from "@components/Header/Header";
import { Navigation } from "@components/Navigation/Navigation";
import { Sidebar } from "@components/Sidebar/Sidebar";
import Bar from "@components/Bar/Bar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Navigation />
          <Tracks title="Треки"/>
          <Sidebar />
        </main>
        <Bar />
      </div>
    </div>
  );
}
