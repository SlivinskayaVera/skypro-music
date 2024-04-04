"use client";

import styles from "./Bar.module.css";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsPlaying, setNextTrack } from "@/store/features/playlistSlise";
import { timeString } from "@/lib/timeString";
import { VolumeBar } from "./VolumeBar/VolumeBar";
import { BarCurrentTrack } from "./BarCurrentTrack/BarCurrentTrack";
import { BarPlayerControls } from "./BarPlayerControls/BarPlayerControls";

export default function Bar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const durationRef = useRef<HTMLInputElement | null>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);

  const dispatch = useAppDispatch();

  const duration = audioRef.current?.duration;
  const currentTimeTrack = timeString(currentTime);
  const durationTrack = duration && timeString(duration);

  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);

  function handleStartClick() {
    if (!audioRef.current) return;
    audioRef.current.play();
    dispatch(setIsPlaying());
  }

  function handleStopClick() {
    if (!audioRef.current) return;
    audioRef.current.pause();
    dispatch(setIsPlaying());
  }

  function handleSetTimeChange() {
    if (!audioRef.current || !currentTime) return;
    audioRef.current.currentTime = +currentTime;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!audioRef.current?.currentTime) return;
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current?.ended) dispatch(setNextTrack());
    }, 300);

    return () => clearInterval(timer);
  });

  const togglePlay = audioRef.current?.paused
    ? handleStartClick
    : handleStopClick;

  return (
    <div className={`${currentTrack ? styles.barActive : styles.barHidden}`}>
      <audio autoPlay ref={audioRef} src={currentTrack?.track_file} />

      <div className={styles.timers}>
        <div>{currentTimeTrack}</div>
        <div>{`${durationTrack}`}</div>
      </div>

      <div className={styles.barContent}>
        <input
          className={styles.barPlayerProgress}
          ref={durationRef}
          type="range"
          min={0}
          max={`${duration}`}
          value={currentTime}
          onChange={(e) => {
            setCurrentTime(+e.target.value), handleSetTimeChange();
          }}
          step={0.000001}
        />

        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <BarPlayerControls
              audioRef={audioRef.current}
              onClick={togglePlay}
            />

            <BarCurrentTrack />
          </div>

          <VolumeBar audioRef={audioRef.current} />
        </div>
      </div>
    </div>
  );
}
