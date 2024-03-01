import classNames from "classnames";
import styles from "./Tracks.module.css";
import { Playlist } from "../Playlist/Playlist";

export default function Tracks() {
  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <div className={styles.centerBlockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div className={classNames(styles.filterButton, styles._btnText)}>
          исполнителю
        </div>
        <div className={classNames(styles.filterButton, styles._btnText)}>
          году выпуска
        </div>
        <div className={classNames(styles.filterButton, styles._btnText)}>
          жанру
        </div>
      </div>
      <Playlist />
    </div>
  );
}
