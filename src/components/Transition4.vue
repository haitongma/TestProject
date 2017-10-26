<template>
    <div class="wrap">
      <!--example 4  自定义过渡的类名-->
      <button @click="show = !show">
        Toggle render
      </button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
        <p v-if="show">hello</p>
      </transition>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                show:true
            }
        },
        methods:{
          ps(){
              //优先级比普通的类名高，适用于与其他第三方css动画库结合，如：animate.css
              //进入：
              //enter-class
              //enter-active-class
              //enter-to-class (2.1.8+)
              //离开：
              //leave-class
              //leave-active-class
              //leave-to-class (2.1.8+)
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
