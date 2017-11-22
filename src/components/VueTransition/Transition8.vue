<template>
  <div class="wrap">
    <!--example 8  多个组件的过渡-->
    <input type="radio" id="one" value="Transition1" v-model="view">
    <label for="Transition1">One</label>
    <input type="radio" id="two" value="Transition2" v-model="view">
    <label for="Transition2">Two</label>
    <transition name="component-fade" mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>
</template>
<script>
  import Transition1 from './Transition1.vue'
  import Transition2 from './Transition2.vue'
  export default{
    data(){
      return{
        view: ''
      }
    },
    components:{
      Transition1,
      Transition2
    },
    methods:{

    }
  }
</script>
<style scoped>
  .wrap{
    width:90%;
    padding:0 5%;
    padding:15px;
    height:500px;
    border:1px solid #ccc;
    box-shadow: 0px 0px 30px 20px #ddd;
    margin-top:30px;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
</style>
