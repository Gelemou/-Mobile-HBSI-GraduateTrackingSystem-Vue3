import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/show",
      name: "show",
      component: () => import("../views/showView.vue"),
    },
    {
      path: "/memory",
      name: "memory",
      component: () => import("../views/memoryView.vue"),
    },
    {
      path: "/active",
      name: "active",
      component: () => import("../views/activeView.vue"),
    },
    {
      path: "/more",
      name: "more",
      component: () => import("../views/moreView.vue"),
    },
    // 新闻中心二级页面
    {
      path: "/news",
      name: "news",
      component: () => import("../components/secondPage/news.vue"),
    },
    // 新闻中心三级页面(新闻页面)
    {
      path: "/newsDetail/:id",
      name: "/newsDetail",
      component: () => import("../components/secondPage/newsDetail.vue"),
    },
    // 通知公告二级页面
    {
      path: "/noticeSecond",
      name: "/noticeSecond",
      component: () => import("../components/secondPage/noticeSecond.vue"),
    },
    // 通知公告详情
    {
      path: "/noticeDetail/:id",
      name: "/noticeDetail",
      component: () => import("../components/secondPage/noticeDetail.vue"),
    },
    // 近期活动详情
    {
      path: "/activityDetail/:id",
      name: "/activityDetail",
      component: () => import("../components/secondPage/activityDetail.vue"),
    },
    // 滑动组件
    {
      path: "/touchSlide",
      name: "/touchSlide",
      component: () => import("../components/touchSlide.vue"),
    },
  ],
});

export default router;
