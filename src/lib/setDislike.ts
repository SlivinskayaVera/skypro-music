"use client";

import { getAllFavoriteTracks, toDislikeTrack } from "@/app/api/musicApi";
import { Track } from "../../types.types";
import { setFavoritePlaylist } from "@/store/features/playlistSlice";
import { refreshTokens } from "@/app/api/userApi";
import { setAuthState } from "@/store/features/authSlice";

export function setDislike(
  track: Track,
  dispatch: React.Dispatch<{
    payload: Track[];
    type: "playlist/setFavoritePlaylist";
  }>
) {
  const refreshToken =
    localStorage.tokens && JSON.parse(localStorage.tokens).refresh;
  const accessToken =
    localStorage.tokens && JSON.parse(localStorage.tokens).access;

  toDislikeTrack({
    id: `${track.id}`,
    accessToken: accessToken,
  })
    .then(() => getAllFavoriteTracks({ accessToken: accessToken }))
    .then((res) => {
      dispatch(setFavoritePlaylist(res));
    })
    .catch(() =>
      refreshTokens({ token: refreshToken }).then((freshToken) => {
        setAuthState({ refresh: refreshToken, access: freshToken });
        setDislike(track, dispatch);
      })
    );
}
