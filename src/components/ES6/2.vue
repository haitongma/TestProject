<template>
    <div>
      function* quips(name) {
      yield "你好 " + name + "!";
      yield "希望你能喜欢这篇介绍 ES6 的译文"; if (name.startsWith("X")) {
      yield"你的名字"+name+" 首字母是X，这很酷!"; }
      yield "我们下次再见!"; }

      定义函数function->function*，return->yield，普通函数不能自暂停，生成器函数可以，遇到yield函数表达式立即暂停，后续可恢复执行状态
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
<style scoped>

</style>
