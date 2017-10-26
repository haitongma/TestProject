<template>
  <div class="wrap">
    <!--example 9  列表的交错过渡-->
    <input v-model="query">
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li
        v-for="(item, index) in computedList"
        v-bind:key="item.msg"
        v-bind:data-index="index"
      >{{ item.msg }}</li>
    </transition-group>

    <!--贝塔，智选超市列表页，加载更新-->
  </div>
</template>

<script>
  import _ from 'underscore'
  export default{
    data(){
      return{
        query: '',
        list: [
          { msg: 'Bruce Lee' },
          { msg: 'Jackie Chan' },
          { msg: 'Chuck Norris' },
          { msg: 'Jet Li' },
          { msg: 'Kung Fury' }
        ]
      }
    },
    computed: {
      computedList: function () {
        var vm = this
        return this.list.filter(function (item) {
          return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
        })
      }
    },
    methods:{
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1, height: '1.6em' },
            { complete: done }
          )
        }, delay)
      },
      leave: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
          )
        }, delay)
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
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  /*.list-enter-active, .list-leave-active {*/
    /*transition: all 1s;*/
  /*}*/
  /*.list-enter, .list-leave-to*/
    /*!* .list-leave-active for below version 2.1.8 *! {*/
    /*opacity: 0;*/
    /*transform: translateY(30px);*/
  /*}*/
  .list-move {
    transition: transform 1s;
  }
</style>
