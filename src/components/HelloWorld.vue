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


  <h2>liudy23 is so handsome</h2>
  <h1>我的第一个页面</h1>
  <p>我的第一个段落。</p>
  <p id="demo">我的第一个段落</p>
  3.14

  1001

  123e5

  "John Doe"

  'John Doe'<br>

  定义一个数组： [40, 100, 1, 5, 25, 10]<br>
  定义一个对象： {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}



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

  <html>

  </html>


</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  Delete,
  Edit,
  Search,
  Share, Upload
} from '@element-plus/icons-vue'
const count = ref(0)
let date = new Date();
console.log(date.toLocaleDateString())
const dateString = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0') + ' ' + date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0');
console.log(dateString)
var x, length
console.log(typeof "John"  )
console.log("-------------------------")


x = 5

length = 6
console.log("x:%d--y:%s",x,length)

var size = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
console.log("number:",size)
console.log("number:",points)
console.log("String:",lastName)
console.log("Array:",cars)
console.log("Object:",person)
//let 声明的变量只在 let 命令所在的代码块内有效。
// const 声明一个只读的常量，一旦声明，常量的值就不能改变。
let array = new Array();
array[0] = "liudy23";
array[1] = "and";
array[2] = "suyao";
console.log(array)
console.log(typeof array  )

const car = {name: "Fiat", model: 500, color: "white"};
console.log(car)
console.log(typeof car)
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
