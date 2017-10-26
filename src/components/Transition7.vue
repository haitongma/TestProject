<template>
  <div class="wrap">
    <!--example 7  多个相同标签名的元素的过渡-->
        <transition name="fade" mode="out-in">
          <button v-if="docState === 'saved'" key="saved" @click="fun('edited')">
            Edit
          </button>
          <button v-if="docState === 'edited'" key="edited" @click="fun('saved')">
            Save
          </button>
        </transition>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        docState:'saved'
      }
    },
    methods:{
      ps(){
        //相同标签名的元素切换时,给在 <transition> 组件中的多个元素设置 key,来标记以让 Vue 区分它们
        //in-out：新元素先进行过渡，完成之后当前元素过渡离开。
        //out-in：当前元素先进行过渡，完成之后新元素过渡进入。
      },
      fun(v){
        this.docState=v
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
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
</style>
