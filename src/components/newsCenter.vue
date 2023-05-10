<template>
  <div class="container">
    <router-link to="/news"><h3>新闻中心 NewsCenter</h3></router-link>
    <div class="content">
      <img :src="get_img_url(imageUrl)" alt="" />
      <p v-for="newOption in news" :key="newOption.newsId">
        <router-link :to="`newsDetail/${newOption.newsId}`">
          {{ newOption.title }}</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getNews } from "../utils/home";
import { get_img_url } from "../utils/urls";
const news = ref([]);
let imageUrl = "";
function getNewsFun() {
  getNews({ pageNum: 1, pageSize: 4, newsType: 2 }).then((data) => {
    news.value = data.result.list;
    imageUrl = news.value[0].image1; // 取出第一张图片的路径
  });
}
onMounted(getNewsFun);
</script>

<style lang="less" scoped>
// 页面整体布局
.container {
  width: 80%;
  margin: 30px auto;
}
// 重点新闻图片显示
.container > img {
  width: 100%;
  margin-top: 10px;
}
h3 {
  color: #666;
  margin-bottom: 20px;
}
// 新闻标题
p {
  color: #000;
  padding: 20px 0;
  border-bottom: 1px solid grey;
  &:last-child {
    border-bottom: none;
  }
  // &:hover {
  //   color: #09437c;
  // }
}
.content img {
  width: 100%;
}
.content {
  a {
    color: #000;
    padding: 10px 0;
  }
}
</style>
