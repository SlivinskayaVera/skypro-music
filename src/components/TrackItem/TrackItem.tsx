import styles from "./TrackItem.module.css";
import { SVG } from "../SVGImage/SVGImage";
import { Track } from "../../../types.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCurrentTrack,
  setIsPlaying,
} from "@/store/features/playlistSlise";
import { timeString } from "@/lib/timeString";
import { useRouter } from "next/navigation";
import { setLike } from "@/lib/setLike";
import { setDislike } from "@/lib/setDislike";

type TrackItemProps = {
  track: Track;
};

export default function TrackItem({ track }: TrackItemProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const durationTrack = timeString(track.duration_in_seconds);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const favoriteTracks = useAppSelector(
    (state) => state.playlist.favoriteTracks
  );

  const refreshToken = localStorage.tokens && JSON.parse(localStorage.tokens).refresh;

  const isLiked = JSON.stringify(favoriteTracks).includes(
    JSON.stringify(track.track_file)
  );

  function handleLikeBtnClick() {
    if (!refreshToken) {
      return router.replace("/signin");
    }

    setLike(track, dispatch);
  }

  function handleDislikeBtnClick() {
    if (!refreshToken) {
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
