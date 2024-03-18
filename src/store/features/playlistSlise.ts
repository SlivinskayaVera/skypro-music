import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Track } from "../../../types.types";

type PlaylistType = {
  tracks: [] | Track[];
  currentPlaylist: [] | Track[];
  currentTrack: null | Track;
  isShuffled: boolean;
  isRepeated: boolean;
  shuffledPlaylist: [] | Track[];
};

const initialState: PlaylistType = {
  tracks: [],
  currentPlaylist: [],
  currentTrack: null,
  isShuffled: false,
  isRepeated: false,
  shuffledPlaylist: [],
};

// Редьюсер принимает текущее состояние, применяет к нему какое-то действие и возвращает новое состояние.
// Редьюсеры содержат основную логику приложения
// action.payload - это данные из вне (функции), то есть это параметры/аргументы при вызове редьюсера
const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTrackList: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlaylist: (state) => {
      state.currentPlaylist = state.isShuffled
        ? state.shuffledPlaylist
        : state.tracks;
    },
    setToggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
      state.shuffledPlaylist = [...state.tracks].sort(
        () => Math.random() - 0.5
      );
    },
    setRepeatTrack: (state) => {
      state.isRepeated = !state.isRepeated;
    },
    setNextTrack: (state) => {
      const index =
        state.currentPlaylist.findIndex(
          (track) => track.id === state.currentTrack?.id
        ) + 1;
      if (state.currentPlaylist[index] === undefined) {
        state.currentTrack = state.currentPlaylist[0];
      } else {
        state.currentTrack = state.currentPlaylist[index];
      }
    },
    setPrevTrack: (state) => {
      const index =
        state.currentPlaylist.findIndex(
          (track) => track.id === state.currentTrack?.id
        ) - 1;
      if (state.currentPlaylist[index] === undefined) {
        state.currentTrack = state.currentPlaylist[0];
      } else {
        state.currentTrack = state.currentPlaylist[index];
      }
    },
  },
});

export const {
  setTrackList,
  setCurrentTrack,
  setToggleShuffled,
  setRepeatTrack,
  setNextTrack,
  setCurrentPlaylist,
  setPrevTrack,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
