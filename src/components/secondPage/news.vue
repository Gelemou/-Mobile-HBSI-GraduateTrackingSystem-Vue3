<template>
  <div class="container">
    <span>News Detail</span>
    <h1>新闻详情</h1>
    <div class="content">
      <ul>
        <li v-for="newLi in news" :key="newLi.newsId">
          <router-link :to="`newsDetail/${newLi.newsId}`">
            <div class="item">
              <img :src="get_img_url(newLi.image1)" alt="" />
              <div class="titleTime">
                <h3>{{ newLi.title }}</h3>
                <span>{{ newLi.createTime }}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getNews } from "../../utils/home";
import { get_img_url } from "../../utils/urls";

const news = ref([]);

onMounted(() => {
  getNews({ pageNum: 1, pageSize: 4, newsType: 2 }).then((data) => {
    news.value = data.result.list;
  });
});
</script>
<style lang="less" scoped>
div {
  color: #000;
}
h1 {
  text-align: left;
  margin-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
.container {
  width: 85%;
  margin: 50px auto;
}
.content {
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  // 新闻标题
  h3 {
    font-size: 24px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
  }
  // 新闻时间
  span {
    color: grey;
  }
  li {
    margin-bottom: 20px;
  }
}
// 列表的每一项
.item {
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
  border: 1px solid rgb(234, 234, 234);
}
// 新闻标题和时间
.titleTime {
  width: 120px;
  height: 62px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}
</style>
