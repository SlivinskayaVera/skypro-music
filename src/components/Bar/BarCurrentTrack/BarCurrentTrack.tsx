import { SVG } from "@/components/SVGImage/SVGImage";
import classNames from "classnames";
import styles from "../Bar.module.css";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { toDislikeTrack, toLikeTrack } from "@/app/api/musicApi";
import { refreshTokens } from "@/app/api/userApi";

export function BarCurrentTrack() {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const token = useAppSelector((store) => store.user.token.refresh);

  function handleLikeBtnClick() {
    if (!currentTrack || !token) {return alert("Только авторизованные пользователи могут добавить треки в избранное")};
    refreshTokens({ token }).then((freshToken) =>
      toLikeTrack({ id: `${currentTrack.id}`, accessToken: freshToken })
    );
  }

  function handleDislikeBtnClick() {
    if (!currentTrack || !token) {return alert("Только авторизованные пользователи могут удалить треки из избранного")};
    refreshTokens({ token }).then((freshToken) =>
      toDislikeTrack({ id: `${currentTrack.id}`, accessToken: freshToken })
    );
  }

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
        <div
          onClick={handleLikeBtnClick}
          className={classNames(styles.trackPlayLike, styles._btnIcon)}
        >
          <SVG className={styles.trackPlayLikeSvg} url="like" />
        </div>
        <div onClick={handleDislikeBtnClick} className={classNames(styles.trackPlayDislike, styles._btnIcon)}>
          <SVG className={styles.trackPlayDislikeSvg} url="dislike" />
        </div>
      </div>
    </div>
  );
}
