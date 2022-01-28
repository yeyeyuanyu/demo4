<template>
  <el-aside style="height:100%;width: 210px">
      <el-menu style="height: 100%;width: 210px;"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <router-link to="/home/review">
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">
            复习<el-badge :value="12" class="item"></el-badge>
            </span>
          </el-menu-item>
        </router-link>

        <router-link to="/home/choose">
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">选词</span>
        </el-menu-item>
        </router-link>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>统计</span>
          </template>
          <el-menu-item index="3-1">遗忘曲线</el-menu-item>
          <el-menu-item index="3-2">学习情况</el-menu-item>
        </el-submenu>
      </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  methods: {
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