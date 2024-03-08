"use client";

import Link from "next/link";
import styles from "./TrackItem.module.css";
import { SVG } from "../SVGImage/SVGImage";
import { useEffect, useState } from "react";
import { LoadingTrack } from "./LoadingTrack";
import { Track } from "../../../types.types";

type TrackItemProps = {
  track: Track;
  isLoading: boolean;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track | null>>;
  onClick?: () => React.MouseEventHandler<HTMLDivElement> | undefined;
};

export function TrackItem({ track, isLoading, setCurrentTrack }: TrackItemProps) {
  const durationTrackSec = track.duration_in_seconds % 60;
  const durationTrackMin = (track.duration_in_seconds - durationTrackSec) / 60;

  return (
    <div onClick={() => {setCurrentTrack(track)}} className={styles.playlistItem}>
      {isLoading ? (
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <SVG className={styles.trackTitleSvg} url="note" />
            </div>
            <div>
              <Link className={styles.trackTitleLink} href="http://">
                {track.name}{" "}
                <span className={styles.trackTitleSpan}>(Remix)</span>
              </Link>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <Link className={styles.trackAuthorLink} href="http://">
              {track.author}
            </Link>
          </div>
          <div className={styles.trackAlbum}>
            <Link className={styles.trackAlbumLink} href="http://">
              {track.album}
            </Link>
          </div>
          <div>
            <SVG className={styles.trackTimeSvg} url="like" />
            <span
              className={styles.trackTimeText}
            >{`${durationTrackMin} : ${durationTrackSec}`}</span>
          </div>
        </div>
      ) : (
        <LoadingTrack />
      )}
    </div>
  );
}
