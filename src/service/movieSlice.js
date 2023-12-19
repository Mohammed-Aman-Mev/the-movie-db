import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAlltrending,
  getAlltvshows,
  onlyMovie,
  onlyPopular,
  onlyUpcoming,
  searchMovieTrailerbyid,
  searchMoviebyid,
  searchMulti,
  searchTvbyid,
} from "./movieService";

let initialState = {
  trendingMovies: null,
  trendingMoviesPage: 1,

  popularMovies: null,
  popularMoviesPage: 1,

  allMovies: null,
  allMoviesPage: 1,

  upComing: null,
  upComingPage: 32,

  allTvshows: null,
  allTvshowsPage: 1,

  filter: "",

  movieDetailes: null,

  tvDetailes: null,

  videoDetaile: null,

  imageURL: "https://image.tmdb.org/t/p/w500",

  route: "",
  str: "",

  search: [],
  searchPage: 1,

  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const movieSlice = createSlice({
  name: "movieDate",
  initialState,
  reducers: {
    setTrandingMoviesdata: (state, action) => {
      state.trendingMovies = action.payload;
    },
    setRoute: (state, action) => {
      state.route = action.payload;
    },
    setstr: (state, action) => {
      state.str = action.payload;
    },
    setTrendingMoviesPage: (state) => {
      state.trendingMoviesPage = state.trendingMoviesPage + 1;
    },
    setAllMoviesPage: (state) => {
      state.allMoviesPage = state.allMoviesPage + 1;
    },
    setPopularMoviesPage: (state) => {
      state.popularMoviesPage = state.popularMoviesPage + 1;
    },
    setAllTvShowsPage: (state) => {
      state.allTvshowsPage = state.allTvshowsPage + 1;
    },
    setUpcomingPage: (state) => {
      state.upComingPage = state.upComingPage - 1;
    },
    setSearchPage: (state, action) => {
      if (action) state.searchPage = action.payload;
      else state.searchPage = state.searchPage + 1;
    },
    setFilterData: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Movie_detailes_by_id.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
        state.movieDetailes = null;
      })
      .addCase(Movie_detailes_by_id.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.movieDetailes = action.payload;
        state.filter = action.payload;
      })
      .addCase(Movie_detailes_by_id.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(Video_detailes_by_id.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
        state.videoDetaile = null;
      })
      .addCase(Video_detailes_by_id.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.videoDetaile = action.payload;
        state.filter = action.payload;
      })
      .addCase(Video_detailes_by_id.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(Trending_movie_tv.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(Trending_movie_tv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        if (state.trendingMovies === null) {
          state.trendingMovies = action.payload.results;
          state.filter = action.payload.results;
        } else {
          state.trendingMovies = [
            ...state.trendingMovies,
            ...action.payload.results,
          ];
          state.filter = [...state.trendingMovies, ...action.payload.results];
        }
      })
      .addCase(Trending_movie_tv.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(Get_all_tv_shows.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(Get_all_tv_shows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        if (state.allTvshows === null) {
          state.allTvshows = action.payload;
          state.filter = action.payload;
        } else {
          state.allTvshows = [...state.allTvshows, ...action.payload];
          state.filter = [...state.allTvshows, ...action.payload];
        }
      })
      .addCase(Get_all_tv_shows.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(Tv_detailes_by_id.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.tvDetailes = null;

        state.message = "";
      })
      .addCase(Tv_detailes_by_id.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.tvDetailes = action.payload;
        state.message = "";
      })
      .addCase(Tv_detailes_by_id.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(Get_only_movies.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;

        state.message = "";
      })
      .addCase(Get_only_movies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.allMovies === null) {
          state.allMovies = action.payload;
          state.filter = action.payload;
        } else {
          state.allMovies = [...state.allMovies, ...action.payload];
          state.filter = [...state.allMovies, ...action.payload];
        }
        state.message = "";
      })
      .addCase(Get_only_movies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(Get_only_upcoming.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(Get_only_upcoming.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.upComing === null) {
          state.upComing = action.payload;
          state.filter = action.payload;
        } else {
          state.upComing = [...state.upComing, ...action.payload];
          state.filter = [...state.upComing, ...action.payload];
        }
        state.message = "";
      })
      .addCase(Get_only_upcoming.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(Only_popular.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;

        state.message = "";
      })
      .addCase(Only_popular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.popularMovies === null) {
          state.popularMovies = action.payload;
          state.filter = action.payload;
        } else {
          state.popularMovies = [...state.popularMovies, ...action.payload];
          state.filter = [...state.popularMovies, ...action.payload];
        }
        state.message = "";
      })
      .addCase(Only_popular.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(Search_multi.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;

        state.message = "";
      })
      .addCase(Search_multi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        console.log(action.payload);
        let check = false;
        for (let i = 0; i <= state.str; i++) {
          if (state.str[0] === action.payload[0].name[i]) return (check = true);
        }
        if (check) {
          state.search = [...state.search, ...action.payload];
          state.filter = [...state.search, ...action.payload];
        } else {
          state.search = action.payload;
          state.filter = action.payload;
        }
        state.message = "";
      })
      .addCase(Search_multi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const {
  setTrandingMoviesdata,
  setRoute,
  setstr,
  setTrendingMoviesPage,
  setAllMoviesPage,
  setPopularMoviesPage,
  setAllTvShowsPage,
  setUpcomingPage,
  setSearchPage,
  setFilterData,
} = movieSlice.actions;
export default movieSlice.reducer;

export const Movie_detailes_by_id = createAsyncThunk(
  "MOVIE_DETAILES_BY_ID",
  async (id, thunkAPI) => {
    try {
      return await searchMoviebyid(id);
    } catch (error) {
      console.log(error);
    }
  }
);

export const Video_detailes_by_id = createAsyncThunk(
  "VIDEO_DETAILES_BY_ID",
  async (id, thunkAPI) => {
    try {
      return await searchMovieTrailerbyid(id);
    } catch (error) {
      console.log(error);
    }
  }
);

export const Trending_movie_tv = createAsyncThunk(
  "TRENDING_MOVIE_TV",
  async (i, thunkAPI) => {
    try {
      return await getAlltrending(i);
    } catch (error) {
      console.log(error);
    }
  }
);

export const Get_all_tv_shows = createAsyncThunk(
  "GET_ALL_TV_SHOWS",
  async (i) => {
    try {
      return await getAlltvshows(i);
    } catch (error) {
      console.log(error);
    }
  }
);

export const Tv_detailes_by_id = createAsyncThunk(
  "TV_DETAILES_BY_ID",
  async (id, thunkAPI) => {
    try {
      return await searchTvbyid(id);
    } catch (error) {
      console.log(error);
    }
  }
);

export const Get_only_movies = createAsyncThunk(
  "GET_ONLY_MOVIES",
  async (i) => {
    try {
      return await onlyMovie(i);
    } catch (error) {
      console.log(error);
    }
  }
);

export const Get_only_upcoming = createAsyncThunk(
  "GET_ONLY_UPCOMING",
  async (i) => {
    try {
      return await onlyUpcoming(i);
    } catch (error) {
      console.log(error);
    }
  }
);

export const Only_popular = createAsyncThunk("ONLY_POPULAR", async (i) => {
  try {
    return await onlyPopular(i);
  } catch (error) {
    console.log(error);
  }
});

export const Search_multi = createAsyncThunk("SEARCH_MULTI", async ([a, b]) => {
  try {
    return await searchMulti(a, b);
  } catch (error) {
    console.log(error);
  }
});
