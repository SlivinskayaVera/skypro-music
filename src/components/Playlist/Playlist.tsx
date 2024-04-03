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

export default function Playlist() {
  const currentPlaylist = useAppSelector(
    (store) => store.playlist.currentPlaylist
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTracks().then((resTrackList) => {
      dispatch(setTrackList(resTrackList));
      dispatch(setCurrentPlaylist());
    });
  }, [dispatch]);

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
        {(currentPlaylist.length === 0 && <>ничего не найдено</>) ||
          currentPlaylist?.map((track) => {
            return <TrackItem key={track.id} track={track} />;
          })}
      </div>
    </div>
  );
}
