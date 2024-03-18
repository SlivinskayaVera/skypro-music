"use client";

import styles from "./FilterWrapper.module.css";
import { FilterButton } from "../FilterButton/FilterButton";
import { useState } from "react";
import { Track } from "../../../types.types";
import { useAppSelector } from "@/store/hooks";

type TrackKeys = Pick<Track, "author" | "genre">;

export function FilterWrapper() {
  const [isActive, setIsActive] = useState<string | null>();
  const trackList = useAppSelector((store) => store.playlist.tracks);

  function handelActive(title: string) {
    setIsActive((prev) => (prev === title ? null : title));
  }

  function getListItem(item: keyof TrackKeys) {
    const listItem: string[] = [];
    trackList?.map((track) => {
      if (listItem.includes(track[item]) || track[item] === null) return;
      listItem.push(track[item]);
    });
    return listItem;
  }

  const authorsList: string[] = getListItem("author");
  const genreList: string[] = getListItem("genre");
  // const years: string[] = getListItem("release_date");

  return (
    <div className={styles.centerBlockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterButton
        isOpen={isActive === "исполнителю" ? true : false}
        list={authorsList}
        title="исполнителю"
        onClick={() => handelActive("исполнителю")}
      />
      <FilterButton
        isOpen={isActive === "году выпуска" ? true : false}
        list={authorsList}
        title="году выпуска"
        onClick={() => handelActive("году выпуска")}
      />
      <FilterButton
        isOpen={isActive === "жанру" ? true : false}
        list={genreList}
        title="жанру"
        onClick={() => handelActive("жанру")}
      />
    </div>
  );
}
