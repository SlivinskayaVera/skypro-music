"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import TrackItem from "../TrackItem/TrackItem";
import styles from "./Playlist.module.css";
import { useEffect } from "react";
import {
  setCurrentPlaylist,
  setFavoritePlaylist,
  setTrackList,
} from "@/store/features/playlistSliсe";
import { Track } from "../../../types.types";
import { refreshTokens } from "@/app/api/userApi";
import { getAllFavoriteTracks } from "@/app/api/musicApi";

type PlaylistType = {
  tracksData: Track[];
};

export default function Playlist({ tracksData }: PlaylistType) {
  const currentPlaylist = useAppSelector(
    (store) => store.playlist.currentPlaylist
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTrackList(tracksData));
    dispatch(setCurrentPlaylist());
  }, [tracksData, dispatch]);

  const favoritePlaylist = useAppSelector(
    (store) => store.playlist.favoriteTracks
  );
  const refreshToken =
    localStorage.tokens && JSON.parse(localStorage.tokens).refresh;

  useEffect(() => {
    if (!refreshToken) return;

    refreshTokens({ token: refreshToken })
      .then((accessToken) => getAllFavoriteTracks({ accessToken }))
      .then((res) => {
        dispatch(setFavoritePlaylist(res));
      });
  }, []);

  return (
    <div className={styles.contentPlaylist}>
      {(currentPlaylist.length === 0 && <>ничего не найдено</>) ||
        currentPlaylist?.map((track) => {
          return <TrackItem key={track.id} track={track} />;
        })}
    </div>
  );
}
