import Link from "next/link";
import styles from "./MainSidebar.module.css";
import Image from "next/image";
import URLImgPlaylist1 from "./images/playlist01.png";
import URLImgPlaylist2 from "./images/playlist02.png";
import URLImgPlaylist3 from "./images/playlist03.png";

export function MainSidebar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
        <div className={styles.sidebar__icon}>
          <Image src="/logout.svg" alt="выход" width={40} height={40} />
        </div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src={URLImgPlaylist1}
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src={URLImgPlaylist2}
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src={URLImgPlaylist3}
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
