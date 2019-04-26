const API_TOKEN = "02f734cbb224478c8f722254ca455529";

export function getFilmsFromApiWithSearchedText(text) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}

// API/TMDBApi.js

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}
