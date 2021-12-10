import axios from "axios";

const list = () => axios.get("/public/categories");

const publicApi = {
  list,
};

export default publicApi;
