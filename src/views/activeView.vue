<template>
  <div class="activityContent">
    <div class="bar">
      <!-- 当状态为被选中时,启用组件 -->
      <span
        @click="currentTabComponent = an"
        :class="{ active: currentTabComponent == an }"
        >活动通知</span
      >
      <span
        @click="currentTabComponent = ag"
        :class="{ active: currentTabComponent == ag }"
        >活动掠影</span
      >
    </div>
    <div class="content">
      <!-- <keep-alive></keep-alive> -->
      <!-- component可以动态渲染组件 根据绑定的is值决定哪个组件被渲染 -->
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script setup>
import activityNotices from "@/components/activityNotices.vue";
import activityGlimplse from "@/components/activityGlimplse.vue";
import { ref } from "vue";
const an = ref(activityNotices);
const ag = ref(activityGlimplse);
let currentTabComponent = ref(activityNotices);
</script>

<style lang="less" scoped>
div {
  color: #000;
}
.bodyDiv {
  background-color: rgb(243, 243, 243);
}
.activityContent {
  width: 80%;
  margin: 20px auto;
  .bar {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    span {
      width: 200px;
      padding: 0 0 10px 10px;
      padding-bottom: 10px;
      color: rgba(0, 0, 0, 0.4);
      font-size: 20px;
      font-weight: 900;
      border-bottom: 8px solid rgba(3, 62, 131, 0.4);
      cursor: pointer;
      &:first-child {
        margin-right: 100px;
      }
      // 选中后改变样式
      &.active {
        color: #000;
        border-bottom: 8px solid rgba(3, 62, 131);
      }
    }
  }
}
</style>
