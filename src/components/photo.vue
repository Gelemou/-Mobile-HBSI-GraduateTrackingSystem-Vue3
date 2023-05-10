<template>
  <div class="content">
    <div class="container">
      <div class="title">
        <h3>
          <p>Photos</p>
          历届毕业照
        </h3>
        <p><router-link to="memory" class="more">查看更多</router-link></p>
      </div>
      <!-- 滑动切换图片 -->
      <touchSlide @touch-slide="changePagenum">
        <div class="slider">
          <ul>
            <li v-for="photo in photos" :key="photo.classId">
              <img :src="get_img_url(photo.coverPicture)" alt="" />
            </li>
          </ul>
        </div>
      </touchSlide>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { get_img_url } from "../utils/urls";
import { getPhotoInfo } from "../utils/home";
import touchSlide from "./touchSlide.vue";

const photos = ref([]);

let data = "";
// 目前是第几张图片
let num = 5;

// 取数据
async function getPhotoInfoFun() {
  data = await getPhotoInfo({ pageNum: num, pageSize: 1 });
  photos.value = data.result.list;
}
function changePagenum(direction) {
  if (direction === "left") {
    num == data.result.page.total ? alert("已经是最后一张了") : num++,
      getPhotoInfoFun();
  } else if (direction === "right") {
    num === 1 ? alert("已经是第一张了") : num--, getPhotoInfoFun();
  }
}
onMounted(getPhotoInfoFun);
</script>

<style lang="less" scoped>
ul {
  padding: 0;
}
li {
  list-style: none;
}
p {
  padding: 0;
}
.content {
  color: #000;
  background-color: #f2f3f9;
}
.container {
  width: 80%;
  height: 400px;
  margin: 0 auto;
}
// 主标题
.title {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 900;
  & > p:last-child {
    font-size: 12px;
    color: #09437c;
    border-bottom: 2px solid #09437c;
    padding-bottom: 5px;
  }
}
// 更多
.more {
  color: #09437c;
}
// 滑动图片
.slider {
  width: 100%;
  height: 200px;

  ul {
    display: flex;
    overflow: hidden;
    justify-content: center;
  }
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    // transition: 0.5s ease;
  }
}
</style>
