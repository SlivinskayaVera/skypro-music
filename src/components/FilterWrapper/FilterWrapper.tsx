"use client";

import styles from "./FilterWrapper.module.css";
import { FilterButton } from "../FilterButton/FilterButton";
import { useMemo, useState } from "react";
import { Track } from "../../../types.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCurrentPlaylist,
  setFilteredTracks,
  setSortedTracksByDate,
} from "@/store/features/playlistSlise";

type TrackKeys = Pick<Track, "author" | "genre" | "release_date">;

function getListItem(item: keyof TrackKeys, trackList: Track[]) {
  const listItem: string[] = [];
  trackList?.forEach((track) => {
    if (listItem.includes(track[item]) || track[item] === "-") return;
    listItem.push(track[item]);
  });
  return listItem.sort();
}

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
  const selectedAuthors = useAppSelector(
    (store) => store.playlist.filterOptions.authors
  );
  const selectedGenres = useAppSelector(
    (store) => store.playlist.filterOptions.genres
  );
  const selectedDate = useAppSelector(
    (store) => store.playlist.filterOptions.date
  );
  const dispatch = useAppDispatch();

  const authorsList = useMemo(() => getListItem("author", tracks), [tracks]);
  const genreList = useMemo(() => getListItem("genre", tracks), [tracks]);

  // const uniq = (value, index, array) => array.indexOf(value) === index

  // const artists = tracks
  //   .map(({ author }) => author ?? 'Неизвестный исполнитель')
  //   .filter((i) => i)
  //   .filter(uniq)
  //   .sort()

  function toggleSelectedAuthors(item: string) {
    dispatch(
      setFilteredTracks({
        authors: selectedAuthors.includes(item)
          ? selectedAuthors.filter((author) => author !== item)
          : [...selectedAuthors, item],
      })
    );
    dispatch(setCurrentPlaylist());
  }

  function toggleSelectedGenre(item: string) {
    dispatch(
      setFilteredTracks({
        genres: selectedGenres.includes(item)
          ? selectedGenres.filter((genre) => genre !== item)
          : [...selectedGenres, item],
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
        selected={selectedAuthors}
        counter={selectedAuthors.length}
        title="исполнителю"
        toggleSelected={toggleSelectedAuthors}
        onClick={() => handelActive("исполнителю")}
      />
      <FilterButton
        isOpen={isActive === "году выпуска" ? true : false}
        list={sortedByDate}
        title="году выпуска"
        selected={selectedDate}
        counter={0}
        toggleSelected={toggleSelectedDate}
        onClick={() => handelActive("году выпуска")}
      />
      <FilterButton
        isOpen={isActive === "жанру" ? true : false}
        list={genreList}
        title="жанру"
        selected={selectedGenres}
        counter={selectedGenres.length}
        toggleSelected={toggleSelectedGenre}
        onClick={() => handelActive("жанру")}
      />
    </div>
  );
}
