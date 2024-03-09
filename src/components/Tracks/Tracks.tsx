import styles from "./Tracks.module.css";
import React from "react";
import { Playlist } from "../Playlist/Playlist";
import { FilterWrapper } from "../FilterWrapper/FilterWrapper";
import { Track } from "../../../types.types";

// Ниже React.Dispatch<React.SetStateAction<Track | null>> можно заменить на (*типы параментров, если есть *) => void
// В этом проекте setCurrentTrack принимает из мэпа track по типу Track

type TracksProps = { trackList: Track[], isLoading: boolean, setCurrentTrack: (track: Track) => void};

export default function Tracks({ trackList, isLoading, setCurrentTrack }: TracksProps) {
  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <FilterWrapper />
      <Playlist trackList={trackList} isLoading={isLoading} setCurrentTrack={setCurrentTrack}/>
    </div>
  );
}
