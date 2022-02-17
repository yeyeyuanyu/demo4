<template>
  <div style="height: 500px;width: 500px;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="src"></el-image>
      </div>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
      <el-form-item label="账号" prop="username">
        <el-input type="username" v-model="ruleForm.username" placeholder="请输入用户名或邮箱" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"  show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  name: "Login",
  data() {
    const validateBlack = (rule, value, callback) => {
      if (value === '') {
        callback(new Error((rule.name === undefined ? "" : rule.name) + '不能为空'));
      }
      callback();
    };
    return {
      src: require('@/assets/logo.png'),
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { validator: validateBlack, trigger: 'blur',name: "账号" }
        ],
        password: [
          { validator: validateBlack, trigger: 'blur',name: "密码" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          axios.post("/yyuser/login",this.ruleForm)
              .then(function(res) {
                const rs = res.data;
                console.log(rs.data);
                setTimeout(() => {
                  that.$router.push({ path: "/home" });
                }, 0.1 * 1000);
              })
              .catch(function(err) {
                console.log(err);
              });

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
}
</script>

<style scoped>

</style>