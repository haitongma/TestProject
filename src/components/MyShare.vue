<template>
    <div class="wrap">
      <img src="../assets/images/1.jpg">
      <p class="intro">
        <span @click="package">贝塔技术交流分享会</span><br/>
        <span style="margin-left: 160px;">第一期</span>
      </p>
      <p class="intro2">
        <span @click="link">《Vue 过渡&动画》</span><br/>
        <span style="margin-left: 160px;">——欧文</span>
      </p>
      <transition name="fade">
      <div class="redPack" v-if="showPage">
        <div class="top">
          <div><img src="../assets/images/color.jpeg" style="width: 16%;float: left;margin: .5rem 0 0 .5rem;"></div>
          <div style="display: inline-block;margin:.6rem 0 0 .6rem;">恭喜发财，大吉大利</div>
        </div>
        <div class="bot">微信红包</div>
      </div>
      </transition>
    </div>
</template>
<script>
    export default{
        data(){
            return{
              showPage:false
            }
        },
        methods:{
          link(){
              this.$router.push({name:'Transition1'})
          },
          package(){
            this.showPage=true
          }
        }
    }
</script>
<style scoped>
  .wrap{
    width:100%;
    height:auto;
    position: relative;
  }
  .intro{
    position: absolute;
    left:10%;
    top:26px;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .intro2{
    position: absolute;
    right:26%;
    bottom:44px;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .redPack{
    position: absolute;
    right:11%;
    top:144px;
    width:240px;
    height:80px;
    color: #fff;
    font-size: 1rem;
    background: rgb(238,160,83);
    border-radius: .2rem;
  }
  .top{
    width:100%;
    height:60px;
  }
  .bot{
    width:100%;
    height:20px;
    background: #fff;
    font-size: 1rem;
    color: rgb(173,173,173);
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform:translate(400px)
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s
  }
</style>
