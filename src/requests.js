const API_KEY = "07a0dc8d0120d7caaab7c92f067e365a";

const requests = {
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&query=`,
};

export default requests;
