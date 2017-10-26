<template>
  <div id="app">
    <transition name="fade">
      <router-view>

      </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  color: #2c3e50;
  max-width:768px;
  margin:0 auto;
}
  .fade-enter-active{
    -webkit-transition: all 2s;
    -moz-transition: all 2s;
    -ms-transition: all 2s;
    -o-transition: all 2s;
    transition: all 2s;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
</style>
