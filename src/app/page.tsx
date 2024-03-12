"use client";

import Tracks from "@components/Tracks/Tracks";
import styles from "./page.module.css";
import { Header } from "@components/Header/Header";
import { Navigation } from "@components/Navigation/Navigation";
import { Sidebar } from "@components/Sidebar/Sidebar";
import Bar from "@components/Bar/Bar";
import { useEffect, useState } from "react";
import { getTracks } from "./api/musicApi";
import { Track } from "../../types.types";

export default function Home() {
  const [trackList, setTrackList] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTracks().then((resTrackList) => {
      setTrackList(resTrackList), setIsLoading(true);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Navigation />
          <Tracks
            trackList={trackList}
            isLoading={isLoading}
            setCurrentTrack={setCurrentTrack}
          />
          <Sidebar isLoading={isLoading} />
        </main>
        {currentTrack && (
          <Bar currentTrack={currentTrack} />
        )}
      </div>
    </div>
  );
}
