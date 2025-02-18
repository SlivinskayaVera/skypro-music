"use client";

import styles from "./FilterWrapper.module.css";
import { FilterButton } from "../FilterButton/FilterButton";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCurrentPlaylist,
  setFilteredTracks,
  setSortedTracksByDate,
} from "@/store/features/playlistSlice";
import { getListItem } from "@/lib/getListItem";
import { getUniquesFromArrays } from '@/lib/getUniquesFromArrays';

const sortedByDate: string[] = [
  "По умолчанию",
  "Сначала новые",
  "Сначала старые",
];

export function FilterWrapper() {
  const [isActive, setIsActive] = useState<string | null>();

  function handelActive(title: string) {
    setIsActive((prev) => (prev === title ? null : title));
  }

  const tracks = useAppSelector((store) => store.playlist.tracks);
  const { authors, genres, date } = useAppSelector(
    (store) => store.playlist.filterOptions
  );
  const dispatch = useAppDispatch();

  const authorsList = useMemo(() => getListItem("author", tracks), [tracks]);
  const genreList = useMemo(
    () => getUniquesFromArrays(getListItem("genre", tracks)),
    [tracks]
  );

  function toggleSelectedAuthors(item: string) {
    dispatch(
      setFilteredTracks({
        authors: authors.includes(item)
          ? authors.filter((author) => author !== item)
          : [...authors, item],
      })
    );
    dispatch(setCurrentPlaylist());
  }

  function toggleDeleteSelectedAuthors() {
    dispatch(
      setFilteredTracks({
        authors: [],
      })
    );
    dispatch(setCurrentPlaylist());
  }

  function toggleSelectedGenre(item: string) {
    dispatch(
      setFilteredTracks({
        genres: genres.includes(item)
          ? genres.filter((genre) => genre !== item)
          : [...genres, item],
      })
    );
    dispatch(setCurrentPlaylist());
  }

  function toggleDeleteSelectedGenres() {
    dispatch(
      setFilteredTracks({
        genres: [],
      })
    );
    dispatch(setCurrentPlaylist());
  }

  function toggleSelectedDate(item: string) {
    dispatch(
      setSortedTracksByDate({
        date: item,
      })
    );
    dispatch(setCurrentPlaylist());
  }

  return (
    <div className={styles.centerBlockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterButton
        isOpen={isActive === "исполнителю" ? true : false}
        list={authorsList}
        selected={authors}
        counter={authors.length}
        title="исполнителю"
        toggleSelected={toggleSelectedAuthors}
        toggleDeleteSelector={toggleDeleteSelectedAuthors}
        onClick={() => handelActive("исполнителю")}
      />
      <FilterButton
        isOpen={isActive === "году выпуска" ? true : false}
        list={sortedByDate}
        title="году выпуска"
        selected={date}
        counter={0}
        toggleSelected={toggleSelectedDate}
        onClick={() => handelActive("году выпуска")}
      />
      <FilterButton
        isOpen={isActive === "жанру" ? true : false}
        list={genreList}
        title="жанру"
        selected={genres}
        counter={genres.length}
        toggleSelected={toggleSelectedGenre}
        toggleDeleteSelector={toggleDeleteSelectedGenres}
        onClick={() => handelActive("жанру")}
      />
    </div>
  );
}
