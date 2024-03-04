import styles from "./TrackItem.module.css";

export function LoadingTrack() {
  return (
    <>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.loadingImage}></div>
          <div className={styles.loadingTitle}>
          </div>
        </div>
        <div className={styles.loadingAuthor}></div>
        <div className={styles.loadingAlbum}></div>
      </div>
    </>
  );
}
