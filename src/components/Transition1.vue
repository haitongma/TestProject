<template>
  <div class="wrap">
    <!--example 单元素的过渡-->
    <div @click="show=!show">toggle</div>

    <transition name="fade">
      <p v-show="show" class="text">Hello，nice to meet you！</p>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show:false,
      }
    },
    methods:{
      ps(){
//        1,原理：vue会嗅探目标元素是否应用了css过渡动画，如果有，在恰当的时机会添加/删除css类名
//        2，vue过渡组件，也可以在钩子函数执行时被调用
      }
    },
    mounted(){
//        let _this = this;
//        setTimeout(function () {
//         _this.show = true
//        },3000)
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
  /*.text{*/
    /*background: #009d6a;*/
  /*}*/
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
</style>
