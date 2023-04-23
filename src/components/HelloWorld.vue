<template>
  <el-row class="mb-4">
    <el-button color="pink">Default</el-button>
    <el-button type="primary" color="red">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
<br>
  <div class="flex">
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
    <el-button type="primary" :icon="Search">Search</el-button>
    <el-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
  </div>
  <br>
  <table>
    <thead>
    <tr>
      <th class="green-bg">序号</th>
      <th class="green-bg">姓名</th>
      <th class="green-bg">性别</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="i in 6" :key="i">
      <td class="center-text" style="height: 2rem; width: 8rem">{{ i }}</td>
      <td class="center-text" style="height: 2rem; width: 8rem">{{ i * 2 }}</td>
      <td class="center-text" style="height: 2rem; width: 8rem">{{ i * 3 }}</td>
    </tr>
    </tbody>
  </table>


</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,Share, Upload
} from '@element-plus/icons-vue'
const count = ref(0)
</script>


<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid black;
  padding: 8px;
}

.center-text {
  text-align: center;
}

.green-bg {
  background-color: green;
  color: white;
}
</style>
