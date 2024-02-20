import Image from "next/image";
import styles from "./MusicBar.module.css";
import Link from "next/link";

export function MusicBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress}></div>
        <div className={styles.bar__player_block}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div className={styles.player__btn_prev}>
                <Image
                  className={styles.player__btn_prev_svg}
                  src="/prev.svg"
                  alt="prev"
                  width={15}
                  height={14}
                />
              </div>
              <div className={`${styles.player__btn_play} ${styles._btn}`}>
                <Image
                  className={styles.player__btn_play_svg}
                  src="/play.svg"
                  alt="play"
                  width={22}
                  height={20}
                />
              </div>
              <div className={styles.player__btn_next}>
                <Image
                  className={styles.player__btn_next_svg}
                  src="/next.svg"
                  alt="next"
                  width={15}
                  height={14}
                />
              </div>
              <div
                className={`${styles.player__repeat_shuffle} ${styles._btn_icon}`}
              >
                <Image
                  className={styles.player__btn_repeat_svg}
                  src="/repeat.svg"
                  alt="repeat"
                  width={18}
                  height={12}
                />
              </div>
              <div
                className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}
              >
                <Image
                  className={styles.player__btn_shuffle_svg}
                  src="/shuffle.svg"
                  alt="shuffle"
                  width={19}
                  height={12}
                />
              </div>
            </div>

            <div className={styles.player__track_play}>
              <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                  <Image
                    className={styles.track_play__svg}
                    src="note.svg"
                    alt="обложка альбома"
                    width={51}
                    height={51}
                  />
                </div>
                <div className={styles.track_play__author}>
                  <Link className={styles.track_play__author_link} href="">
                    Ты та...
                  </Link>
                </div>
                <div className={styles.track_play__album}>
                  <Link className={styles.track_play__album_link} href="">
                    Баста
                  </Link>
                </div>
              </div>

              <div className={styles.track_play__like_dis}>
                <div
                  className={`${styles.track_play__like} ${styles._btn_icon}`}
                >
                  <Image
                    className={styles.track_play__like_svg}
                    src="like.svg"
                    alt="like"
                    width={14}
                    height={12}
                  />
                </div>
                <div
                  className={`${styles.track_play__dislike} ${styles._btn_icon}`}
                >
                  <Image
                    className={styles.track_play__dislike_svg}
                    src="dislike.svg"
                    alt="dislike"
                    width={14}
                    height={12}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bar__volume_block}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <Image
                  className={styles.volume__svg}
                  src="volume.svg"
                  alt="volume"
                  width={14}
                  height={18}
                />
              </div>
              <div className={`${styles.volume__progress} ${styles._btn}`}>
                <input
                  className={`${styles.volume__progress_line} ${styles._btn}`}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
