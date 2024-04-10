"use client";

import { getAllFavoriteTracks, toLikeTrack } from "@/app/api/musicApi";
import { Track } from "../../types.types";
import { setFavoritePlaylist } from "@/store/features/playlistSliсe";
import { refreshTokens } from "@/app/api/userApi";

const refreshToken =
  localStorage.tokens && JSON.parse(localStorage.tokens).refresh;
const accessToken =
  localStorage.tokens && JSON.parse(localStorage.tokens).access;

export function setLike(
  track: Track,
  dispatch: React.Dispatch<{
    payload: Track[];
    type: "playlist/setFavoritePlaylist";
  }>
) {
  toLikeTrack({ id: `${track.id}`, accessToken: accessToken })
    .then(() => getAllFavoriteTracks({ accessToken: accessToken }))
    .then((res) => {
      dispatch(setFavoritePlaylist(res));
    })
    .catch(() => {
      refreshTokens({ token: refreshToken });
      setLike(track, dispatch);
    });
}
