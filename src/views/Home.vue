<template>

  <el-container style="width: 100%;height: 100%">

    <el-header style="padding: 0px"><Header></Header></el-header>

    <el-container style="">

      <el-aside style="height:100%;width: 210px"><Aside></Aside></el-aside>

      <el-main style="height: 100%"><Main></Main></el-main>

    </el-container>

    <el-footer style="padding: 0px"><Footer></Footer></el-footer>

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
    Main
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
