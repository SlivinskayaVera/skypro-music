import styles from "./Tracks.module.css";
import React from "react";
import { FilterWrapper } from "../FilterWrapper/FilterWrapper";
import { PlaylistWrapper } from "../Playlist/PlaylistWrapper/PlaylistWrapper";

export default function Tracks() {
  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <FilterWrapper />
      <PlaylistWrapper />
    </div>
  );
}
