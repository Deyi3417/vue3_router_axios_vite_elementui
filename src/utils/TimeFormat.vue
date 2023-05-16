<template>
  are you ok<br>
  <span>{{formatDate(new Date,'YYYY-MM-DD HH:mm:ss')}}</span>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

interface Props {
  date: string | number | Date
  format: string
}

const formatDate = (date: Props['date'], format: Props['format']) => {
  // 时间格式化代码
  console.log("执行格式化时间了吗")
  return dayjs(date).format(format)
}



</script>

<style scoped>

</style>