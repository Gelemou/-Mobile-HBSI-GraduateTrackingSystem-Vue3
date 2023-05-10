<template>
  <div class="images">
    <img
      v-for="item in items"
      :key="item.activityId"
      :src="get_img_url(item.coverPicture)"
      alt=""
    />
  </div>
</template>
<script setup>
import { get_img_url } from "../utils/urls";
import { getActivitiesGlimpse } from "../utils/home";
import { ref, onMounted } from "vue";

const items = ref([]);
let data = "";
onMounted(async () => {
  data = await getActivitiesGlimpse({ pageNum: 1, pageSize: 8 });
  items.value = data.result.list;
});
</script>
<style lang="less" scoped>
.images {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  img {
    width: 140px;
    height: 100px;
    margin: 10px 5px;
    object-fit: cover;
  }
}
</style>
