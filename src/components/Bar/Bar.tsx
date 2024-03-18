"use client";

import styles from "./Bar.module.css";
import Link from "next/link";
import classNames from "classnames";
import { SVG } from "../SVGImage/SVGImage";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCurrentPlaylist,
  setNextTrack,
  setPrevTrack,
  setToggleShuffled,
} from "@/store/features/playlistSlise";

let durationTrackSec: number;
let durationTrackMin: number;

export default function Bar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeRef = useRef<HTMLInputElement | null>(null);
  const durationRef = useRef<HTMLInputElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<string | null>();
  const [currentTime, setCurrentTime] = useState<number>(0);

  const dispatch = useAppDispatch();

  const duration = audioRef.current?.duration;

  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const isShuffled = useAppSelector((store) => store.playlist.isShuffled);

  function handleStartClick() {
    if (!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
  }

  function handleStopClick() {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }

  function handleLoopClick() {
    if (!audioRef.current) return;
    if (!audioRef.current.loop) audioRef.current.loop = true;
    else audioRef.current.loop = false;
  }

  function handleVolumeChange() {
    if (!audioRef.current || !volume) return;
    audioRef.current.volume = +volume;
  }

  function handleSetTimeChange() {
    if (!audioRef.current || !currentTime) return;
    audioRef.current.currentTime = +currentTime;
  }

  function handleNextTrackClick() {
    if (!currentTrack) return;
    dispatch(setNextTrack());
  }

  function handlePrevTrackClick() {
    if (!currentTrack) return;
    dispatch(setPrevTrack());
  }

  function handleShuffleClick() {
    if (!currentTrack) return;
    dispatch(setToggleShuffled());
    dispatch(setCurrentPlaylist());
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!audioRef.current?.currentTime) return;
      setCurrentTime(audioRef.current.currentTime);
      if (
        audioRef.current.currentTime === audioRef.current.duration &&
        !audioRef.current?.loop
      )
        handleNextTrackClick();
    }, 300);

    return () => clearInterval(timer);
  });

  const togglePlay = isPlaying ? handleStopClick : handleStartClick;

  const currentSec = Math.round(currentTime) % 60;
  const currentMin = (Math.round(currentTime) - currentSec) / 60;

  if (duration) {
    durationTrackSec = Math.round(duration) % 60;
    durationTrackMin = (Math.round(duration) - durationTrackSec) / 60;
  }

  return (
    <div className={styles.bar}>
      <audio autoPlay ref={audioRef} src={currentTrack?.track_file} />
      <div>
        <div className={styles.timers}>
          <div>
            {`${currentMin < 10 ? "0" : ""}${currentMin} : ${
              currentSec < 10 ? "0" : ""
            }${currentSec}`}
          </div>

          <div>
            {`${durationTrackMin < 10 ? "0" : ""}${durationTrackMin} : ${
              durationTrackSec < 10 ? "0" : ""
            }${durationTrackSec}`}
          </div>
        </div>

        <div className={styles.barContent}>
          <input
            className={styles.barPlayerProgress}
            ref={durationRef}
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => {
              setCurrentTime(+e.target.value), handleSetTimeChange();
            }}
            step={0.000001}
          />
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <div className={styles.playerControls}>
                {/* предыдущий трек */}
                <div
                  onClick={handlePrevTrackClick}
                  className={styles.playerBtnPrev}
                >
                  <SVG className={styles.playerBtnPrevSvg} url="prev" />
                </div>
                <div
                  onClick={togglePlay}
                  className={classNames(styles.playerBtnPlay, styles._btn)}
                >
                  <SVG
                    className={styles.playerBtnPlaySvg}
                    url={isPlaying ? "pause" : "play"}
                  />
                </div>
                {/* следующий трек */}
                <div
                  onClick={handleNextTrackClick}
                  className={styles.playerBtnNext}
                >
                  <SVG className={styles.playerBtnNextSvg} url="next" />
                </div>
                {/* повтор трека */}
                <div
                  onClick={handleLoopClick}
                  className={classNames(
                    styles.playerBtnShuffle,
                    styles._btnIcon
                  )}
                >
                  <SVG
                    className={
                      audioRef.current?.loop
                        ? `${styles.playerBtnActiveRepeatSvg}`
                        : `${styles.playerBtnRepeatSvg}`
                    }
                    url={audioRef.current?.loop ? "repeatActive" : "repeat"}
                  />
                </div>
                {/* перемешать */}
                <div
                  onClick={handleShuffleClick}
                  className={classNames(
                    styles.playerBtnShuffle,
                    styles._btnIcon
                  )}
                >
                  <SVG
                    className={
                      isShuffled
                        ? styles.playerActiveBtnShuffleSvg
                        : styles.playerBtnShuffleSvg
                    }
                    url="shuffle"
                  />
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
                    className={classNames(
                      styles.trackPlayLike,
                      styles._btnIcon
                    )}
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
                      setVolume(volumeRef.current?.value), handleVolumeChange();
                    }}
                    className={classNames(
                      styles.barPlayerProgress,
                      styles._btn
                    )}
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
    </div>
  );
}
