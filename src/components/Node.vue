<template>
    <div>
      在浏览器端 js 里面，为了解决各模块变量冲突等问题，往往借助于 js 的闭包把左右模块相关的代码都包装在一个匿名函数里。而 Nodejs 编写模块相当的自由，开发者只需要关注 require,exports,module 等几个变量就足够，而为了保持模块的可读性，很推荐把不同功能的代码块都写成独立模块，减少各模块耦合。
      module.exports将函数直接导出成模块

      // plus.js
      function plus(a,b){
      return a+b ;
      }
      module.exports = plus;
      // main.js
      var plus = require('plus');
      console.log(plus(1,2))

      在项目中我们通常用这种方式
      //main.js
      var Page = requir('../../page')
      var page = new Page

      Js New一个函数和直接调用的区别：
      一个是构造对象、一个是函数调用。
      function b() {
      this.p = 1;
      this.p1 = 2;
      }

      var a = new b();
      a.p // 1
      a.p1 //2

      var c = b();
      c.p // 报错
      c.p1 // 报错
      new：实际上a的__proto__成员指向了b对象prototype成员对象，然后b函数对象的this指针替换成a，然后再调用b函数（），这时候的a里面的this变成了a自己，所以a拥有p和p1
      a.__proto__=b.prototype;
      b.call(a)
      function b() {
      a.p = 1;
      a.p1 = 2;
      }
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
