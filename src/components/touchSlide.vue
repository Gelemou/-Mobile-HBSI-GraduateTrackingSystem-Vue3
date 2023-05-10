<template>
  <div class="touch-slide">
    <slot></slot>
  </div>
</template>
<script setup>
import { onMounted, defineEmits } from "vue";
let box = null;
let startTime = ""; // 触摸开始时间
let startDistanceX = ""; // 触摸开始X轴位置
let startDistanceY = ""; // 触摸开始Y轴位置

let endTime = ""; // 触摸结束位置
let endDistanceX = ""; // 触摸结束X轴位置
let endDistanceY = ""; // 触摸结束Y轴位置

let moveTime = ""; // 触摸时间
let moveDistanceX = ""; // 触摸移动X轴距离
let moveDistanceY = ""; // 触摸移动Y轴距离

const emit = defineEmits(["touchSlide"]);

onMounted(() => {
  let box = document.querySelector(".touch-slide");

  box.addEventListener("touchstart", (e) => {
    startTime = new Date().getTime();
    startDistanceX = e.touches[0].screenX;
    startDistanceY = e.touches[0].screenY;
  });
  box.addEventListener("touchend", (e) => {
    endTime = new Date().getTime();
    endDistanceX = e.changedTouches[0].screenX;
    endDistanceY = e.changedTouches[0].screenY;
    moveTime = endTime - startTime;
    moveDistanceX = startDistanceX - endDistanceX;
    moveDistanceY = startDistanceY - endDistanceY;
    // 判断滑动距离是否超过40且时间小于500ms
    if (
      (Math.abs(moveDistanceX) > 10 || Math.abs(moveDistanceY) > 10) &&
      moveTime < 500
    ) {
      // 当X轴移动的距离大于Y轴移动的距离
      if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
        if (moveDistanceX > 0) emit("touchSlide", "left");
        else emit("touchSlide", "right");
      } else {
        if (moveDistanceY > 0) emit("touchSlide", "up");
        else emit("touchSlide", "down");
      }
    }
  });
});
</script>
<style lang="less" scoped></style>
