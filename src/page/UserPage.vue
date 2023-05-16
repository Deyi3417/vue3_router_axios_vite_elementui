<template>
  <span style="font-size: 20px">用户列表:</span>
  <div>
    <el-table :data="users" empty-text border style="width: 100%" :header-cell-style="headerCellStyle"
              :cell-style="cellStyle">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="userStatus" label="状态"></el-table-column>
      <el-table-column prop="profile" label="简介"></el-table-column>
      <el-table-column prop="createTimeStr" label="创建时间"></el-table-column>
      <el-table-column label="头像">
        <!--  使用插槽显示头像  -->
        <template v-slot="{ row }">
          <el-image :src="row.avatarUrl" style="width: 50px; height: 50px; border-radius: 50%" fit="cover"></el-image>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import {users} from '../models/User'
import {formatDate_1, formatDate_2} from "@/util/TimeUtils";
// users.map(e => {
//   e.testTime = formatDate_1(e.createTime)
// })
users.forEach(e => {
  e.createTimeStr = formatDate_2(e.createTime)
})
// 重写方法改变属性
const headerCellStyle = {
  backgroundColor: '#f8bbbb',
  textAlign: 'center'
};

const cellStyle = {
  textAlign: 'center',
};
const currentDate = new Date();
console.log(currentDate.toDateString()); // 输出日期字符串
console.log(currentDate.toTimeString()); // 输出时间字符串
console.log(currentDate.toLocaleDateString()); // 输出本地化日期字符串
console.log(currentDate.toLocaleTimeString()); // 输出本地化时间字符串
console.log(currentDate.toISOString()); // 输出符合ISO标准的日期字符串
console.log(currentDate.toUTCString()); // 输出符合UTC标准的日期字符串
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