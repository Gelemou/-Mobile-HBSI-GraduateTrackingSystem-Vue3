<template>
  <div>
    <div class="top">
      <a href="">校友登录</a>| <a href="">教职工登录</a>|
      <a href="http://www.hbsi.edu.cn">学校官网</a>
    </div>
    <div class="top topContainer">
      <a href=""><img src="/images/河北软件职业技术学院.png" alt="" /></a>
      <!-- 下拉列表 -->
      <el-dropdown
        trigger="click"
        class="arrow"
        :hide-on-click="true"
        @command="closeDrop()"
        ref="dropdown1"
      >
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right" size="large"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="dropdown">
            <el-dropdown-item class="dropdown-item"
              ><router-link to="/">首页</router-link></el-dropdown-item
            >
            <el-dropdown-item divided
              ><router-link to="/show">校友风采</router-link></el-dropdown-item
            >
            <el-dropdown-item divided
              ><router-link to="/memory"
                >班级记忆</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item divided
              ><router-link to="/active"
                >校友活动</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item divided
              ><router-link to="/more">走进校园</router-link></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { ref } from "vue";

const dropdown1 = ref();

function closeDrop() {
  handleClose();
}
</script>
<style lang="less" scoped>
* {
  list-style: none;
}
body,
ul {
  margin: 0;
  padding: 0;
}
div {
  display: block;
}
a {
  text-decoration: none;
  color: aliceblue;
}
.test {
  position: -webkit-sticky;
  overflow: visible;
}
.top {
  height: 40px;
  background: #1a5ba1;
  color: aliceblue;
  text-align: right;
  position: relative;
  a:hover {
    color: #709bff;
  }
  li:hover {
    border-bottom: 3px solid #fff;
  }
}
.top > a {
  margin: 0 20px;
  font-size: 1rem;
  line-height: 40px;
}
.topContainer {
  position: sticky;
  top: 20px;
  height: 80px;
  background: #09437c;
  display: flex;
  align-items: center;
  /* logo */
  @media (min-width: 1024px) {
    img {
      width: 376px;
      margin: 15px 0;
    }
  }
  ul {
    display: flex;
    margin: 0;
    line-height: 100px;
  }
  a {
    margin: 0 20px;
  }
}
.dropdown {
  a {
    color: black;
  }
  .dropdown-item {
    border-bottom: 1px solid black;
  }
  .el-dropdown-menu__item {
    justify-content: space-around;
  }
}
@media (max-width: 392px) {
  .topContainer img {
    width: 260px;
    margin: 10px 20px 0 0;
  }
}
</style>
