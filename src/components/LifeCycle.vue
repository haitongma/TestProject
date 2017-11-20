<template>
    <div>
      <button v-on:click="change">change</button>
      <div>生命周期</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
              a: "Vue.js"
            }
        },
      methods:{
        change(){
          console.log("进入函数了")
          console.log(this)
        }
      },
      beforeCreate: function() {
        console.log("beforeCreate,创建前")
        console.log(this.a)
        console.log(this.$el)
      },
      created: function() {
        console.log("created,创建之后");
        console.log(this.a)
        console.log(this.$el)
      },
      beforeMount: function() {
        console.log("beforeMount,mount之前")
        console.log(this.a)
        console.log(this.$el)
      },
      mounted: function() {
        console.log("mount,mount之后")
        console.log(this.a)
        console.log(this.$el)
      },
      beforeUpdate: function() {
        console.log("beforeUpdate,更新前");
        console.log(this.a)
        console.log(this.$el)
      },
      updated: function() {
        console.log("updated,更新完成");
        console.log(this.a);
        console.log(this.$el)
      },
      beforeDestroy: function() {
        console.log("beforeDestroy,销毁前");
        console.log(this.a)
        console.log(this.$el)
        console.log(this.$el)
      },
      destroyed: function() {
        console.log("destroyed,已销毁");
        console.log(this.a)
        console.log(this.$el)
      }
    }
</script>
<style scoped>

</style>
