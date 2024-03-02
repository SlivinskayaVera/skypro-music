import styles from "./Tracks.module.css";
import React from "react";
import { Playlist } from "../Playlist/Playlist";
import { FilterWrapper } from "../FilterWrapper/FilterWrapper";

export default function Tracks({ title }: { title: string }) {
  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>{title}</h2>
      <FilterWrapper />
      <Playlist />
    </div>
  );
}
