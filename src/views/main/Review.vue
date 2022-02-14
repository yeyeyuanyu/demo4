<template>
  <div style="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div><h5><span>equal[ikwel]</span></h5></div>
        <div>
          <i class="el-icon-microphone"></i>
        </div>
      </div>
      <div style="position: relative;width: 100%">
        <div class="wordContent" @click="hide()">
          <div>
            <div >[形]相等的;同等的</div>
            <div >[动]等于;比得上</div>
            <div >[名]同等的人;相等物</div>
          </div>
          <el-divider style="margin: 15px 0;"></el-divider>
          <div>
            <div>列句</div>
            <div>Nobody can equal him in intelligence</div>
            <div>Nobody can equal him in intelligence</div>
            <div>Nobody can equal him in intelligence</div>
            <div>Nobody can equal him in intelligence</div>
            <div>Nobody can equal him in intelligence</div>
            <div>Nobody can equal him in intelligence</div>
          </div>
          <el-divider style="margin: 15px 0;"></el-divider>
          <div>
            <div>助记</div>
            <div>Nobody can equal him in intelligence</div>
            <div>Nobody can equal him in intelligence</div>
          </div>
        </div>

        <div class="cover wordContent"  @click="hide()">
          <div>Nobody can equal him in intelligence</div>
        </div>
      </div>
      <div class="button_space">
        <el-button type="primary" style="float: left">认识</el-button>
        <el-button type="primary">模糊</el-button>
        <el-button type="primary" style="float: right">忘记</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Review",
  data(){
    return{
      show: true
    }
  },
  methods: {
    hide(){
      this.show = !this.show;
    },
    nextWord(){
      console.log("pre");
    },
    preWord(){
      console.log("next");
    }
  }
}
</script>

<style scoped>
.wordContent {
  margin: auto 15%;
  font-size: 13px;
  text-align: left;
  height: 500px;
}
.cover {
  position: absolute;
  top: 0;
  margin: auto 15%;
  text-align: center;
  width: 70%;
  background-color: #bfbfbf;
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