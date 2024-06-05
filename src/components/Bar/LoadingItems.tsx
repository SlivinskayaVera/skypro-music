import styles from "./Bar.module.css";

export function LoadingItems() {
  return (
    <div className={styles.trackPlayContain}>
      <div className={styles.loadingImage}></div>
      <div className={styles.loadingItem}></div>
      <div className={styles.loadingItem}></div>
    </div>
  );
}
