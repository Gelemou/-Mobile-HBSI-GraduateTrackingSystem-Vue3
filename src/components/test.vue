<template>
  <div id="touchBox"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";

let a = ref();
onMounted(() => {
  // 当手指接触屏幕
  // a = document.getElementById("checkBox");
  // a.addEventListener(
  //   "touchstart",
  //   function (e) {
  //     state.startX = `${e.touches[0].pageX}`;
  //     state.startY = `${e.touches[0].pageY}`;
  //     console.log("111", state.startX, state.startY);
  //     e.stopPropagation();
  //   },
  //   false
  // );
});
</script>
<style lang="less" scoped></style>
