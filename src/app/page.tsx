import Tracks from "@components/Tracks/Tracks";
import { MainNavigation } from "@components/MainNavigation/MainNavigation";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";
import { MusicBar } from "@components/MusicBar";
import styles from "./page.module.css";
import NotFound from "./not-found";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <MainNavigation />
          <Tracks />
          <MainSidebar />
        </main>
        <MusicBar />
      </div>
    </div>
  );
}
