<template>
  <div class="wrap">
    <!--example 9  列表的过渡-->
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>

      <button v-on:click="shuffle">Shuffle</button>

      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
      <!--不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>。你也可以通过 tag 特性更换为其他元素-->
      <!--了解新增的 v-move 特性，它会在元素的改变定位的过程中应用。像之前的类名一样-->
      <!--贝塔-银行理财，删除流入流出记录的时候可以用到-->
    </div>
  </div>
</template>

<script>
  import _ from 'underscore'
  export default{
    data(){
      return{
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
      }
    },
    methods:{
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
      shuffle(){
        this.items = _.shuffle(this.items)
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
