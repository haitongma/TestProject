<template>
    <div class="wrap">
      <!--example 5  javascript钩子-->
      <button @click="show = !show">
        Toggle
      </button>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false">
        <p v-if="show">
          Demo
        </p>
      </transition>
        <!--仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测，避免过渡过程中 CSS 的影响-->
    </div>
</template>
<script>
    export default{
        data(){
            return{
              show: false
            }
        },
        methods:{
          beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
          },
          enter: function (el, done) {
            //Velocity： a great option for JavaScript animations
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
          },
          leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
              rotateZ: '45deg',
              translateY: '30px',
              translateX: '30px',
              opacity: 0
            }, { complete: done })
          }
        }
    }
</script>
<style>
  .wrap{
    width:90%;
    padding:15px;
    height:500px;
    border:1px solid #ccc;
    box-shadow: 0px 0px 30px 20px #ddd;
    margin-top:30px;
  }
</style>
