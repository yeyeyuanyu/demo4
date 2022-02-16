<template>
  <div style="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>
          <el-avatar style="width: 100px;height: 100px;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div><h5>夜夜</h5></div>
      </div>
      <div style="position: relative;width: 100%">
        <div class="wordContent">
          <div style="margin-bottom: 20px;height: 100px;" >
            <div class="button_space" style="padding: 10px">
              <div style="display: inline-block;width: 33.3%;text-align: center;">
                14<br/>连续签到
              </div>
              <div style="display: inline-block;width: 33.3%;text-align: center">
                154<br/>累计签到
              </div>
              <div style="display: inline-block;width: 33.3%;text-align: center">
                40<br/>最大连续
              </div>
            </div>
            <div class="button_space" style="padding: 10px">
              <div style="display: inline-block;width: 33.3%;text-align: center;">
                20<br/>今日复习
              </div>
              <div style="display: inline-block;width: 33.3%;text-align: center">
                15<br/>今日学习
              </div>
              <div style="display: inline-block;width: 33.3%;text-align: center">
                400<br/>累计学习
              </div>
            </div>
          </div>
          <div><span class="message">用户名</span>：夜夜</div>
          <div><span class="message">密码</span>：**********</div>
          <div><span class="message">邮箱</span>：878928552@qq.com</div>
          <div><span class="message">手机号</span>：19802842122</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
/*import $ from "jquery"*/
// eslint-disable-next-line no-unused-vars
import axios from "@/plugins/axios";

export default {
  name: "Message",
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
.message{
  display: inline-block;
  width: 60px;
  height: 30px;
}
.box-card {
  width: 70%;
  margin: auto;
}
</style>