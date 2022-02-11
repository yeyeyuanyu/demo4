<template>
  <el-header style="padding: 0px">
    <el-menu default-active="2" class="el-menu-demo" mode="horizontal">
      <el-menu-item style="width: 210px" index="1" disabled @click="gotoVue('/home')">images</el-menu-item>
      <el-menu-item index="2" @click="gotoVue('/home')">学习主页</el-menu-item>
      <el-menu-item index="3" @click="gotoVue('/home/user')">个人中心</el-menu-item>
      <el-menu-item index="4">
        <router-link>系统设置</router-link>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">主题色</template>
        <el-menu-item index="5-1"><a v-on:click="changBackground(0)">至尊黑</a></el-menu-item>
        <el-menu-item index="5-2"><a v-on:click="changBackground(1)">海洋蓝</a></el-menu-item>
        <el-menu-item index="5-3"><a v-on:click="changBackground(2)">小清新</a></el-menu-item>
      </el-submenu>


    </el-menu>
  </el-header>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Header",
  methods: {
    gotoVue:function (vue){
      this.$router.push({ path: vue });
    },
    changBackground: function (val) {
      console.log(val);
      switch (val) {
        case 0:
          $("body").css("background-color", this.$store.state.background);
          break;
        case 1:
          $("body").css("background-color", "beige");
          break;
        default:
          $("body").css("background-color", "#ffDfff");
      }
    }
  }
}
</script>

<style scoped>
</style>