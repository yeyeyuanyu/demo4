<template>
  <el-aside style="height:100%;width: 210px">
      <el-menu style="height: 100%;width: 210px;"
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <el-menu-item index="1" @click="gotoVue('/home/review')">
          <i class="el-icon-setting"></i>
          <span slot="title">复习<el-badge :value="12" class="item"></el-badge></span>
        </el-menu-item>
        <el-menu-item index="2" @click="gotoVue('/home/choose')">
          <i class="el-icon-document"></i>
          <span slot="title">选词</span>
        </el-menu-item>
        <el-menu-item index="3" @click="gotoVue('/home/search')">
          <i class="el-icon-search"></i>
          <span slot="title">搜索</span>
        </el-menu-item>
        <el-submenu index="4" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>统计</span>
          </template>
          <el-menu-item index="4-1" @click="gotoVue('/home/forgetcurve')">遗忘曲线</el-menu-item>
          <el-menu-item index="4-2" @click="gotoVue('/home/learningsituation')">学习情况</el-menu-item>
        </el-submenu>
      </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  methods: {
    gotoVue:function (vue){
      this.$router.push({ path: vue });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>