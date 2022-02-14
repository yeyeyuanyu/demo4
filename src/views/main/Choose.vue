<template>
  <div style="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div><h5><span>图书</span></h5></div>
        <div>
          <i class="el-icon-notebook-2"></i>
        </div>
      </div>
      <transition name="el-zoom-in-center">
        <div class="transition-box">
          <div class="wordContent">
            <div>
              <div><router-link to="BookWords">[形]相等的;同等的</router-link></div>
            </div>
            <el-divider class="min-divider"></el-divider>
            <div>
              <div ><router-link to="BookWords">[形]相等的;同等的</router-link></div>
            </div>
            <el-divider class="min-divider"></el-divider>
            <div>
              <div ><router-link to="BookWords">[形]相等的;同等的[动]等于;比得上[名]同等的人;相等物</router-link></div>
            </div>
          </div>
        </div>
      </transition>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Choose",
}
</script>

<style scoped>
.min-divider {
  margin: 10px 0;
}
.wordContent {
  margin: auto 15%;
  font-size: 13px;
  text-align: left;
  height: 100%;
  min-height: 400px;
}
.button_space {
  margin: auto 15%;
}
.button_space button {
  margin-top: 20px;
  width: 20%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 70%;
  margin: auto;
}
</style>