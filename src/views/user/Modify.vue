<template>
  <el-card class="box-card">
    <div style="position: relative;width: 100%">
      <div class="wordContent">
        <el-form ref="form" :model="form" label-width="80px" size="">
          <el-form-item label="头像">
              <el-upload style="display: inline-block; width: 100px;height: 100px;"
                         class="avatar-uploader"
                         action="http://localhost:9000/upload"
                         :show-file-list="false"
                         :on-success="handleAvatarSuccess"
                         :on-error="uploadError"
                         :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item>

          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.pwd" placeholder="请输入密码"  show-password autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verificationCode">
            <el-input type="verificationCode" v-model="form.verificationCode" placeholder="请输入验证码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Modify',
  data() {
    return {
      imageUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      form: {
        file: '',
        name: '',
        pwd: '11111',
        email: '',
        phone: '',
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    uploadError(){
      this.$message.error('上传失败!');
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
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