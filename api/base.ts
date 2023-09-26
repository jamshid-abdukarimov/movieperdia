import api from "axios";

const axios = api.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c95fea8469525c1b1ebbf16b59165390",
  },
});

export default axios;
