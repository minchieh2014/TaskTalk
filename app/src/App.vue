<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$router.push('/server')
    // this.$router.push('/server')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #353535;135564*/
  color: #E0DBC9;
  background: #2e2c29;
  margin-top: 0px;
  margin: 0;
  padding: 0;
}
html,
body,
div {
  margin-top: 0px;
  margin: 0;
  padding: 0;
}
html,
body {
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  /* border: 1px solid red; */
  /*position: absolute;*/
  border-radius: 4px;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-size: cover;
  margin-bottom: 0px;
  margin-top: 0px;
  /* overflow: hidden; */
  background-color: #2e2c29;
}
.dragRegion {
  -webkit-app-region: drag;
  -webkit-user-select: none;
}
.fullContainer {
  width: 100%;
  height: 100%;
  margin-top: 0px;
  -webkit-app-region: no-drag;
}
.el-input__inner {
    /*width: 220px;*/
    border-top-width: 0px!important;
    border-left-width: 0px!important;
    border-right-width: 0px!important;
    border-bottom-width: 1px!important;
    /*outline: medium;*/
    /* background-color: transparent; */
}
</style>
