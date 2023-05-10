<template>
  <div class="container">
    <router-link to="/noticeSecond"><h3>通知公告 Notice</h3></router-link>
    <img :src="get_img_url(imgUrl)" alt="" />
    <p v-for="notice in notices" :key="notice.newsId">
      <router-link :to="`noticeDetail/${notice.newsId}`">
        {{ notice.title }}</router-link
      >
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getNews } from "../utils/home";
import { get_img_url } from "../utils/urls";

const notices = ref([]);
let imgUrl = "";

function getNotice() {
  getNews({ pageNum: 1, pageSize: 4, newsType: 1 }).then((data) => {
    notices.value = data.result.list;
    imgUrl = notices.value[0].image1;
  });
}
onMounted(getNotice);
</script>
<style lang="less" scoped>
a {
  color: #000;
}
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
}
// 新闻标题
p {
  color: #000;
  padding: 20px 0;
  border-bottom: 1px solid grey;
  &:hover {
    color: #09437c;
  }
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
}
</style>
