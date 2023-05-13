<template>
  <span style="font-size: 20px">用户列表:</span>
  <div>
    <el-table :data="users" empty-text border style="width: 100%" :header-cell-style="headerCellStyle"
    :cell-style="cellStyle">
      <el-table-column prop="id" label="ID" width="80" ></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="userStatus" label="状态"></el-table-column>
      <el-table-column prop="profile" label="简介"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import {users} from '../models/User'
// 重写方法改变属性
const headerCellStyle = {
  backgroundColor: '#f8bbbb',
  textAlign: 'center'
};

const cellStyle = {
  textAlign: 'center',
};

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