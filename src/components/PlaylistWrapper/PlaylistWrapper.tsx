import styles from "../Playlist/Playlist.module.css";

import { getTracks } from "@/app/api/musicApi";
import { SVG } from "../SVGImage/SVGImage";
import Playlist from "../Playlist/Playlist";

export async function PlaylistWrapper() {
  const tracksData = await getTracks();

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
      <Playlist tracksData={tracksData} />
    </div>
  );
}
