<template>
  <div>
    <el-date-picker
      v-model="selectedYear"
      type="year"
      :picker-options="pickerOption"
      placeholder="Pick a year"
      @change="dateChange()"
    />
    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      系部
    </el-button>
    <el-drawer v-model="drawer" title="" :with-header="false" size="200px">
      <ul class="depart">
        <li
          v-for="depart in departs"
          :key="depart.departmentId"
          @click="currentDepartmentId = depart.departmentId"
        >
          {{ depart.departmentName }}
        </li>
      </ul>
    </el-drawer>
  </div>
  <div class="images">
    <div class="images-content">
      <img src="/images/Snipaste_2022-12-20_20-52-43(4).png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMemory, getMemoryClass } from "../utils/home";

let selectedYear = new Date();
const drawer = ref();

const departs = ref([]);
let data = "";
let currentDepartmentId = ref();

function dateChange() {
  getMemoryFun();
}
// 根据年级获取系部
async function getMemoryFun() {
  let y = selectedYear.getFullYear();
  console.log(y);
  data = await getMemory({ pageNum: 1, pageSize: 4, year: y });
  departs.value = data.result.departmentList;
}

// 根据系部获取班级
async function getMemoryClassFun() {
  data = await getMemoryClass({ pageNum: 1, pageSize: 4, departmentId: 1 });
}
// function getMemoryFun() {
//   getMemory({ pageNum: 1, pageSize: 4, year: value3.value }).then((data) => {
//     departs.value = data.result.departmentList;
//   });
// }

onMounted(getMemoryFun, getMemoryClassFun);
</script>

<style lang="less" scoped>
div {
  color: #000;
}
ul {
  list-style: none;
}
.depart {
  padding-left: 20px;
  li {
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
  }
}
.images {
  width: 80%;
  margin: 20px auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
