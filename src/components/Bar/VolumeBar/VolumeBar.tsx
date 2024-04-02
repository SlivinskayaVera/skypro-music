import classNames from "classnames";
import styles from "../Bar.module.css";
import { SVG } from "@/components/SVGImage/SVGImage";
import { useRef, useState } from "react";

type VolumeBarType = {
  audioRef: HTMLAudioElement | null;
};

export function VolumeBar({ audioRef }: VolumeBarType) {
  const [volume, setVolume] = useState<string | null>();
  const volumeRef = useRef<HTMLInputElement | null>(null);

  function handleVolumeChange() {
    if (!audioRef || !volume) return;
    audioRef.volume = +volume;
  }

  return (
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
            className={classNames(styles.barPlayerProgress, styles._btn)}
            type="range"
            name="range"
            min="0"
            max="1"
            step={0.0000000001}
          />
        </div>
      </div>
    </div>
  );
}
