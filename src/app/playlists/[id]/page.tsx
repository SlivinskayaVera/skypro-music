"use client";

import { getPlaylist } from "@/app/api/musicApi";
import Layout from "@/components/Layout/Layout";
import TrackItem from "@/components/TrackItem/TrackItem";
import { setPlaylistsByCategory } from "@/store/features/playlistSlise";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

let namePages = ["Плейлист дня", "100 танцевальных хитов", "Инди-заряд"];

type TracksType = {
  params: { id: number };
};

export default function Tracks({ params }: TracksType) {
  const dispatch = useDispatch();
  const title = namePages[params.id];
  const categoryPlaylists = useAppSelector(
    (store) => store.playlist.categoryPlaylists
  );

  const currentCategoryPlaylists = categoryPlaylists[params.id];
  useEffect(() => {
    getPlaylist().then((res) => {
      dispatch(setPlaylistsByCategory(res));
    });
  }, [dispatch]);

  return (
    <Layout>
      <h1>{title}</h1>

      <div>
        {currentCategoryPlaylists &&
          currentCategoryPlaylists.items.map((track) => {
            return <TrackItem key={track.id} track={track} />;
          })}
      </div>
    </Layout>
  );
}
