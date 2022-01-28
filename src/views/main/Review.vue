<template>
  <div>
    <el-carousel indicator-position="outside" :autoplay="false" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-card class="box-card">
          <h3>{{item}}</h3>
        </el-card>
      </el-carousel-item>
    </el-carousel>
    <button @click="preWord()" type="button" class="el-carousel__arrow--left" style=""><i class="el-icon-arrow-left"></i></button>
    <button @click="nextWord()" type="button" class="el-carousel__arrow--right" style=""><i class="el-icon-arrow-right"></i></button>
  </div>
</template>

<script>
export default {
  name: "Review",
  methods: {
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>