import request from "./request";

//参数para是一个对象(axios中的config中的params)
export function getSliderPics(para) {
  // 返回axios生成的promise实例
  return request({
    url: "/swiper/wx/getListAll",
    method: "post",
    params: para,
  });
}
// 获取新闻中心使用的新闻
export function getNews(para) {
  return request({
    url: "/news/wx/getListAll",
    method: "post",
    params: para,
  });
}
// 获取新闻中心,通知公告内容详情
export function getNewsOrNoticeDetails(para) {
  return request({
    url: "/news/wx/getById",
    method: "post",
    params: para,
  });
}
// 获取历届毕业照信息
export function getPhotoInfo(para) {
  return request({
    url: "/classes/wx/getClassCovers",
    method: "post",
    params: para,
  });
}
// 获取校友风采
export function getFriends(para) {
  return request({
    url: "/graduate/wx/getExcellentGraduateList",
    method: "post",
    params: para,
  });
}
// 获取近期活动(首页)和校友活动
export function getActivity(para) {
  return request({
    url: "/activity/getListAll",
    method: "post",
    params: para,
  });
}
// 获取活动通知详情
export function getActivityDetail(para) {
  return request({
    url: "/activity/getByIdAll",
    method: "post",
    params: para,
  });
}
// 推荐阅读
export function getReadList(para) {
  return request({
    url: "/activity/getListAllRe",
    method: "post",
    params: para,
  });
}
// 校友活动(精彩瞬间)
export function getActivitiesGlimpse(para) {
  return request({
    url: "/activity/getListImgAll",
    method: "post",
    params: para,
  });
}
// 班级记忆 系别
export function getMemory(para) {
  return request({
    url: "/department/wx/getDepartmentByYear",
    method: "post",
    params: para,
  });
}
// 班级记忆 班级
export function getMemoryClass(para) {
  return request({
    url: "/classes/wx/getClassByDeptId",
    method: "post",
    params: para,
  });
}
