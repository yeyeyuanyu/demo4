<template>
  <el-header style="padding: 0px">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item style="width: 210px" index="1">images</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1"><a v-on:click="changBackground(0)" href="#">至尊黑</a></el-menu-item>
        <el-menu-item index="2-2"><a v-on:click="changBackground(1)" href="#">海洋蓝</a></el-menu-item>
        <el-menu-item index="2-3"><a v-on:click="changBackground(2)" href="#">小清新</a></el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Header",
  methods: {
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