"use client";

import { SVG } from "../SVGImage/SVGImage";
import styles from "../Header/Header.module.css";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setFilteredTracks } from "@/store/features/playlistSlise";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div className={styles.centerBlockSearch}>
      <SVG className={styles.searchSvg} url="search" />
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          dispatch(setFilteredTracks({ searchValue: e.target.value }));
        }}
      />
    </div>
  );
}
