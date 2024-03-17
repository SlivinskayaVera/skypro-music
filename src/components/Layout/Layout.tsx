import styles from "../../app/page.module.css";
import { Header } from "@components/Header/Header";
import { Navigation } from "@components/Navigation/Navigation";
import { Sidebar } from "@components/Sidebar/Sidebar";
import Bar from "@components/Bar/Bar";
import { Track } from "../../../types.types";

type LayoutPropTypes = {
  currentTrack?: Track | null;
  children: JSX.Element;
  trackList?: Track[];
  setCurrentTrack?: (track: Track) => void;
};

export default function Layout({
  currentTrack,
  children,
  trackList,
  setCurrentTrack,
}: LayoutPropTypes) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Navigation />
          {children}
          <Sidebar />
        </main>
        {currentTrack && <Bar currentTrack={currentTrack} />}
      </div>
    </div>
  );
}
