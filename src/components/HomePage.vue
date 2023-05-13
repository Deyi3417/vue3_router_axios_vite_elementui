<template>
这是我的首页页面
  <TimeFormat></TimeFormat><br>
  时间：{{formattedDate}}<br>
  时间1：{{formattedDate_1}}<br>
  时间2：{{formattedDate_2}}<br>
  时间3：{{formattedDate_3}}
</template>

<script setup lang="ts">
import TimeFormat from "../util/TimeFormat.vue";
import {formatDate, formatDate_1, formatDate_2, formatDate_3} from "@/util/TimeUtils";
const currentDate = new Date()
const formattedDate = formatDate(currentDate, 'YYYY-MM-DD HH:mm:ss');
const formattedDate_1 = formatDate_1(new Date());
const formattedDate_2 = formatDate_2(new Date());
const formattedDate_3 = formatDate_3(new Date());
</script>
<style scoped>

</style>