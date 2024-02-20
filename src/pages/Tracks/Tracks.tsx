import styles from "./Tracks.module.css";
import Image from "next/image";
import { PlaylistBlock } from "@/components/PlaylistBlock/PlaylistBlock";

export default function Tracks() {
  return (
    <div className={styles.main__centerblock}>
      <div className={styles.centerblock__search}>
        <Image
          className={styles.search__svg}
          src="/search.svg"
          alt="поиск"
          width={12}
          height={12}
        />
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>
        <div className={`${styles.filter__button} ${styles._btn_text}`}>
          исполнителю
        </div>
        <div className={`${styles.filter__button} ${styles._btn_text}`}>году выпуска</div>
        <div className={`${styles.filter__button} ${styles._btn_text}`}>жанру</div>
      </div>
      <PlaylistBlock />
    </div>
  );
}
