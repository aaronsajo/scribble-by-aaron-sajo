import axios from "axios";

const list = () => axios.get("/articles");
const create = payload => axios.post("/articles", payload);
const show = id => axios.get(`/articles/${id}`);
const update = ({ id, payload }) => axios.put(`/articles/${id}`, payload);
const destroy = id => axios.delete(`/articles/${id}`);
const articleApi = {
  list,
  create,
  show,
  update,
  destroy,
};

export default articleApi;
