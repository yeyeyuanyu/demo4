<template>

  <el-container style="width: 100%;height: 100%">

    <el-header style="padding: 0px"><Header></Header></el-header>

    <el-container style="width: 100%;height: 100%">

      <el-aside style="height:100%;width: 20%"><Aside2></Aside2></el-aside>

      <el-container style="height:100%;width: 80%">
        <el-main style="height: 80%"><router-view></router-view></el-main>

        <el-footer style="padding: 0px"><Footer></Footer></el-footer>
      </el-container>
    </el-container>

  </el-container>

</template>

<script>
// @ is an alias to /src
import Aside2 from "../components/Aside2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Home2',
  components: {
    Footer,
    Header,
    Aside2,
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
