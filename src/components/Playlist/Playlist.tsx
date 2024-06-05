"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import TrackItem from "../TrackItem/TrackItem";
import styles from "./Playlist.module.css";
import { useEffect } from "react";
import {
  setCurrentPlaylist,
  setFavoritePlaylist,
  setTrackList,
} from "@/store/features/playlistSlice";
import { Track } from "../../../types.types";
import { refreshTokens } from "@/app/api/userApi";
import { getAllFavoriteTracks } from "@/app/api/musicApi";
import Cookie from "js-cookie";

type PlaylistType = {
  tracksData: Track[];
};

export default function Playlist({ tracksData }: PlaylistType) {
  const dispatch = useAppDispatch();
  const cookie = Cookie.get("tokens");
  const currentPlaylist = useAppSelector(
    (store) => store.playlist.currentPlaylist
  );

  useEffect(() => {
    dispatch(setTrackList(tracksData));
    dispatch(setCurrentPlaylist());
  }, [dispatch, tracksData]);

  useEffect(() => {
    const refreshToken = cookie && JSON.parse(cookie).refresh;

    if (!refreshToken) return;

    refreshTokens({ token: refreshToken })
      .then((accessToken) => getAllFavoriteTracks({ accessToken }))
      .then((res) => {
        dispatch(setFavoritePlaylist(res));
      });
  }, [cookie, dispatch]);

  const user = Cookie.get("user");
  const userID = user && JSON.parse(user).id;

  return (
    <div className={styles.contentPlaylist}>
      {(currentPlaylist.length === 0 && <>ничего не найдено</>) ||
        currentPlaylist?.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isLiked={
                !!(track.stared_user ?? []).find(({ id }) => id === userID)
              }
            />
          );
        })}
    </div>
  );
}
