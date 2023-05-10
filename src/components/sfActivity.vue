<template>
  <div class="container">
    <router-link to="active">
      <p>Activity</p>
      <h3>校友活动</h3>
    </router-link>
    <touchSlide>
      <div class="slider">
        <ul>
          <li v-for="item in items" :key="item.activityId">
            <img :src="get_img_url(item.coverPicture)" alt="" />
          </li>
        </ul>
      </div>
    </touchSlide>
  </div>
</template>
<script setup>
import touchSlide from "./touchSlide.vue";
import { ref, onMounted } from "vue";
import { getActivitiesGlimpse } from "../utils/home";
import { get_img_url } from "../utils/urls";

const items = ref([]);

onMounted(() => {
  getActivitiesGlimpse({ pageNum: 1, pageSize: 4 }).then((data) => {
    items.value = data.result.list;
  });
});

// function slide(direction) {
//   if (direction === "left" || direction === "right") {
//     console.log(direction);
//   }
// }
</script>
<style lang="less" scoped>
a {
  color: #000;
}
ul {
  list-style: none;
  padding: 0;
}
.container {
  width: 80%;
  margin: 0 auto;
  color: #000;
  font-size: 24px;
}
.slider {
  width: 100%;
  height: 200px;
  ul {
    display: flex;
    overflow-x: scroll;
  }
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
}
</style>
