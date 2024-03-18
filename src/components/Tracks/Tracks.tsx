import styles from "./Tracks.module.css";
import React from "react";
import Playlist from "../Playlist/Playlist";
import { FilterWrapper } from "../FilterWrapper/FilterWrapper";


// Ниже React.Dispatch<React.SetStateAction<Track | null>> можно заменить на (*типы параментров, если есть *) => void
// В этом проекте setCurrentTrack принимает из мэпа track по типу Track

export default function Tracks() {
  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <FilterWrapper />
      <Playlist />
    </div>
  );
}
