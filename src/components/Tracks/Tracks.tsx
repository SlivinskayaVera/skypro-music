import classNames from "classnames";
import styles from "./Tracks.module.css";
import { PlaylistBlock } from "@components/PlaylistBlock/PlaylistBlock";

export default function Tracks() {
  return (
    <div className={styles.mainCenterBlock}>
      {/* <div className={styles.centerBlockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div> */}
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
      <PlaylistBlock />
    </div>
  );
}
