<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-header class="header">
        <img src="../assets/jiuxiaguangnian3.svg" style="width: 79px;">
        <span class="title">Liudy23 学习天地</span>
        <span class="name">{{ name }}</span>
      </el-header>

      <el-container>
        <el-aside class="aside" width="200px">

          <el-menu
              active-text-color="#ffd04b"
              background-color="#265864"
              class="el-menu-vertical-demo"
              default-active="/"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
              router
          >
            <el-menu-item index="/">
              <el-icon>
                <house></house>
              </el-icon>
              <span>首页</span>
            </el-menu-item>

            <el-sub-menu>
              <template #title>
                <el-icon>
                  <user/>
                </el-icon>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/user">用户列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon>
                  <icon-menu/>
                </el-icon>
                <span>我的应用</span>
              </template>
              <el-menu-item index="3-1">item one 3-1</el-menu-item>
              <el-menu-item index="3-2">item two 3-2</el-menu-item>
              <el-menu-item index="3-3">item three 3-3</el-menu-item>
              <el-sub-menu index="3-4">
                <template #title>item four 3-4</template>
                <el-menu-item index="3-4-1">item one 3-4-1</el-menu-item>
              </el-sub-menu>



            </el-sub-menu>

          </el-menu>

        </el-aside>

        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {House, Menu as IconMenu, User} from "@element-plus/icons-vue";

const name = "刘德意"
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>

.common-layout {
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #51a4fa;
}

.aside {
  /* 64px 是 header 的高度 */
  background-color: #265864;
}

.footer {
  height: 60px; /* 64px 是 header 的高度 */
  background-color: bisque;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-left: 10px;
  color: #02ff27;
}

.name {
  margin-left: auto;
}

</style>