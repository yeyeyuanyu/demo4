<template>
  <el-header style="padding: 0px">
    <el-menu default-active="2" class="el-menu-demo" mode="horizontal">
      <el-menu-item style="width: 210px" index="1" disabled @click="gotoVue('/home')">images</el-menu-item>
      <el-menu-item index="2" @click="gotoVue('/home')">学习主页</el-menu-item>
      <el-menu-item index="3" @click="gotoVue('/user')">个人中心</el-menu-item>

      <el-dropdown style="float: right;line-height: 60px;margin-left: 20px">
      <span class="el-dropdown-link">
        主题色<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-on:click="changBackground(0)">至尊黑</el-dropdown-item>
          <el-dropdown-item v-on:click="changBackground(1)">海洋蓝</el-dropdown-item>
          <el-dropdown-item v-on:click="changBackground(2)">小清新</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown style="float: right;margin-left: 20px">
      <span class="el-dropdown-link">
         <div v-show="!img" style="display: inline-block;line-height: 60px;">
           夜夜<i class="el-icon-arrow-down el-icon--right"></i>
         </div>
        <div v-show="img" style="display: inline-block;">
          <el-avatar style="width: 50px;height: 50px;margin-top: 4px;" :src="img"></el-avatar>
        </div>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人主页</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


    </el-menu>
  </el-header>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Header",
  data(){
    return{
      img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    }
  },
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