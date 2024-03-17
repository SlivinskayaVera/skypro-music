import Link from "next/link";
import styles from "./TrackItem.module.css";
import { SVG } from "../SVGImage/SVGImage";
import { Track } from "../../../types.types";

type TrackItemProps = {
  track: Track;
  setCurrentTrack: (track: Track) => void;
};

export default function TrackItem({ track, setCurrentTrack }: TrackItemProps) {
  const durationTrackSec = track.duration_in_seconds % 60;
  const durationTrackMin = (track.duration_in_seconds - durationTrackSec) / 60;

  return (
    <div
      onClick={() => {
        setCurrentTrack(track);
      }}
      className={styles.playlistItem}
    >
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <SVG className={styles.trackTitleSvg} url="note" />
          </div>
          <div>
            <Link className={styles.trackTitleLink} href="http://">
              {track.name}{" "}
              <span className={styles.trackTitleSpan}>(Remix)</span>
            </Link>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <Link className={styles.trackAuthorLink} href="http://">
            {track.author}
          </Link>
        </div>
        <div className={styles.trackAlbum}>
          <Link className={styles.trackAlbumLink} href="http://">
            {track.album}
          </Link>
        </div>
        <div className={styles.trackTime}>
          <SVG className={styles.trackTimeSvg} url="like" />
          <div className={styles.trackTimeText}>{`${
            durationTrackMin < 10 ? "0" : ""
          }${durationTrackMin} : ${
            durationTrackSec < 10 ? "0" : ""
          }${durationTrackSec}`}</div>
        </div>
      </div>
    </div>
  );
}
