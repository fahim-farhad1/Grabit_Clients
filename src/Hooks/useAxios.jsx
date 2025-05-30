import axios from "axios";

const instance = axios.create({
  baseURL: "https://grabit-ecommerce-server.vercel.app",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
