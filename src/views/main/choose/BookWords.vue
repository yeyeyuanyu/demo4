<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <div><h5><span>这里写书名</span></h5></div>
      <div>
        <i class="el-icon-notebook-2"></i>
      </div>
    </div>
    <transition name="el-zoom-in-center" >
      <div class="transition-box" style="overflow:auto" v-infinite-scroll="load">
        <div class="wordContent" >
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
              <el-checkbox-group v-model="form.worded">
                <div v-for="value in form.words" :key="value">
                  <el-checkbox  v-bind:label="value" name="worded"></el-checkbox>
                </div>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
    <el-button type="primary" @click="onSubmit" style="margin-right: 20px">立即选择</el-button>
    <router-link to="Choose"><el-button>返回</el-button></router-link>
  </el-card>
</template>

<script>
export default {
  name: "BookWords",
  data() {
    return {
      count: 0,
      form: {
        words: ["primary","Choose","value","margin-right"],
        worded: []
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form.worded);
    },
    load () {
      this.count += 1;
      if (this.count < 60){
        this.form.words.push("word"+this.count);
      }
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