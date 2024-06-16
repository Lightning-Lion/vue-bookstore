<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Container from './views/Container.vue'
import router from './router'
</script>

<template>
  <!-- <h1>书籍天堂</h1> -->
  <div class="bigContainer">
    <el-menu :default-active="0" router="true"
      class="el-menu-demo topPart navbar navbar-expand-lg navbar-light bg-light" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <div class="flex-grow" />
      <el-menu-item index="0" route="/">首页</el-menu-item>

      <el-menu-item index="1" route="/SearchPage">搜索</el-menu-item>
      <el-menu-item index="2" route="/BookDetail">书籍详情</el-menu-item>
      <el-menu-item index="3" route="/Cart">购物车</el-menu-item>
      <el-menu-item index="4" route="/OrderList">订单</el-menu-item>
      
    </el-menu>
    <router-view v-slot="{ Component }" class="bottomPart">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
body {
  padding: 0px;
  margin: 0px;
}

.bigContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topPart {
  width: 100%;
  height: 10%
}

.bottomPart {
  max-width: 1280px;
  height: 90%
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* .navbar {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
} */
.navbar {
  padding-left: 30px;
  padding-right: 30px;
}

.navbar a {
  color: #007bff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.navbar a:hover {
  color: #0056b3;
}

.navbar a.active {
  color: #0056b3;
}

/* 定义动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
