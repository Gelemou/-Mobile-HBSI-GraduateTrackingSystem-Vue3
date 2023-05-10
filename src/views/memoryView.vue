<template>
  <div>
    <el-date-picker
      v-model="selectedYear"
      type="year"
      :picker-options="pickerOption"
      placeholder="Pick a year"
      @change="getMemoryFun"
    />
    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      系部
    </el-button>
    <el-drawer
      v-model="drawer"
      title=""
      :with-header="false"
      size="200px"
      :show-close="true"
    >
      <ul class="depart">
        <li
          v-for="depart in departs"
          :key="depart.departmentId"
          @click="
            currentDepartmentId = depart.departmentId;
            getMemoryClassFun();
          "
        >
          {{ depart.departmentName }}
        </li>
      </ul>
    </el-drawer>
  </div>
  <!-- 内容部分 -->
  <div class="item">
    <div
      class="item-content"
      v-for="classItem in classes"
      :key="classItem.classId"
    >
      <img :src="get_img_url(classItem.coverPicture)" alt="" />
      <span>{{ classItem.className }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMemory, getMemoryClass } from "../utils/home";
import { get_img_url } from "../utils/urls";

let selectedYear = ref(new Date());
const drawer = ref();

const departs = ref([]);
const depart = ref("");
const classes = ref([]);
let data = "";
let currentDepartmentId = ref(1);

// 根据年级获取系部
async function getMemoryFun() {
  let y = selectedYear.value.getFullYear();
  data = await getMemory({ year: y });
  departs.value = data.result.departmentList;
  currentDepartmentId.value = departs.value[0].departmentId;
  depart.value = departs.value[0].departmentName;
  getMemoryClassFun();
}

// 根据系部获取班级
async function getMemoryClassFun() {
  data = await getMemoryClass({
    pageNum: 1,
    pageSize: 6,
    departmentId: currentDepartmentId.value,
  });
  classes.value = data.result.list;
}
// function getMemoryFun() {
//   getMemory({ pageNum: 1, pageSize: 4, year: value3.value }).then((data) => {
//     departs.value = data.result.departmentList;
//   });
// }

onMounted(getMemoryFun);
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
.item {
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  // 从起点处开始放置盒子
  align-content: flex-start;
  // 设置换行
  flex-flow: row wrap;
  img {
    width: 100%;
    height: 90px;
    object-fit: cover;
  }
}
.item-content {
  // 设置每个盒子占的宽度   flex-basis盒子占据主轴的空间
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  border: 2px solid #f4f4f4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 20px;
  span {
    text-align: center;
  }
}
</style>
