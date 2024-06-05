export function timeString(durationSec: number) {
  const durationTrackSec = Math.round(durationSec) % 60;
  const durationTrackMin = (Math.round(durationSec) - durationTrackSec) / 60;

  return `${durationTrackMin < 10 ? "0" : ""}${durationTrackMin} : ${
    durationTrackSec < 10 ? "0" : ""
  }${durationTrackSec}`;
}
