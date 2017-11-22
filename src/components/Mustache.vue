<template>
  <div>
      mustache经典的前端模版引擎，稳定，经典。
      安装：npm install mustache --save-dev
      1.变量：{{person}}
      2.带有html的变量：{{{person}}
      3.循环：
         {{#stooges}}
         ......//循环整个数组的时候用{{.}}作为下标。
         {{/stooges}}
        View：{
                "stooges": [
                  { "name": "Moe" },
                  { "name": "Larry" },
                  { "name": "Curly" }
                ]
              }
        Template:{{#stooges}}
                  <b>{{name}}</b>
                  {{/stooges}}
        Output: <b>Moe</b>
                <b>Larry</b>
                <b>Curly</b>
      4.取决于参数的类型，如果是函数，将在每次迭代列表中的当前项上下文中调用
    View:

    {
    "beatles": [
    { "firstName": "John", "lastName": "Lennon" },
    { "firstName": "Paul", "lastName": "McCartney" },
    { "firstName": "George", "lastName": "Harrison" },
    { "firstName": "Ringo", "lastName": "Starr" }
    ],
    "name": function () {
    return this.firstName + " " + this.lastName;
    }
    }
    Template:

    {{#beatles}}
    * {{name}}
    {{/beatles}}
    Output:

    * John Lennon
    * Paul McCartney
    * George Harrison
    * Ringo Starr
    5.如果一个section key的值是一个函数，那么它将被调用，并将该section的文本块（un-rendered）作为第一个参数。第二个参数是使用当前视图作为其视图参数的特殊渲染函数。它在当前视图对象的上下文中被调用。
    View:

    {
    "name": "Tater",
    "bold": function () {
    return function (text, render) {
    return "<b>" + render(text) + "</b>";
    }
    }
    }
    Template:

    {{#bold}}Hi {{name}}.{{/bold}}
    Output:

    <b>Hi Tater.</b>
    6.如果循环的数组为[],或者
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
