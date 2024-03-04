import { SVG } from "../SVGImage/SVGImage";
import { TrackItem } from "../TrackItem/TrackItem";
import styles from "./Playlist.module.css";

export function Playlist() {
  return (
    <div className={styles.centerBlockContent}>
      <div className={styles.contentTitle}>
        <div className={styles.playlistTitleCol}>Трек</div>
        <div className={styles.playlistTitleCol}>ИСПОЛНИТЕЛЬ</div>
        <div className={styles.playlistTitleCol}>АЛЬБОМ</div>
        <div className={styles.playlistTitleCol}>
          <SVG className={styles.playlistTitleSvg} url="watch" />
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        <TrackItem />
        <TrackItem />
        <TrackItem />
      </div>
    </div>
  );
}
