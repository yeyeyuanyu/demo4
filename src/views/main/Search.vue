<template>
  <div style="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div style="width: 70%;margin:10px auto;">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 110px">
              <el-option label="模糊查询" value="1"></el-option>
              <el-option label="英文" value="2"></el-option>
              <el-option label="中文" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
      </div>
      <div slot="header" class="clearfix">
        <div><h5><span>{{wordMsg.name}}</span></h5></div>
        <div>
          <i class="el-icon-microphone"></i>
        </div>
      </div>
      <transition name="el-zoom-in-center">
        <div class="transition-box">
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
        </div>
      </transition>
    </el-card>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  name: "Search",
  data() {
    return{
      wordMsg:{
        name: "plugins",
      },
      select: "模糊查询",
      input:""
    }
  },
  methods: {
    search(){
      const that = this;
      axios.post("/search",this.data)
          .then(function(res) {
            const rs = res.data;
            console.log(rs.data);
            that.wordMsg = rs.data;
          })
          .catch(function(err) {
            console.log(err);
          });
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