<template>

  <el-container style="width: 100%;height: 100%">

    <el-header style="padding: 0px"><Header active="2"></Header></el-header>

    <el-container style="width: 100%;height: 100%">

      <el-aside style="height:100%;"><Aside></Aside></el-aside>

      <el-container style="height:100%;width: 80%">
      <el-main style="height: 80%"><Main></Main></el-main>

      <el-footer style="padding: 0px"><Footer></Footer></el-footer>
      </el-container>
    </el-container>

  </el-container>

</template>

<script>
// @ is an alias to /src
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/views/Main";

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    Aside,
    Main,
  },
  data(){
    return{

    }
  },
  watch:{
    settingWidthAndHeight(){

    }
  }
}
</script>
