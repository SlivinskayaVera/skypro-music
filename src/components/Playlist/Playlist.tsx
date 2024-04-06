"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { SVG } from "../SVGImage/SVGImage";
import TrackItem from "../TrackItem/TrackItem";
import styles from "./Playlist.module.css";
import { useEffect } from "react";
import { getTracks } from "@/app/api/musicApi";
import {
  setCurrentPlaylist,
  setTrackList,
} from "@/store/features/playlistSlise";
import { Track } from "../../../types.types";

type PlaylistType = {
  tracksData: Track[];
}

export default function Playlist({tracksData}: PlaylistType) {
  const currentPlaylist = useAppSelector(
    (store) => store.playlist.currentPlaylist
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(setTrackList(tracksData));
      dispatch(setCurrentPlaylist());
  }, [tracksData]);

  return (

      <div className={styles.contentPlaylist}>
        {(currentPlaylist.length === 0 && <>ничего не найдено</>) ||
          currentPlaylist?.map((track) => {
            return <TrackItem key={track.id} track={track} />;
          })}
      </div>
  );
}
