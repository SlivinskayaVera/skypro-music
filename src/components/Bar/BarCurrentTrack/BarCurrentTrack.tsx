import { SVG } from "@/components/SVGImage/SVGImage";
import classNames from "classnames";
import styles from "../Bar.module.css";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

export function BarCurrentTrack() {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);

  return (
    <div className={styles.playerTrackPlay}>
      <div className={styles.trackPlayContain}>
        <div className={styles.trackPlayImage}>
          <SVG className={styles.trackPlaySvg} url="note" />
        </div>
        <div className={styles.trackPlayAuthor}>
          <Link className={styles.trackPlayAuthorLink} href="">
            {currentTrack?.name}
          </Link>
        </div>
        <div className={styles.trackPlayAlbum}>
          <Link className={styles.trackPlayAlbumLink} href="">
            {currentTrack?.author}
          </Link>
        </div>
      </div>

      <div className={styles.trackPlayLikeDis}>
        <div className={classNames(styles.trackPlayLike, styles._btnIcon)}>
          <SVG className={styles.trackPlayLikeSvg} url="like" />
        </div>
        <div className={classNames(styles.trackPlayDislike, styles._btnIcon)}>
          <SVG className={styles.trackPlayDislikeSvg} url="dislike" />
        </div>
      </div>
    </div>
  );
}
