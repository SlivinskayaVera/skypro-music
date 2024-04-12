"use client";

import { getPlaylist } from "@/app/api/musicApi";
import { SVG } from "@/components/SVGImage/SVGImage";
import TrackItem from "@/components/TrackItem/TrackItem";
import { setPlaylistsByCategory } from "@/store/features/playlistSlice";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../../../../components/Playlist/Playlist.module.css";
import { WrapperTracks } from "@/components/WrapperTracks/WrapperTracks";

let route = ["daily", "hits", "genre"];
let namePages = ["Плейлист дня", "100 танцевальных хитов", "Инди-заряд"];

type TracksType = {
  params: { id: string };
};

export default function Tracks({ params }: TracksType) {
  const dispatch = useDispatch();
  const id = route.findIndex((title) => title === params.id);
  const title = namePages[id];
  const categoryPlaylists = useAppSelector(
    (store) => store.playlist.categoryPlaylists
  );

  const currentCategoryPlaylists = categoryPlaylists[id];
  useEffect(() => {
    getPlaylist().then((res) => {
      dispatch(setPlaylistsByCategory(res));
    });
  }, [dispatch]);

  return (
    <WrapperTracks title={title}>
      {currentCategoryPlaylists &&
        currentCategoryPlaylists.items.map((track) => {
          return <TrackItem key={track.id} track={track} />;
        })}
    </WrapperTracks>
  );
}
