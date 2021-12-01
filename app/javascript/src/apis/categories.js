import axios from "axios";

const create = payload => axios.post("/categories", payload);
const list = () => axios.get("/categories");
const categoryApi = {
  create,
  list,
};

export default categoryApi;
