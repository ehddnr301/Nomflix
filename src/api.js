import axios from "axios";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "10923b261ba94d897ac6b81148314a3f",
    language: "en-US"
  }
});

const api2 = axios.create({
  baseURL:
    "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json.jsp?",
  params: {
    collection: "kmdb_new",
    ServiceKey: "EMCVJJ74ZMX68GH131Q5"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const korApi = {
  popular: () =>
    api2.get("", {
      params: {
        listCount: "50",
        releaseDts: `${year}${month < 10 ? `0${month}` : month}${
          day - 20 < 0 ? (day < 10 ? `0${day}` : day) : day - 20
        }`,
        nation: "대한민국",
        type: "극영화"
      }
    }),
  nowPlaying: () =>
    api2.get("", {
      params: {
        listCount: "50",
        releaseDts: `${year}${month < 10 ? `0${month}` : month}${
          day - 20 < 0 ? (day < 10 ? `0${day}` : day) : day - 20
        }`,
        nation: "대한민국"
      }
    }),
  searchKor: term =>
    api2.get("", {
      params: {
        title: term
      }
    }),
  korDetail: id =>
    api2.get("", {
      params: {
        movieSeq: id
      }
    })
};

// export const tvApi = {
//   topRated: () => api.get("tv/top_rated"),
//   popular: () => api.get("tv/popular"),
//   airingToday: () => api.get("tv/airing_today"),
//   showDetail: id =>
//     api.get(`tv/${id}`, {
//       params: {
//         append_to_response: "videos"
//       }
//     }),
//   search: term =>
//     api.get("search/tv", {
//       params: {
//         query: encodeURIComponent(term)
//       }
//     })
// };
