import { Track } from "../../types.types";
type TrackKeys = Pick<Track, "author" | "genre" | "release_date">;

export function getListItem(item: keyof TrackKeys, trackList: Track[]) {
  const listItem: string[] = [];
  trackList?.forEach((track) => {
    if (listItem.includes(track[item]) || track[item] === "-") return;
    listItem.push(track[item]);
  });
  return listItem.sort();
}