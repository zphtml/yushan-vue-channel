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
  #app{
    width:100%;
    height:100%;
  }
</style>
