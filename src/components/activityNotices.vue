<template>
  <div
    class="container"
    v-for="activity in activities"
    :key="activity.activityId"
  >
    <router-link class="content" :to="`activityDetail/${activity.activityId}`">
      <img :src="activity" alt="" />
      <span>{{ activity.title }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getActivity } from "../utils/home";

const activities = ref([]);

onMounted(() => {
  getActivity({ pageNum: 1, pageSize: 4 }).then((data) => {
    activities.value = data.result.list;
  });
});
</script>
<style lang="less" scoped>
a {
  color: #000;
}
.container {
  border-bottom: 1px solid grey;
  &:last-child {
    border-bottom: none;
  }
}
.content {
  display: flex;
  align-items: center;
  margin: 10px 0;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5%;
    margin-right: 20px;
  }
  span {
    width: 180px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
  }
}
</style>
