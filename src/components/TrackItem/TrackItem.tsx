import Link from "next/link";
import styles from "./TrackItem.module.css";
import Image from "next/image";

export function TrackItem() {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__title_image}>
            <Image
              src="/note.svg"
              className={styles.track__title_svg}
              alt="обложка альбома"
              width={51}
              height={51}
            />
          </div>
          <div>
            <Link className={styles.track__title_link} href="http://">
              Guilt <span className={styles.track__title_span}></span>
            </Link>
          </div>
        </div>
        <div className={styles.track__author}>
          <Link className={styles.track__author_link} href="http://">
            Nero
          </Link>
        </div>
        <div className={styles.track__album}>
          <Link className={styles.track__album_link} href="http://">
            Welcome Reality
          </Link>
        </div>
        <div>
          <Image
            className={styles.track__time_svg}
            src="/like.svg"
            alt="like"
            width={14}
            height={12}
          />
          <span className={styles.track__time_text}>4:44</span>
        </div>
      </div>
    </div>
  );
}
