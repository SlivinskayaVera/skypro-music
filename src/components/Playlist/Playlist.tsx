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
  // const filteredTracks = useAppSelector(
  //   (store) => store.playlist.filteredTracks
  // );
  // const filterOptions = useAppSelector((store) => store.playlist.filterOptions);
  const dispatch = useAppDispatch();

  // здесь из апи получать список треков

  useEffect(() => {
    getTracks().then((resTrackList) => {
      dispatch(setTrackList(resTrackList));
      dispatch(setCurrentPlaylist());
    });
  }, []);

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

        {/* {filteredTracks.length !== 0 ? (
          filteredTracks.map((track) => {
            return <TrackItem key={track.id} track={track} />;
          })
        ) : filterOptions.searchValue.length > 2 &&
          filteredTracks.length === 0 ? (
          <>ничего не найдено</>
        ) : (
          currentPlaylist?.map((track) => {
            return <TrackItem key={track.id} track={track} />;
          })
        )} */}

        {currentPlaylist?.map((track) => {
          return <TrackItem key={track.id} track={track} />;
        })}
      </div>
    </div>
  );
}
