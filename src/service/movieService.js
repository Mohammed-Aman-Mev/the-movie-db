import axios from "axios";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjNlNTVkYTg0ZTZjYTY0ZGI0ZDFkZmVkMWIzMGRhMSIsInN1YiI6IjY1NzliMzM3NGQyM2RkMDBjNmFhYzE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2cUIvymu9eTMPNxEBwgBYhccP_6-UvkkFpMCpG5svnw",
  },
};

const URL = "https://api.themoviedb.org/3/";
export const trending_Movies = async () => {
  try {
    const data = await axios.get(
      `${URL}` + "trending/all/day?language=en-US",
      options
    );
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------start-------------------------------------//

export const searchMoviebyid = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return response.data;
};

export const searchMovieTrailerbyid = async (id) => {
  const response = await axios.get(
    `https://api.kinocheck.de/movies?tmdb_id=${id}&language=en&categories=Trailer`
  );

  return response.data;
};

//trending all

export const getAlltrending = async (i) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${i}`;

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get all tv shows data

export const getAlltvshows = async (i) => {
  const url = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${i}`;

  try {
    const response = await axios.get(url, options);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const searchTvbyid = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;

  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const onlyMovie = async (i) => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${i}`;

  try {
    const response = await axios.get(url, options);
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const onlyUpcoming = async (i) => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${i}`;

  try {
    const response = await axios.get(url, options);
    // console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const searchMulti = async (str, i) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${str}&include_adult=false&language=en-US&page=${i}`;

  try {
    const response = await axios.get(url, options);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const onlyPopular = async (i) => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${i}`;

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
