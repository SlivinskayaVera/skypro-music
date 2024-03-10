"use client";

import styles from "./Bar.module.css";
import Link from "next/link";
import classNames from "classnames";
import { SVG } from "../SVGImage/SVGImage";
import { Track } from "../../../types.types";
import { useEffect, useRef, useState } from "react";

type BarProps = { currentTrack: Track | null };

export default function Bar({ currentTrack }: BarProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeRef = useRef<HTMLInputElement | null>(null);
  const durationRef = useRef<HTMLInputElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<string | null>();
  const [currentTime, setCurrentTime] = useState<string>("");

  const duration = currentTrack?.duration_in_seconds;

  function handleStart() {
    if (!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
  }

  function handleStop() {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }

  function handleLoop() {
    if (!audioRef.current) return;
    if (!audioRef.current.loop) audioRef.current.loop = true;
    else audioRef.current.loop = false;
  }

  function handleVolume() {
    if (!audioRef.current) return;
    if (!volume) return;
    audioRef.current.volume = +volume;
  }

  function handleSetTime() {
    if (!audioRef.current || !currentTime) return;
    audioRef.current.currentTime = +currentTime;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(`${audioRef.current?.currentTime}`);
    }, 300);

    return () => clearInterval(timer);
  });

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <div className={styles.bar}>
      <audio autoPlay controls ref={audioRef} src={currentTrack?.track_file} />
      <div className={styles.barContent}>
          <input className={styles.barPlayerProgress}
            ref={durationRef}
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => {
              setCurrentTime(e.target.value), handleSetTime();
            }}
            step={0.000001}
          />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div className={styles.playerBtnPrev}>
                <SVG className={styles.playerBtnPrevSvg} url="prev" />
              </div>
              <div
                onClick={togglePlay}
                className={classNames(styles.playerBtnPlay, styles._btn)}
              >
                <SVG className={styles.playerBtnPlaySvg} url="play" />
              </div>
              <div className={styles.playerBtnNext}>
                <SVG className={styles.playerBtnNextSvg} url="next" />
              </div>
              <div
                onClick={handleLoop}
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
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <SVG className={styles.trackPlaySvg} url="note" />
                </div>
                <div className={styles.trackPlayAuthor}>
                  <Link className={styles.trackPlayAuthorLink} href="">
                    {currentTrack?.name}
                  </Link>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <Link className={styles.trackPlayAlbumLink} href="">
                    {currentTrack?.author}
                  </Link>
                </div>
              </div>

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
                  ref={volumeRef}
                  onChange={() => {
                    setVolume(volumeRef.current?.value), handleVolume();
                  }}
                  className={classNames(styles.volumeProgressLine, styles._btn)}
                  type="range"
                  name="range"
                  min="0"
                  max="1"
                  step={0.0000000001}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
