<template>
  <div>
    <div class="images">
      <div class="images-content" v-for="item in items" :key="item.graduateId">
        <img :src="get_img_url(item.image1)" alt="" />
        <span>{{ item.post }}--{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getFriends } from "../utils/home";
import { get_img_url } from "../utils/urls";

let data = "";
const items = ref([]);

onMounted(async () => {
  data = await getFriends({ pageNum: 1, pageSize: 8 });
  items.value = data.result.list;
});
onMounted(() => {});
</script>

<style lang="less" scoped>
div {
  color: #000;
}
.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}
.images-content {
  width: 170px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin-bottom: 10px;
}
</style>
