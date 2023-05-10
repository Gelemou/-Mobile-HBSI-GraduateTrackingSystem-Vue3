const SERVER_BASE_API = "http://42.51.17.36:9091";
const SERVER_IMG_BASE_API = "http://42.51.17.36:888";

export const server_base_api = SERVER_BASE_API;
export const server_img_base_api = SERVER_IMG_BASE_API;

export function get_img_url(url) {
  return server_img_base_api + url;
}
