<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    export default{
        name: 'APP'
    }
</script>
<style rel="stylesheet/scss" lang="scss">
  html,body{
    height:100%;
    margin:0;
    padding: 0;
    overflow: hidden;
  }
  #app{
    width:100%;
    height:100%;
  }
</style>
