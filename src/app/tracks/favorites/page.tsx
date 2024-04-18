"use client";

import { getAllFavoriteTracks } from "@/app/api/musicApi";
import TrackItem from "@/components/TrackItem/TrackItem";
import { setFavoritePlaylist } from "@/store/features/playlistSlice";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshTokens } from "@/app/api/userApi";
import Link from "next/link";
import withAuth from "@/components/WrapperPageWithAuth/WrapperPageWithAuth";
import { WrapperTracks } from "@/components/WrapperTracks/WrapperTracks";
import Cookie from "js-cookie";

function Tracks() {
  const dispatch = useDispatch();
  const favoritePlaylist = useAppSelector(
    (store) => store.playlist.favoriteTracks
  );
  const cookie = Cookie.get("tokens");
  const refreshToken = cookie && JSON.parse(cookie).refresh;
  
  useEffect(() => {
    refreshTokens({ token: refreshToken })
      .then((freshToken) => getAllFavoriteTracks({ accessToken: freshToken }))
      .then((res) => {
        dispatch(setFavoritePlaylist(res));
      });
  }, [dispatch, refreshToken]);

  return (
    <WrapperTracks title={"Мои треки"}>
      {favoritePlaylist.length !== 0 ? (
        favoritePlaylist.map((track) => {
          return <TrackItem key={track.id} track={track} />;
        })
      ) : (
        <>
          <p>А ничего нет, вот тебе</p>
          <Link href="/tracks">ссылка на все треки</Link>
          <p>, беги лайкать, наслаждайся :)</p>
        </>
      )}
    </WrapperTracks>
  );
}

export default withAuth(Tracks);
