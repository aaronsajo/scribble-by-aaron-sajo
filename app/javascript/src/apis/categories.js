import axios from "axios";

const create = payload => axios.post("/categories", payload);
const list = () => axios.get("/categories");
const show = id => axios.get(`/categories/${id}`);
const update = ({ id, payload }) => axios.put(`/categories/${id}`, payload);
const destroy = id => axios.delete(`/categories/${id}`);
const categoryApi = {
  create,
  list,
  show,
  update,
  destroy,
};

export default categoryApi;
