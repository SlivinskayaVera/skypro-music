"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SidebarItem.module.css";

type ItemProps = {
  link: string;
  scrImg: string;
};

export function SidebarItem({ link, scrImg }: ItemProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timerLoading = setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 2000);
    return () => {
      clearTimeout(timerLoading);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <Link className={styles.sidebarLink} href={link}>
          <Image
            className={styles.sidebarImg}
            src={scrImg}
            alt="day's playlist"
            width={250}
            height={150}
            priority={true}
          />
        </Link>
      )}
    </>
  );
}
