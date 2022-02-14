<template>
  <div style="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div><h5><span v-text="this.word.name">equal[ikwel]</span></h5></div>
        <div>
          <i class="el-icon-microphone"></i>
        </div>
      </div>
      <div style="position: relative;width: 100%">
        <div class="wordContent" @click="hide()">
          <div v-if="this.word!=null">
          <div>
            <div v-for="(value) in this.word.shiyi" :key="value" v-text="value"></div>
          </div>
          <el-divider class="min-divider"></el-divider>
          <div>
            <div>列句</div>
            <div v-for="(value) in this.word.liji" :key="value" v-text="value"></div>
          </div>
          <el-divider class="min-divider"></el-divider>
          <div>
            <div>助记</div>
            <div v-for="(value) in this.word.zhuji" :key="value" v-text="value"></div>
          </div>
          </div>
        </div>
        <transition name="el-fade-in">
          <div v-show="show" id="cover" class="cover wordContent"  @click="hide()">
            <div>点击显示释义</div>
          </div>
        </transition>

      </div>
      <div class="button_space">
        <el-button type="primary" style="float: left" @click="nextWord(-1)">忘记</el-button>
        <el-button type="primary" @click="nextWord(0)">模糊</el-button>
        <el-button type="primary" style="float: right" @click="nextWord(1)">认识</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
/*import $ from "jquery"*/
// eslint-disable-next-line no-unused-vars
import axios from "@/plugins/axios";

export default {
  name: "Review",
  data(){
    return{
      show: true,
      memory: 0,
      word: {
        name: "test[tss]",
        shiyi: ["[形]相等的;同等的","[da]dsaf"],
        liji: ["Nobody can equal him in intelligence","dsafjhkhdjkashkjhdkjgahjkdhg"],
        zhuji: ["jkalsgkjhlakhgjklfadlkhjlkdf","afdagadfdaf"]
      }
    }
  },
  methods: {
    hide(){
      this.show = false;
    },
    nextWord(value){
      this.memory = value;
      const that = this;
      that.show = true;
      setTimeout(() => {
        that.word = {
          name: Math.ceil(Math.random()*10000),
          shiyi: ["[形]相等的;同等的","[da]dsaf"+Math.ceil(Math.random()*10000)],
          liji: ["Nobody can equal him in intelligence","dsafjhkhdjkashkjhdkjgahjkdhg"],
          zhuji: ["jkalsgkjhlakhgjklfadlkhjlkdf","afdagadfdaf"]
        };
      }, 0.3 * 1000);

      /*axios.post("/billboard/test",this.memory)
          .then(function(res) {
            const rs = res.data;
            that.word = rs.data;
            setTimeout(() => {
              that.$router.push({ path: "/home" });
            }, 0.1 * 1000);
          })
          .catch(function(err) {
            console.log(err);
          });*/
    },
    preWord(){
      console.log("next");
    }
  }
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
.cover {
  position: absolute;
  top: 0;
  margin: auto 15%;
  text-align: center;
  width: 70%;
  background-color: #bfbfbf;
}
.cover div{
  margin-top: 180px;
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