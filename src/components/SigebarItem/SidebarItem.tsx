"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SidebarItem.module.css";
import { ItemProps } from "../../../types.types";

export function SidebarItem({ name, isLoading }: ItemProps) {

  return (
    <>
      {isLoading && (
        <div className={styles.sidebarItem}>
        <Link className={styles.sidebarLink} href={`/playlists/${name}`}>
          <Image
            className={styles.sidebarImg}
            src={`/img/${name}.png`}
            alt="day's playlist"
            width={250}
            height={150}
            priority={true}
          />
        </Link>
        </div>
      )}
    </>
  );
}
