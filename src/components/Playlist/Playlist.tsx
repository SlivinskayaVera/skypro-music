import { useAppSelector } from "@/store/hooks";
import { SVG } from "../SVGImage/SVGImage";
import TrackItem from "../TrackItem/TrackItem";
import styles from "./Playlist.module.css";

export default function Playlist() {
  const tracks = useAppSelector((store) => store.playlist.tracks);

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
        {tracks?.map((track) => {
          return <TrackItem key={track.id} track={track} />;
        })}
      </div>
    </div>
  );
}
