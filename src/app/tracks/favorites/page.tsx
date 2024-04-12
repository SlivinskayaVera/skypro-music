"use client";

import { getAllFavoriteTracks } from "@/app/api/musicApi";
import { SVG } from "@/components/SVGImage/SVGImage";
import TrackItem from "@/components/TrackItem/TrackItem";
import { setFavoritePlaylist } from "@/store/features/playlistSlice";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../../../components/Playlist/Playlist.module.css";
import { refreshTokens } from "@/app/api/userApi";
import Link from "next/link";
import withAuth from "@/components/WrapperPageWithAuth/WrapperPageWithAuth";
import { WrapperTracks } from "@/components/WrapperTracks/WrapperTracks";

function Tracks() {
  const dispatch = useDispatch();
  const favoritePlaylist = useAppSelector(
    (store) => store.playlist.favoriteTracks
  );
  const token = JSON.parse(localStorage.tokens).refresh;

  useEffect(() => {
    refreshTokens({ token })
      .then((freshToken) => getAllFavoriteTracks({ accessToken: freshToken }))
      .then((res) => {
        dispatch(setFavoritePlaylist(res));
      });
  }, []);

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
