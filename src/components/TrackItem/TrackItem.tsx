import styles from "./TrackItem.module.css";
import { SVG } from "../SVGImage/SVGImage";
import { Track } from "../../../types.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import { timeString } from "@/lib/timeString";
import { useRouter } from "next/navigation";
import { setLike } from "@/lib/setLike";
import { setDislike } from "@/lib/setDislike";
import Cookie from "js-cookie"


type TrackItemProps = {
  track: Track;
  isLiked: boolean;
};

export default function TrackItem({ track, isLiked }: TrackItemProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const durationTrack = timeString(track.duration_in_seconds);
  const { currentTrack, isPlaying, favoriteTracks } = useAppSelector(
    (store) => store.playlist
  );

  const cookie = Cookie.get("tokens");
  const accessToken = cookie && JSON.parse(cookie).access;

  // const isLiked = JSON.stringify(favoriteTracks).includes(
  //   JSON.stringify(track.track_file)
  // );

  function handleLikeBtnClick() {
    if (!accessToken) {
      return router.replace("/signin");
    }
    setLike(track, dispatch);
  }

  function handleDislikeBtnClick() {
    if (!accessToken) {
      return router.replace("/signin");
    }
    setDislike(track, dispatch);
  }

  const toggleLike =
    isLiked || !track.stared_user ? handleDislikeBtnClick : handleLikeBtnClick;

  return (
    <div
      onClick={() => {
        dispatch(setCurrentTrack(track));
        dispatch(setIsPlaying());
      }}
      className={styles.playlistItem}
    >
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack?.id === track.id && (
              <span
                className={`${isPlaying ? styles.pulse : styles.pulseStop}`}
              ></span>
            )}
            <SVG className={styles.trackTitleSvg} url="note" />
          </div>
          {track.name} <span className={styles.trackTitleSpan}></span>
        </div>
        <div className={styles.trackAuthor}>{track.author}</div>
        <div className={styles.trackAlbum}>{track.album}</div>
        <div className={styles.trackTime}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              toggleLike();
            }}
          >
            <SVG
              className={
                isLiked || !track.stared_user
                  ? styles.likedTrackSvg
                  : styles.trackTimeSvg
              }
              url="like"
            />
          </div>
          <div className={styles.trackTimeText}>{durationTrack}</div>
        </div>
      </div>
    </div>
  );
}
