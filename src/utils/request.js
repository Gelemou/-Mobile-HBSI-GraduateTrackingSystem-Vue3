import axios from "axios";
import { server_base_api } from "./urls";
// export default {
//   getSliderPics(pageNum, pageSize) {
//     return axios.get(urls.SERVER_BASE_API + "/swiper/wx/getListAll", {
//       params: { pageNum: pageNum, pageSize: pageSize },
//     });
//   },
// };

const instance = axios.create({
  baseURL: server_base_api,
  timeout: 0,
});
// 拦截器,用来拦截返回数据,只保留服务器接口返回的data
instance.interceptors.response.use((res) => {
  return res.data;
});
export default instance;

// export function request(config) {
//   console.log(process.env);
//   const instance = anxios.create({
//     baseURL: urls.SERVER_BASE_API,
//     timeout: 0,
//   });
//   return instance(config);
// }
