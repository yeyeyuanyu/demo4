<template>
  <el-aside style="height:100%;width: 210px">
    <el-menu style="height: 100%;width: 210px;"
             default-active="1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose">
      <el-menu-item index="1" @click="gotoVue('/user/message')">
        <i class="el-icon-setting"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="2" @click="gotoVue('/user/modify')">
        <i class="el-icon-document"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
      <el-menu-item index="3" @click="gotoVue('/user/setting')">
        <i class="el-icon-search"></i>
        <span slot="title">系统设置</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "2",
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