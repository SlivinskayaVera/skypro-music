"use client";

import styles from "./FilterWrapper.module.css";
import { FilterButton } from "../FilterButton/FilterButton";
import { useState } from "react";
import { Track } from "../../../types.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setFilteredGenres,
  setFilteredTracks,
  setSortedTracksByDate,
} from "@/store/features/playlistSlise";

type TrackKeys = Pick<Track, "author" | "genre" | "release_date">;

export function FilterWrapper() {
  const [isActive, setIsActive] = useState<string | null>();
  const trackList = useAppSelector((store) => store.playlist.tracks);
  const selectedAuthors = useAppSelector(
    (store) => store.playlist.filterOptions.authors
  );
  const selectedGenres = useAppSelector(
    (store) => store.playlist.filterOptions.genres
  );
  const dispatch = useAppDispatch();

  function handelActive(title: string) {
    setIsActive((prev) => (prev === title ? null : title));
  }

  function getListItem(item: keyof TrackKeys) {
    const listItem: string[] = [];
    trackList?.forEach((track) => {
      if (listItem.includes(track[item]) || track[item] === "-") return;
      listItem.push(track[item]);
    });
    return listItem.sort();
  }

  const sortedPlaylist = useAppSelector(
    (store) => store.playlist.sortedPlaylist
  );
  console.log(sortedPlaylist);
  const sortedByDate: string[] = [
    "По умолчанию",
    "Сначала новые",
    "Сначала старые",
  ];

  // const uniq = (value, index, array) => array.indexOf(value) === index

  // const artists = tracks
  //   .map(({ author }) => author ?? 'Неизвестный исполнитель')
  //   .filter((i) => i)
  //   .filter(uniq)
  //   .sort()

  const authorsList: string[] = getListItem("author");
  const genreList: string[] = getListItem("genre");

  function toggleSelectedAuthors(item: string) {
    dispatch(
      setFilteredTracks({
        authors: selectedAuthors.includes(item)
          ? selectedAuthors.filter((author) => author !== item)
          : [...selectedAuthors, item],
      })
    );
  }

  function toggleSelectedGenre(item: string) {
    dispatch(
      setFilteredGenres({
        genres: selectedGenres.includes(item)
          ? selectedGenres.filter((genre) => genre !== item)
          : [...selectedGenres, item],
      })
    );
  }

  function toggleSelectedDate(item: string) {
    dispatch(setSortedTracksByDate({item}))
  }

  return (
    <div className={styles.centerBlockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterButton
        isOpen={isActive === "исполнителю" ? true : false}
        list={authorsList}
        selected={selectedAuthors}
        title="исполнителю"
        toggleSelected={toggleSelectedAuthors}
        onClick={() => handelActive("исполнителю")}
      />
      <FilterButton
        isOpen={isActive === "году выпуска" ? true : false}
        list={sortedByDate}
        title="году выпуска"
        toggleSelected={toggleSelectedDate}
        onClick={() => handelActive("году выпуска")}
      />
      <FilterButton
        isOpen={isActive === "жанру" ? true : false}
        list={genreList}
        title="жанру"
        selected={selectedGenres}
        toggleSelected={toggleSelectedGenre}
        onClick={() => handelActive("жанру")}
      />
    </div>
  );
}
