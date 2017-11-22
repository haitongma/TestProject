<template>
    <div class="wrap">
      <!--example 6  初始渲染的过渡-->
      <transition appear>

      </transition>

      <!--同样也可以自定义 CSS 类名-->
      <transition
        appear
        appear-to-class="animated tada"
        appear-active-class="animated bounceInRight">
        <p>Hello！</p>
      </transition>

      <!--也可以自定义 JavaScript 钩子：-->
      <!--<transition-->
        <!--appear-->
        <!--v-on:before-appear="customBeforeAppearHook"-->
        <!--v-on:appear="customAppearHook"-->
        <!--v-on:after-appear="customAfterAppearHook"-->
        <!--v-on:appear-cancelled="customAppearCancelledHook">-->
      <!--</transition>-->
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  .wrap{
    width:90%;
    padding:15px;
    height:500px;
    border:1px solid #ccc;
    box-shadow: 0px 0px 30px 20px #ddd;
    margin-top:30px;
  }
</style>
