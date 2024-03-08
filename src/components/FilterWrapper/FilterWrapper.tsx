"use client";

import styles from "./FilterWrapper.module.css";
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
        isOpen={isActive === "исполнителю" ? true : false}
        list={authors}
        title="исполнителю"
        onClick={() => handelActive("исполнителю")}
      />
      <FilterButton
        isOpen={isActive === "году выпуска" ? true : false}
        list={years}
        title="году выпуска"
        onClick={() => handelActive("году выпуска")}
      />
      <FilterButton
        isOpen={isActive === "жанру" ? true : false}
        list={genres}
        title="жанру"
        onClick={() => handelActive("жанру")}
      />
    </div>
  );
}
