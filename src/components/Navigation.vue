<template>
  <div class="layout">
    <el-header class="header">
      <img src="../assets/jiuxiaguangnian3.svg" style="width: 79px;">
      <span class="title">Liudy23 学习天地</span>
      <span class="name">{{ name }}</span>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <!--  router="true" 表示开启路由模式 根据index进行跳转 -->
        <el-menu
            active-text-color="#ffd04b"
            background-color="#265864"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            router="true"
        >
          <el-menu-item index="/">
            <el-icon>
              <house/>
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <icon-menu/>
              </el-icon>
              <span>我的应用</span>
            </template>
            <el-menu-item index="2-1">item one 2-1</el-menu-item>
            <el-menu-item index="2-2">item two 2-2</el-menu-item>
            <el-menu-item index="2-3">item three 2-3</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four 2-4</template>
              <el-menu-item index="2-4-1">item one 2-4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <setting/>
              </el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item index="3-1">item one 3-1</el-menu-item>
            <el-menu-item index="3-2">item two 3-2</el-menu-item>
            <el-menu-item index="3-3">item three 3-3</el-menu-item>
            <el-sub-menu index="3-4">
              <template #title>item four 3-4</template>
              <el-menu-item index="3-4-1">item one 3-4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <user/>
              </el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user">用户列表</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, House, User,
} from '@element-plus/icons-vue'

const name = 'Navigation'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #409eff;
  color: #fff;
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

.aside {
  width: 200px;
  background-color: #f0f0f0;
}

.menu {
  height: 100%;
}
</style>
