import axios from "axios";

const create = payload => axios.post("/categories", payload);
const list = () => axios.get("/categories");
const show = id => axios.get(`/categories/${id}`);
const update = ({ id, payload }) => axios.put(`/categories/${id}`, payload);
const destroy = id => axios.delete(`/categories/${id}`);
const sort = ({ id, payload }) => axios.put(`/categories/${id}/sort`, payload);
const categoryApi = {
  create,
  list,
  show,
  update,
  destroy,
  sort,
};

export default categoryApi;
