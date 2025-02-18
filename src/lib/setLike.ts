"use client";

import { getAllFavoriteTracks, toLikeTrack } from "@/app/api/musicApi";
import { Track } from "../../types.types";
import { setFavoritePlaylist } from "@/store/features/playlistSlice";
import { refreshTokens } from "@/app/api/userApi";
import Cookie from "js-cookie"

export function setLike(
  track: Track,
  dispatch: React.Dispatch<{
    payload: Track[];
    type: "playlist/setFavoritePlaylist";
  }>
) {
  const cookie = Cookie.get("tokens");
  const accessToken = cookie && JSON.parse(cookie).access;
  const refreshToken = cookie && JSON.parse(cookie).refresh;

  toLikeTrack({ id: `${track._id}`, accessToken })
    .then(() => getAllFavoriteTracks({ accessToken }))
    .then((res) => {
      dispatch(setFavoritePlaylist(res));
    })
    .catch(() => {
      refreshTokens({ token: refreshToken });
      setLike(track, dispatch);
    });
}
