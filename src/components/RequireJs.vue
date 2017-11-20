<template>
  <div>
    requirejs好处：
    （1）实现js文件的异步加载，避免网页失去html响应；
    （2）管理模块之间的依赖性，便于代码的编写和维护。
    引用：
    <script src="js/require.js" defer async="true"></script>

    async属性表明这个文件需要异步加载，避免网页失去响应。IE不支持这个属性，只支持defer，所以把defer也写上，也可以都不用写。
    require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
　　 require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
　　　　// some code here
　　 });
    require.js会先加载jQuery、underscore和backbone，然后再运行回调函数。主模块的代码就写在回调函数中。

　　 require.config({
　　　　baseUrl: "js/lib",
　　　　paths: {
　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"
　　　　}
　　 });

    require.js要求，每个模块是一个单独的js文件。这样的话，如果加载多个模块，就会发出多次HTTP请求，会影响网页的加载速度。因此，require.js提供了一个优化工具，当模块部署完毕以后，可以用这个工具将多个模块合并在一个文件中，减少HTTP请求数

    exports值（输出的变量名），表明这个模块外部调用时的名称；例如：module.exports=headPic

    require.js还提供一系列插件，实现一些特定的功能。

    domready插件，可以让回调函数在页面DOM结构加载完成后再运行。
    　　require(['domready!'，'text!review.txt',
    　　　　'image!cat.jpg'], function (doc){
    　　　　// called once the DOM is ready
    　　});
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
<style scoped>

</style>
