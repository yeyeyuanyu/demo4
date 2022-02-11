<template>
  <div id="box" style="width: 90%;height: 90%;"></div>
</template>

<script>

import echarts from "echarts";

export default {
  name: "LearningSituation",
  mounted() {
    this.drawChart();
  },
  methods:{
    drawChart(){
      //初始化ehcharts实例
      var myChart=echarts.init(document.getElementById("box"));
      //指定图表的配置项和数据
      var formatter = '{b0}';
      var j = 0;
      formatter += '<br/>{a'+j+'}: {c'+j+'}';
      var option={
        //标题
        title:{
          text:'学习情况'
        },
        //工具箱
        //tip展示数据
        tooltip:{
          formatter: formatter,
        },
        //保存图片
        toolbox:{
          show:true,
          feature:{
            saveAsImage:{
              show:true
            }
          }
        },
        //图例-每一条数据的名字叫销量
        legend:{
          data:['标准遗忘曲线',"我的遗忘曲线"]
        },
        //x轴
        xAxis:{
          data:["01-04","01-05","01-06","01-09","01-10","01-11"]
        },
        //y轴没有显式设置，根据值自动生成y轴
        yAxis:{
          type:'value',
          axisLabel:{
            show: true,
            interval: 'auto',
            formatter: '{value}',
          }
        },
        //数据-data是最终要显示的数据
        series:[
          {
            name:'复习单词',
            type:'bar',
            data:[110,50,30,20,15,1]
          },
          {
            name:'新学习单词',
            type:'bar',
            data:[30,10,33,65,5,80]
          }
        ]
      };
      //使用刚刚指定的配置项和数据项显示图表
      myChart.setOption(option);
    }
  }
}

</script>

<style scoped>

</style>