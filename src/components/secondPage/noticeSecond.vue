<template>
  <div class="container">
    <h1>通知详情</h1>
    <div class="content">
      <ul>
        <li v-for="notice in notices" :key="notice.newsId">
          <router-link class="item" :to="`noticeDetail/${notice.newsId}`">
            <div class="time">
              <span>{{
                notice.createTime.substring(0, notice.createTime.indexOf("-"))
              }}</span>
              <span> {{ notice.createTime.substring(5) }} </span>
            </div>
            <h3 class="title">{{ notice.title }}</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getNews } from "../../utils/home";

const notices = ref([]);

// 取年月日

onMounted(() => {
  getNews({ pageNum: 1, pageSize: 4, newsType: 1 }).then((data) => {
    notices.value = data.result.list;
    console.log(notices.value[0].createTime.indexOf("-"));
  });
});
</script>
<style lang="less" scoped>
h1 {
  text-align: center;
}
ul {
  padding: 0;
  list-style: none;
}
.container {
  width: 85%;
  margin: 0 auto;
  color: #000;
}
.item {
  display: flex;
  height: 100%;
  align-items: center;
  background: rgb(239, 238, 238);
  margin-top: 20px;
}
.time {
  width: 70px;
  height: 70px;
  background-color: #1a5ba1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    padding-left: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
}
.title {
  color: #000;
  font-size: 20px;
  font-weight: bolder;
  margin-left: 20px;
}
</style>
