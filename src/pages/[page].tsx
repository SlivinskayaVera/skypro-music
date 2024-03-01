import classNames from "classnames";
import styles from "../components/Tracks/Tracks.module.css";
import { Playlist } from "@components/Playlist/Playlist";
import { useRouter } from "next/router";

let namePages: { favorite: string; hits: string; genre: string } = {
  favorite: "Избранное",
  hits: "100 танцевальных хитов",
  genre: "Инди-заряд",
};

export default function Tracks() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>{namePages.favorite}</h2>
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
