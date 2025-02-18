"use client";

import { getPlaylist } from "@/app/api/musicApi";
import TrackItem from "@/components/TrackItem/TrackItem";
import { useEffect, useState } from "react";
import { WrapperTracks } from "@/components/WrapperTracks/WrapperTracks";
import { Track } from "../../../../../types.types";
import { useRouter } from "next/navigation";

let route = ["daily", "hits", "genre"];
let namePages = ["Плейлист дня", "100 танцевальных хитов", "Инди-заряд"];

type TracksType = {
  params: { id: string };
};

export default function Tracks({ params }: TracksType) {
  const router = useRouter();
  const id = route.findIndex((title) => title === params.id);
  const [playlist, setPlaylist] = useState<Track[]>([]);

  useEffect(() => {
    if (id === -1) return router.replace("/where-are-you");
    getPlaylist().then((res) => {
      setPlaylist(res[id].items);
    });
  }, [id, router]);

  return (
    <WrapperTracks title={namePages[id]}>
      {playlist.map((track) => {
        return <TrackItem key={track._id} track={track} />;
      })}
    </WrapperTracks>
  );
}
