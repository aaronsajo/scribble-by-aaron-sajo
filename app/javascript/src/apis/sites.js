import axios from "axios";

const show = () => axios.get("/sites");
const update = payload => axios.put("/sites", payload);

const siteApi = {
  show,
  update,
};

export default siteApi;
