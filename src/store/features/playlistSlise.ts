import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Track } from "../../../types.types";

type PlaylistType = {
  tracks: [] | Track[];
  currentPlaylist: [] | Track[];
  currentTrack: null | Track;
  isShuffled: boolean;
  isRepeated: boolean;
  shuffledPlaylist: [] | Track[];
  filterOptions: {
    authors: string[];
    genres: string[];
    date: string;
    searchValue: string;
  };
  filteredTracks: [] | Track[];
  isPlaying: boolean;
};

const initialState: PlaylistType = {
  tracks: [],
  currentPlaylist: [],
  currentTrack: null,
  isShuffled: false,
  isRepeated: false,
  shuffledPlaylist: [],
  filterOptions: { authors: [], genres: [], date: "", searchValue: "" },
  filteredTracks: [],
  isPlaying: false,
};

function changeTrack(direction: number) {
  return (state: PlaylistType) => {
    const currentTracks = state.isShuffled
      ? state.shuffledPlaylist
      : state.tracks;
    let newIndex =
      currentTracks.findIndex((item) => item.id === state.currentTrack?.id) +
      direction;
    // Циклическое переключение
    newIndex = (newIndex + currentTracks.length) % currentTracks.length;

    state.currentTrack = currentTracks[newIndex];
    // state.isPlaying = true;
  };
}

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
    setNextTrack: changeTrack(1),
    setPrevTrack: changeTrack(-1),
    setFilteredTracks: (
      state,
      action: PayloadAction<{ authors?: string[]; searchValue?: string }>
    ) => {
      state.filterOptions = {
        authors: action.payload.authors || state.filterOptions.authors,
        genres: state.filterOptions.genres,
        searchValue: action.payload.searchValue || "",
        date: state.filterOptions.date,
        // action.payload.searchValue || state.filterOptions.searchValue,
      };
      state.filteredTracks = state.tracks.filter((track) => {
        const hasAuthors = state.filterOptions.authors.length !== 0;
        const isSearchValueIncluded = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchValue.toLowerCase());
        if (hasAuthors) {
          return (
            state.filterOptions.authors.includes(track.author) &&
            isSearchValueIncluded
          );
        }
        return isSearchValueIncluded;
      });
    },
    setFilteredGenres: (
      state,
      action: PayloadAction<{ genres?: string[] }>
    ) => {
      state.filterOptions = {
        authors: state.filterOptions.authors,
        genres: action.payload.genres || state.filterOptions.genres,
        searchValue: state.filterOptions.searchValue,
        date: state.filterOptions.date,
      };
      state.filteredTracks = state.tracks.filter((track) => {
        const hasAuthors = state.filterOptions.authors.length !== 0;
        const hasGenres = action.payload.genres?.includes(track.genre);

        if (hasAuthors) {
          return (
            state.filterOptions.authors.includes(track.author) && hasGenres
          );
        }
        return hasGenres;
      });
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setSortedTracksByDate: (state, action: PayloadAction<{ date: string }>) => {
      state.filteredTracks = [...state.currentPlaylist].sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);

       return action.payload.date === "Сначала новые"
          ? +dateB - +dateA
          : action.payload.date === "Сначала старые"
          ? +dateA - +dateB
          : 0;
      });
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
  setFilteredTracks,
  setFilteredGenres,
  setIsPlaying,
  setSortedTracksByDate,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
