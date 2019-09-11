<template>
  <div id="app">
    <el-button type="primary" size="mini" @click="doButtonPressed" disabled>主要按钮</el-button>
    <el-button type="success" size="small" v-on:click="doButtonPressed">成功按钮</el-button>
    <el-button type="info" >信息按钮</el-button>
 
  </div>
</template>

<script>

import ElButton from './components/ElButton'
export default {
  name: 'App',
  components: {
    'el-button':ElButton
  },
  methods:{
    doButtonPressed () {
      console.log('pressed')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
