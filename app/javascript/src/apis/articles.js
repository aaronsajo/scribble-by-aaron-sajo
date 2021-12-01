import axios from "axios";

const list = () => axios.get("/articles");
const articleApi = {
  list,
};

export default articleApi;
