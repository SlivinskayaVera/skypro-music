import styles from "./TrackItem.module.css";
import { SVG } from "../SVGImage/SVGImage";
import { Track } from "../../../types.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlise";
import { timeString } from "@/lib/timeString";

type TrackItemProps = {
  track: Track;
};

export default function TrackItem({ track }: TrackItemProps) {
  const dispatch = useAppDispatch();
  const durationTrack = timeString(track.duration_in_seconds);

  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);

  // на 24 строке создать текущий плейлист в стор и исходный плейлист

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
          <SVG className={styles.trackTimeSvg} url="like" />
          <div className={styles.trackTimeText}>{durationTrack}</div>
        </div>
      </div>
    </div>
  );
}
