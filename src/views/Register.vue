<template>
  <div style="height: 500px;width: 500px;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
      <el-form-item label="用户名" prop="username">
        <el-input type="username" v-model="ruleForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"  show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="rePassword">
        <el-input type="password" v-model="ruleForm.rePassword" placeholder="请确认密码"  show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="ruleForm.email" placeholder="请输入邮箱" autocomplete="off">
          <el-button id="count60" slot="append" type="primary"  @click="sendEmail(ruleForm.email)">发送验证码</el-button>
        </el-input>
      </el-form-item>
      <transition name="el-fade-in">
        <el-form-item v-show="ifVerificationCode" label="验证码" prop="verificationCode">
          <el-input type="verificationCode" v-model="ruleForm.verificationCode" placeholder="请输入验证码" autocomplete="off"></el-input>
        </el-form-item>
      </transition>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "../plugins/axios";
import $ from "jquery";
export default {
  name: "Register",
  data() {
    const validateBlack = (rule, value, callback) => {
      if (value === '') {
        callback(new Error((rule.name === undefined ? "" : rule.name) + '不能为空'));
      }
      callback();
    };
    return {
      ruleForm: {
        username: '',
        password: '',
        rePassword: '',
        email: '',
        verificationCode: '',
      },
      ifVerificationCode: false,
      sett: {
        name: 'yyyy',
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
    sendEmail(email) {
      if (this.isEmail(email)){
        var val = 6;
        var button = $("#count60");
        button.attr("disabled",true);
        button.html( val +"S");
        var myVar = setInterval(function(){
          button.html( --val +"S");
          if (val<=0){
            button.html("发送验证码");
            button.removeAttr('disabled');
            clearInterval(myVar);
          }
        }, 1000);
        this.ifVerificationCode = true;
      }
    },
    isEmail(email){
      if (email.length == 0){
        this.$message.error('邮箱不能为空');
        return false;
      }
      if (email.search('@qq.com') < 0){
        this.$message.error('邮箱格式错误');
        return false;
      }
      return true
    },
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm+this.sett);
          axios.post("/billboard/test",this.ruleForm)
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