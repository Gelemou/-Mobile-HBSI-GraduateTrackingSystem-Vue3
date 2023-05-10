<template>
  <div class="title">
    <ul>
      <li><slot></slot></li>
      <li v-if="hasMore">
        <router-link :to="moreUrl">{{ moreText }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    hasMore: {
      type: Boolean,
      default: true,
    },
    moreText: {
      type: String,
      default: "更多",
    },
    moreUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  components: { RouterLink },
};
</script>
<style lang="less" scoped>
ul,
li {
  list-style: none;
}
.title {
  height: 33px;
  border-left: 4px solid rgb(13, 67, 127);
  color: rgb(13, 67, 127);
  text-indent: 1rem;
  font-size: 24px;
  font-weight: bold;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: rgb(13, 67, 127);
      font-size: 1rem;
    }
  }
}
</style>
