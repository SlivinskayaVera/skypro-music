"use client";

import Tracks from "@components/Tracks/Tracks";
import { Suspense, lazy, useEffect, useState } from "react";
import { getTracks } from "./api/musicApi";
import { Track } from "../../types.types";
import Layout from "@/components/Layout/Layout";
// const Tracks = lazy(() => import("@components/Tracks/Tracks"));

export default function Home() {
  const [trackList, setTrackList] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    getTracks().then((resTrackList) => {
      setTrackList(resTrackList);
    });
  }, []);

  return ( 
    <Layout
      currentTrack={currentTrack}
      trackList={trackList}
      setCurrentTrack={setCurrentTrack}
    >
      <Tracks trackList={trackList} setCurrentTrack={setCurrentTrack} />
    </Layout>
  );
}
