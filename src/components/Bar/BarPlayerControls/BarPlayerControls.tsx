import { SVG } from "@/components/SVGImage/SVGImage";
import styles from "../Bar.module.css";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCurrentPlaylist,
  setNextTrack,
  setPrevTrack,
  setToggleShuffled,
} from "@/store/features/playlistSlice";

type BarPlayerControlsType = {
  audioRef: HTMLAudioElement | null;
  onClick: () => void;
};

export function BarPlayerControls({
  audioRef,
  onClick,
}: BarPlayerControlsType) {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const isShuffled = useAppSelector((store) => store.playlist.isShuffled);

  const dispatch = useAppDispatch();

  function handlePrevTrackClick() {
    if (!currentTrack) return;
    dispatch(setPrevTrack());
  }

  function handleLoopClick() {
    if (!audioRef) return;
    if (!audioRef.loop) audioRef.loop = true;
    else audioRef.loop = false;
  }

  function handleNextTrackClick() {
    if (!currentTrack) return;
    dispatch(setNextTrack());
  }

  function handleShuffleClick() {
    if (!currentTrack) return;
    dispatch(setToggleShuffled());
    dispatch(setCurrentPlaylist());
  }

  return (
    <div className={styles.playerControls}>
      <div onClick={handlePrevTrackClick} className={styles.playerBtnPrev}>
        <SVG className={styles.playerBtnPrevSvg} url="prev" />
      </div>
      <div
        onClick={onClick}
        className={classNames(styles.playerBtnPlay, styles._btn)}
      >
        <SVG
          className={styles.playerBtnPlaySvg}
          url={audioRef?.paused ? "play" : "pause"}
        />
      </div>
      <div onClick={handleNextTrackClick} className={styles.playerBtnNext}>
        <SVG className={styles.playerBtnNextSvg} url="next" />
      </div>
      <div
        onClick={handleLoopClick}
        className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
      >
        <SVG
          className={
            audioRef?.loop
              ? `${styles.playerBtnActiveRepeatSvg}`
              : `${styles.playerBtnRepeatSvg}`
          }
          url={audioRef?.loop ? "repeatActive" : "repeat"}
        />
      </div>
      <div
        onClick={handleShuffleClick}
        className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
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
  );
}
