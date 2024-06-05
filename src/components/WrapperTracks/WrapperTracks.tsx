import { SVG } from "../SVGImage/SVGImage";
import styles from "./WrapperTracks.module.css";

type WrapperTracksType = {
  children: JSX.Element[] | JSX.Element;
  title: string;
};

export function WrapperTracks({ children, title }: WrapperTracksType) {
  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>{title}</h2>
      <div className={styles.centerBlockContent}>
        <div className={styles.contentTitle}>
          <div className={styles.playlistTitleCol}>Трек</div>
          <div className={styles.playlistTitleCol}>ИСПОЛНИТЕЛЬ</div>
          <div className={styles.playlistTitleCol}>АЛЬБОМ</div>
          <div className={styles.playlistTitleCol}>
            <SVG className={styles.playlistTitleSvg} url="watch" />
          </div>
        </div>
        <div className={styles.contentPlaylist}>{children}</div>
      </div>
    </div>
  );
}
