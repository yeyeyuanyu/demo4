<template>
    <div class="container">
        <span>简洁、实用、美观</span>
        <BackTop></BackTop>
    </div>
</template>

<script>
import BackTop from "@/components/BackTop";

export default {
  name: "Footer",
  components: {
    BackTop
  },
  data() {
    return {
      title: "© " + new Date().getFullYear() + ' 豆约翰',
      author: '豆约翰',
    };
  },
};
</script>

<style scoped>

footer {
  margin-top: 120px;
  height: 150px;
}
footer a{
  color: #bfbfbf;
}

</style>