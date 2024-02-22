import { TrackItem } from "../TrackItem/TrackItem";
import styles from "./PlaylistBlock.module.css";

export function PlaylistBlock() {
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={styles.playlistTitleCol}>Трек</div>
        <div className={styles.playlistTitleCol}>ИСПОЛНИТЕЛЬ</div>
        <div className={styles.playlistTitleCol}>АЛЬБОМ</div>
        <div className={styles.playlistTitleCol}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
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
