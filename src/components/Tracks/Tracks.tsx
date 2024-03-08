import styles from "./Tracks.module.css";
import React from "react";
import { Playlist } from "../Playlist/Playlist";
import { FilterWrapper } from "../FilterWrapper/FilterWrapper";
import { Track } from "../../../types.types";

type TracksProps = { trackList: Track[], isLoading: boolean, setCurrentTrack: React.Dispatch<React.SetStateAction<Track | null>>};

export default function Tracks({ trackList, isLoading, setCurrentTrack }: TracksProps) {
  return (
    <div className={styles.mainCenterBlock}>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <FilterWrapper />
      <Playlist trackList={trackList} isLoading={isLoading} setCurrentTrack={setCurrentTrack}/>
    </div>
  );
}
