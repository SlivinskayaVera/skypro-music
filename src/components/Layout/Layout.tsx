import styles from "../../app/page.module.css";
import { Header } from "@components/Header/Header";
import { Navigation } from "@components/Navigation/Navigation";
import { Sidebar } from "@components/Sidebar/Sidebar";
import Bar from "@components/Bar/Bar";
import { useAppSelector } from "@/store/hooks";

type LayoutPropTypes = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutPropTypes) {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Navigation />
          {children}
          <Sidebar />
        </main>
        {currentTrack && <Bar />}
      </div>
    </div>
  );
}
