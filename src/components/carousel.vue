<template>
  <div class="block text-center">
    <el-carousel trigger="click" height="150px" class="carousel">
      <el-carousel-item v-for="slider in sliders" :key="slider.wxSwiperId">
        <img :src="get_img_url(slider.swiperUrl)" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getSliderPics } from "../utils/home";
import { get_img_url } from "../utils/urls";

const sliders = ref([]);

function getSliderPicsFun() {
  getSliderPics({ pageNum: 1, pageSize: 3 }).then((data) => {
    sliders.value = data.result.list;
  });
}
function slide(direction) {
  if (direction == "left" || direction == "right") {
    console.log(direction);
  }
}
onMounted(getSliderPicsFun);
</script>

<style lang="less" scoped>
.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
