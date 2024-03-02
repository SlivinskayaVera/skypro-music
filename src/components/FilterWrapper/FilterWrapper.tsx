"use client";

import styles from "../Tracks/Tracks.module.css";
import { FilterButton } from "../FilterButton/FilterButton";
import { authors, years, genres } from "./data";
import { useState } from "react";

export function FilterWrapper() {
  const [isActive, setIsActive] = useState<string | null>();

  function handelActive(title: string) {
    setIsActive((prev) => (prev === title ? null : title));
  }

  return (
    <div className={styles.centerBlockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterButton
        isOpen={isActive === "исполнитель" ? true : false}
        list={authors}
        title="исполнитель"
        onClick={() => handelActive("исполнитель")}
      />
      <FilterButton
        isOpen={isActive === "год" ? true : false}
        list={years}
        title="год"
        onClick={() => handelActive("год")}
      />
      <FilterButton
        isOpen={isActive === "жанр" ? true : false}
        list={genres}
        title="жанр"
        onClick={() => handelActive("жанр")}
      />
    </div>
  );
}
