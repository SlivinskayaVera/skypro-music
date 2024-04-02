import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Track } from "../../../types.types";

type CategoryPlaylistsType = {
  id: number;
  items: Track[];
  owner: {
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    username: string;
  };
};

type PlaylistType = {
  tracks: [] | Track[];
  categoryPlaylists: CategoryPlaylistsType[];
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
  categoryPlaylists: [],
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
    const currentTracks = state.currentPlaylist;
    let newIndex =
      currentTracks.findIndex((item) => item.id === state.currentTrack?.id) +
      direction;
    // Циклическое переключение
    newIndex = (newIndex + currentTracks.length) % currentTracks.length;

    state.currentTrack = currentTracks[newIndex];
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
    setPlaylistsByCategory: (
      state,
      action: PayloadAction<CategoryPlaylistsType[]>
    ) => {
      state.categoryPlaylists = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlaylist: (state) => {
      state.currentPlaylist =
        state.filteredTracks.length !== 0
          ? state.filteredTracks
          : state.filterOptions.searchValue.length > 2 &&
            state.filteredTracks.length === 0
          ? []
          : state.isShuffled
          ? state.shuffledPlaylist
          : state.tracks;
    },
    setToggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
      state.shuffledPlaylist = [...state.currentPlaylist].sort(
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
      action: PayloadAction<{
        authors?: string[];
        genres?: string[];
        searchValue?: string;
      }>
    ) => {
      state.filterOptions = {
        authors: action.payload.authors || state.filterOptions.authors,
        genres: action.payload.genres || state.filterOptions.genres,
        searchValue: action.payload.searchValue || "",
        date: state.filterOptions.date,
      };
      state.filteredTracks = state.tracks.filter((track) => {
        const hasAuthors = state.filterOptions.authors.length !== 0;
        const hasGenres = state.filterOptions.genres.length !== 0;
        const isSearchValueIncluded = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchValue.toLowerCase());

        if (hasAuthors || hasGenres) {
          return (
            (state.filterOptions.authors.includes(track.author) &&
              state.filterOptions.genres.includes(track.genre) &&
              isSearchValueIncluded) ||
            (state.filterOptions.authors.includes(track.author) &&
              isSearchValueIncluded) ||
            (state.filterOptions.genres.includes(track.genre) &&
              isSearchValueIncluded)
          );
        }
        return isSearchValueIncluded;
      });
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setSortedTracksByDate: (state, action: PayloadAction<{ date: string }>) => {
      state.filterOptions.authors = [];
      state.filterOptions.genres = [];
      state.filteredTracks = [...state.tracks].sort((a, b) => {
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
  setPlaylistsByCategory,
  setCurrentTrack,
  setToggleShuffled,
  setRepeatTrack,
  setNextTrack,
  setCurrentPlaylist,
  setPrevTrack,
  setFilteredTracks,
  setIsPlaying,
  setSortedTracksByDate,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
