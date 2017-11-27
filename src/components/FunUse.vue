<template>
    <div>
      3 构造器调用模式
      即是构造函数的调用，一般是通过new + 函数名( )，这种模式和以上的方法模式没本质的区别
      function Person() {}
      var tom = new Person(); // 这就是构造器函数的调用

      // 构造函数调用的详细过程
      // 1 会在内部创建一个对象o
      // 2 给对象赋值(this), 然后执行各种操作
      // 3 返回这个对象o


      // 构造函数的返回值：
      //
      //  有一个默认的返回值，新创建的对象（实例）；
      //  当手动添加返回值后（return语句）：
      //     1. 返回值是基本数据类型-->真正的返回值还是那个新创建的对象（即实例）
      //     2. 返回值是复杂数据类型（对象）-->真正的返回值是这个对象
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
<style scoped>

</style>
