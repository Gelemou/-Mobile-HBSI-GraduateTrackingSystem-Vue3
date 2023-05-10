<template>
  <div class="container">
    <router-link to="show">
      <h3>Show</h3>
      <h3>校友风采</h3>
    </router-link>
    <div class="content" v-for="show in shows" :key="show.graduateId">
      <img :src="get_img_url(show.image1)" alt="" />
      <span>{{ show.post }}--{{ show.name }} </span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getFriends } from "../utils/home";
import { get_img_url } from "../utils/urls";

const shows = ref([]);

onMounted(() => {
  getFriends({ pageNum: 1, pageSize: 4 }).then((data) => {
    shows.value = data.result.list;
  });
});
</script>
<style lang="less" scoped>
a,
div {
  color: #000;
}
.container {
  width: 80%;
  margin: 40px auto;
  & h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  & h3:first-child {
    margin: 0;
  }
}
// 图片内容
.content {
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin: 10px 0;
  border-bottom: 1px solid grey;
  &:last-child {
    border-bottom: none;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5%;
    margin-right: 20px;
  }
}
</style>
