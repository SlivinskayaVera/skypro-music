import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Track } from "../../../types.types";

type PlaylistType = {
  tracks: null | Track[];
  currentTrack: null | Track;
  isShuffled: boolean;
  isRepeated: boolean;
};
const initialState: PlaylistType = {
  tracks: null,
  currentTrack: null,
  isShuffled: false,
  isRepeated: false,
};

// Редьюсер принимает текущее состояние, применяет к нему какое-то действие и возвращает новое состояние. 
// Редьюсеры содержат основную логику приложения
// action.payload - это данные из вне (функции), то есть это параметры/аргументы при вызове редьюсера 
const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    setToggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setRepeatTrack: (state) => {
      state.isRepeated = !state.isRepeated;
    },
  },
});

export const { setTracks, setToggleShuffled, setRepeatTrack } =
  playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
