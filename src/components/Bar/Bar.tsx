"use client";

import styles from "./Bar.module.css";
import Link from "next/link";
import classNames from "classnames";
import { SVG } from "../SVGImage/SVGImage";
import { LoadingItems } from "./LoadingItems";
import { useEffect, useState } from "react";

export default function Bar() {
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
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress}></div>
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div className={styles.playerBtnPrev}>
                <SVG className={styles.playerBtnPrevSvg} url="prev" />
              </div>
              <div className={classNames(styles.playerBtnPlay, styles._btn)}>
                <SVG className={styles.playerBtnPlaySvg} url="play" />
              </div>
              <div className={styles.playerBtnNext}>
                <SVG className={styles.playerBtnNextSvg} url="next" />
              </div>
              <div
                className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
              >
                <SVG className={styles.playerBtnRepeatSvg} url="repeat" />
              </div>
              <div
                className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
              >
                <SVG className={styles.playerBtnShuffleSvg} url="shuffle" />
              </div>
            </div>

            <div className={styles.playerTrackPlay}>
              {isLoading ? (
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <SVG className={styles.trackPlaySvg} url="note" />
                  </div>
                  <div className={styles.trackPlayAuthor}>
                    <Link className={styles.trackPlayAuthorLink} href="">
                      Ты та...
                    </Link>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                    <Link className={styles.trackPlayAlbumLink} href="">
                      Баста
                    </Link>
                  </div>
                </div>
              ) : (
                <LoadingItems />
              )}

              <div className={styles.trackPlayLikeDis}>
                <div
                  className={classNames(styles.trackPlayLike, styles._btnIcon)}
                >
                  <SVG className={styles.trackPlayLikeSvg} url="like" />
                </div>
                <div
                  className={classNames(
                    styles.trackPlayDislike,
                    styles._btnIcon
                  )}
                >
                  <SVG className={styles.trackPlayDislikeSvg} url="dislike" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.barVolumeBlock}>
            <div className={styles.volumeContent}>
              <div className={styles.volumeImage}>
                <SVG className={styles.volumeSvg} url="volume" />
              </div>
              <div className={classNames(styles.volumeProgress, styles._btn)}>
                <input
                  className={classNames(styles.volumeProgressLine, styles._btn)}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
