<template>
  <div class="container">
    <h3>
      <router-link class="title" to="active">
        近期活动 Recent activities</router-link
      >
    </h3>
    <img src="../../images/11.png" alt="" />
    <p v-for="activity in activities" :key="activity.activityId">
      <router-link :to="`activityDetail/${activity.activityId}`">
        {{ activity.title }}
      </router-link>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getActivity } from "../utils/home";

const activities = ref([]);
let data = "";

async function getActivityFun() {
  data = await getActivity({ pageNum: 1, pageSize: 4 });
  activities.value = data.result.list;
}

onMounted(getActivityFun);
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
.title {
  color: #666;
}
a {
  color: #000;
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
