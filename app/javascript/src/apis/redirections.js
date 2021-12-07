import axios from "axios";

const create = payload => axios.post("/redirections", payload);
const list = () => axios.get("/redirections");
const destroy = id => axios.delete(`/redirections/${id}`);
const show = id => axios.get(`/redirections/${id}`);
const update = ({ id, payload }) => axios.put(`/redirections/${id}`, payload);
const redirectionApi = {
  create,
  list,
  destroy,
  show,
  update,
};

export default redirectionApi;
