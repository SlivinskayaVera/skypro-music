import { SVG } from "@/components/SVGImage/SVGImage";
import classNames from "classnames";
import styles from "../Bar.module.css";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import {
  getAllFavoriteTracks,
  toDislikeTrack,
  toLikeTrack,
} from "@/app/api/musicApi";
import { refreshTokens } from "@/app/api/userApi";
import { useDispatch } from "react-redux";
import { setFavoritePlaylist } from "@/store/features/playlistSlise";
import { useRouter } from "next/navigation";
import { setAuthState } from "@/store/features/authSlice";

export function BarCurrentTrack() {
  const dispatch = useDispatch();
  const router = useRouter();

  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const refreshToken =
    localStorage.tokens && JSON.parse(localStorage.tokens).refresh;
  const accessToken =
    localStorage.tokens && JSON.parse(localStorage.tokens).access;
  const favoriteTracks = useAppSelector(
    (state) => state.playlist.favoriteTracks
  );

  const isLiked =
    currentTrack &&
    JSON.stringify(favoriteTracks).includes(
      JSON.stringify(currentTrack.track_file)
    );

  function handleLikeBtnClick() {
    if (!refreshToken || !currentTrack) {
      return router.replace("/signin");
    }

    toLikeTrack({ id: `${currentTrack.id}`, accessToken: accessToken })
      .then(() => getAllFavoriteTracks({ accessToken: accessToken }))
      .then((res) => {
        dispatch(setFavoritePlaylist(res));
      })
      .catch(() => {
        refreshTokens({ token: refreshToken });
        handleLikeBtnClick();
      });
  }

  function handleDislikeBtnClick() {
    if (!refreshToken || !currentTrack) {
      return router.replace("/signin");
    }

    toDislikeTrack({
      id: `${currentTrack.id}`,
      accessToken: accessToken,
    })
      .then(() => getAllFavoriteTracks({ accessToken: accessToken }))
      .then((res) => {
        dispatch(setFavoritePlaylist(res));
      })
      .catch(() =>
        refreshTokens({ token: refreshToken }).then((freshToken) => {
          setAuthState({ refresh: refreshToken, access: freshToken });
          handleDislikeBtnClick();
        })
      );
  }
  const toggleLike = isLiked ? handleDislikeBtnClick : handleLikeBtnClick;

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
          onClick={toggleLike}
          className={classNames(styles.trackPlayLike, styles._btnIcon)}
        >
          <SVG
            className={isLiked ? styles.likedTrackSvg : styles.trackPlayLikeSvg}
            url="like"
          />
        </div>
      </div>
    </div>
  );
}
