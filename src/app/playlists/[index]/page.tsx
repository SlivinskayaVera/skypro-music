import classNames from "classnames";
import styles from "../../../components/Tracks/Tracks.module.css";

let namePages: { favorite: string; hits: string; genre: string } = {
  favorite: "Избранное",
  hits: "100 танцевальных хитов",
  genre: "Инди-заряд",
};
let nameTitlePage: string;

export default function Tracks({ params }: { params: { index: string } }) {

  if (params.index === Object.keys(namePages)[0]) {
    nameTitlePage = namePages.favorite;
  } else if (params.index === Object.keys(namePages)[1]) {
    nameTitlePage = namePages.hits;
  } else if (params.index === Object.keys(namePages)[2]) {
    nameTitlePage = namePages.genre;
  }

  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>{nameTitlePage}</h2>
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
    </div>
  );
}
