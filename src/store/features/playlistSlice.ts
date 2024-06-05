import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Track } from "../../../types.types";

type PlaylistType = {
  tracks: [] | Track[];
  currentPlaylist: [] | Track[];
  favoriteTracks: [] | Track[];
  filteredTracks: [] | Track[];
  shuffledPlaylist: [] | Track[];
  currentTrack: null | Track;
  isShuffled: boolean;
  isRepeated: boolean;
  filterOptions: {
    authors: string[];
    genres: string[];
    date: string;
    searchValue: string;
  };
  isPlaying: boolean;
};

const initialState: PlaylistType = {
  tracks: [],
  favoriteTracks: [],
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
    newIndex = (newIndex + currentTracks.length) % currentTracks.length;
    state.currentTrack = currentTracks[newIndex];
  };
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTrackList: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    setFavoritePlaylist: (state, action: PayloadAction<Track[]>) => {
      state.favoriteTracks = action.payload;
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
        const hasAuthor = state.filterOptions.authors.length !== 0;
        const hasGenre = state.filterOptions.genres.length !== 0;

        const isAuthors = hasAuthor
          ? state.filterOptions.authors.includes(track.author)
          : true;
        const isGenres = hasGenre
          ? state.filterOptions.genres.includes(track.genre)
          : true;
        const isSearchValueIncluded = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchValue.toLowerCase());

        return isAuthors && isGenres && isSearchValueIncluded;
      });
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setSortedTracksByDate: (state, action: PayloadAction<{ date: string }>) => {
      state.filteredTracks = [...state.filteredTracks].sort((a, b) => {
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
  setFavoritePlaylist,
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
