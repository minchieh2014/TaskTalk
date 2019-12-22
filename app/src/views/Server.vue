<template>
    <div class='fullContainer'>
      <div class='dragRegion dragDiv'></div>
      <el-form
         status-icon
         label-position="left"
         label-width="0px"
         class="myBody">
            <h3 class="title">服务配置</h3>
            <el-form-item prop="username">
                <el-input
                    placeholder="host"
                    v-model="host"
                    style='width:180px'
                ></el-input>
                <el-input type="text"
                  placeholder="port"
                  v-model="port"
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
import axios from 'axios'
import db from '@/util/db'
export default {
  data () {
    return {
      host: '',
      port: 80
    }
  },
  created: async function () {
    this.remote.getCurrentWindow().setSize(300, 450, true)
    let server = db.setting.get('version')
    let res = await this.checkServer(server && server.host, server && server.port)
    console.log('rrrrrrrrrrrrr:', res)
    // TODO
    // this.ip = server
    /* this.msgBox({
      showClose: false,
      message: '123' + JSON.stringify(server),
      type: 'error',
      duration: 10000
    })
    */
  },
  methods: {
    async checkServer (host, port) {
      if (host === undefined || host.constructor !== String) return false
      if (port === undefined || port.constructor !== Number) return false
      let url = 'http://' + host + ':' + port + '/hello'
      let res = await axios.post(url, '', {
        timeout: 2000,
        withCredentials: true
      })
      res = res.data
      return new Promise((resolve) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    }
  }
}
</script>

<style scoped>
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
