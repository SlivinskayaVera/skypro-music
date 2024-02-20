import Image from "next/image";
import { TrackItem } from "../TrackItem/TrackItem";
import styles from "./PlaylistBlock.module.css";

export function PlaylistBlock() {
  return (
    <div className={styles.centerblock__content}>
      <div className={styles.content__title}>
        <div className={styles.playlist_title__col}>Трек</div>
        <div className={styles.playlist_title__col}>ИСПОЛНИТЕЛЬ</div>
        <div className={styles.playlist_title__col}>АЛЬБОМ</div>
        <div className={styles.playlist_title__col}>
          <Image
            className={styles.playlist_title__svg}
            src="/watch.svg"
            alt="время"
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className={styles.content__playlist}>
        <TrackItem />
        <TrackItem />
        <TrackItem />
      </div>
    </div>
  );
}
