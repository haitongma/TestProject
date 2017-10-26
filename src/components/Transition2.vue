<template>
  <div class="wrap">
    <!--example 2  css过渡的类名，共6种-->
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
    <img src="../assets/images/classNameIntro.png" class="imgStyle">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show:true
      }
    },
    methods:{
        ps(){
//            进入：
            //v-enter：       定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
            //v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，与transition/animation结合使用。
            //v-enter-to：    定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)。
//            离开：
            //v-leave：       定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
            //v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效。
            //v-leave-to：    定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)。
        }
    },
    mounted(){
        let _this = this
        setTimeout(function () {
          _this.show=false
        },3000)
    }
  }
</script>

<style scoped>
  .wrap{
    width:90%;
    padding:15px;
    height:500px;
    border:1px solid #ccc;
    box-shadow: 0px 0px 30px 20px #ddd;
    margin-top:30px;
  }
  .imgStyle{
    width:80%;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(300px);
    opacity: 0;
  }
</style>
