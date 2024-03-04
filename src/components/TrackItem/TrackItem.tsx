"use client";

import Link from "next/link";
import styles from "./TrackItem.module.css";
import { SVG } from "../SVGImage/SVGImage";
import { useEffect, useState } from "react";
import { LoadingTrack } from "./LoadingTrack";

export function TrackItem() {
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
    <div className={styles.playlistItem}>
      {isLoading ? (
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <SVG className={styles.trackTitleSvg} url="note" />
            </div>
            <div>
              <Link className={styles.trackTitleLink} href="http://">
                Guilt <span className={styles.trackTitleSpan}>(Remix)</span>
              </Link>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <Link className={styles.trackAuthorLink} href="http://">
              Nero
            </Link>
          </div>
          <div className={styles.trackAlbum}>
            <Link className={styles.trackAlbumLink} href="http://">
              Welcome Reality
            </Link>
          </div>
          <div>
            <SVG className={styles.trackTimeSvg} url="like" />
            <span className={styles.trackTimeText}>4:44</span>
          </div>
        </div>
      ) : (
        <LoadingTrack />
      )}
    </div>
  );
}
