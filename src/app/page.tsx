"use client";

import Tracks from "@components/Tracks/Tracks";
import { Suspense, lazy, useEffect } from "react";
import { getTracks } from "./api/musicApi";
import Layout from "@/components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCurrentPlaylist,
  setTrackList,
} from "@/store/features/playlistSlise";
// const Tracks = lazy(() => import("@components/Tracks/Tracks"));

export default function Home() {
  const dispatch = useAppDispatch();
  const trackList = useAppSelector((store) => store.playlist.tracks);

  useEffect(() => {
    getTracks().then((resTrackList) => {
      dispatch(setTrackList(resTrackList));
      dispatch(setCurrentPlaylist());
    });
  }, [dispatch]);

  return (
    <Layout>
      <Tracks />
    </Layout>
  );
}
