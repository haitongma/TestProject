<template>
    <div class="wrap">
      <!--example 3  css动画-->
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show" class="bounceDom">Look at me!</p>
      </transition>

      <!--自定义过渡持续的时间-->
      <!--<transition :duration="1000">...</transition>-->
      <!--<transition :duration="{ enter: 500, leave: 800 }">...</transition>-->
    </div>
</template>
<script>
    export default{
        data(){
            return{
              show: true
            }
        },
        methods:{
          ps(){
            //CSS 动画用法同 CSS 过渡，
            //区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除
          }
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
  /*.bounceDom{*/
    /*background: #009d4a;*/
  /*}*/
  .bounce-enter-active {
    animation: bounce-in 1s;
  }
  .bounce-leave-active {
    animation: bounce-in 1s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
