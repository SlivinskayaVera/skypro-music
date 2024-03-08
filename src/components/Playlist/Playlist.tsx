import { Track } from "../../../types.types";
import { SVG } from "../SVGImage/SVGImage";
import { TrackItem } from "../TrackItem/TrackItem";
import styles from "./Playlist.module.css";

type PlaylistProps = {
  trackList: Track[];
  isLoading: boolean;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track | null>>;
};

export function Playlist({
  trackList,
  isLoading,
  setCurrentTrack,
}: PlaylistProps) {
  return (
    <div className={styles.centerBlockContent}>
      <div className={styles.contentTitle}>
        <div className={styles.playlistTitleCol}>Трек</div>
        <div className={styles.playlistTitleCol}>ИСПОЛНИТЕЛЬ</div>
        <div className={styles.playlistTitleCol}>АЛЬБОМ</div>
        <div className={styles.playlistTitleCol}>
          <SVG className={styles.playlistTitleSvg} url="watch" />
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {trackList.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isLoading={isLoading}
              setCurrentTrack={setCurrentTrack}
            />
          );
        })}
      </div>
    </div>
  );
}
