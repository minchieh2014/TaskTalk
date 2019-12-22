<template>
    <div class='fullContainer'>
      <div class='dragRegion dragDiv'>
      </div>
      <el-form
         status-icon
         label-position="left"
         label-width="0px"
         class="myBody">
            <h3>用户登录</h3>
            <el-form-item prop="username">
                <el-input
                    placeholder="工号"
                    v-model="id"
                    style='width:180px'
                ></el-input>
                <el-input type="text"
                  placeholder="姓名"
                  v-model="name"
                  style='width:180px'
                ></el-input>
            </el-form-item>
            <!--
                <el-form-item prop="password">
                    <el-input type="password"
                        v-model="ruleForm2.password"
                        auto-complete="off"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
            <el-checkbox
                v-model="checked"
                class="rememberme"
            >记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
            -->
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      name: ''
    }
  },
  created: function () {
    this.remote.getCurrentWindow().setSize(300, 450, true)
  }
}
</script>

<style scoped>
.title{
    position:absolute;
}
.dragDiv{
  top: 0px;
  height:150px;
  width:100%;
  position:absolute;
}
.myBody{
  /* border-bottom: .04rem solid; */
  /* border-top: #737373  solid 10px; */
  margin-top: 100px;
  height: 200px;
  position:absolute;
  /* background-color: #3f3c38; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  background-color: #332233;
}
</style>
