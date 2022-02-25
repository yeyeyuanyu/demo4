<template>
  <div style="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div><h5>系统设置</h5></div>
      </div>
      <div style="position: relative;width: 100%">
        <div class="wordContent">
          <el-descriptions class="margin-top" column="1" size="medium" border>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                每日学习量
              </template>
              <el-input @change="changeSetting" style="width: 150px" v-model="form.count"></el-input>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                每日提醒复习时间
              </template>
              <el-col style="width: 150px">
                <el-time-picker value-format="HH:mm" format="HH:mm"
                    @change="changeSetting" placeholder="选择时间" v-model="form.time" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                发音次数
              </template>
              <el-select @change="changeSetting" v-model="form.voice" style="width: 150px">
                <el-option label="一次" value="1"></el-option>
                <el-option label="二次" value="2"></el-option>
                <el-option label="三次" value="3"></el-option>
              </el-select>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                发音时机
              </template>
              <el-select @change="changeSetting" v-model="form.voiceMode" style="width: 150px">
                <el-option label="立即发音" value="NOW"></el-option>
                <el-option label="点击发音" value="CLICK"></el-option>
              </el-select>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                记忆模式：看英文回忆中文
              </template>
              <el-select @change="changeSetting" v-model="form.mode" style="width: 150px">
                <el-option label="英中" value="EN"></el-option>
                <el-option label="中英" value="ZH"></el-option>
              </el-select>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                例句是否显示中文
              </template>
              <el-switch @change="changeSetting"
                  v-model="form.value"
                  active-text="显示">
              </el-switch>
            </el-descriptions-item>
          </el-descriptions>
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
  name: "Setting",
  data(){
    return{
      form: {
        count: 20,
        mode: 'EN',
        time: '',
        voice: '1',
        voiceMode: 'NOW',
        value: false,
      }
    }
  },
  methods: {
    hide(){
      this.show = false;
    },
    changeSetting(){
      axios.post("/setting",this.form)
          .then(function(res) {
            const rs = res.data;
            console.log(rs);
          })
          .catch(function(err) {
            console.log(err);
          });
    },
    nextWord(){
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
  width: 250px;
  height: 40px;
}
.box-card {
  width: 70%;
  margin: auto;
}
</style>