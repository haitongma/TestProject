<template>
    <div>
      ES6基础知识————反撇号(`)
      但是我们并没有说:“原来只是被反撇号括起来的普通字符串啊”。模板字符串名之 有理，它为 JavaScript 提供了简单的字符串插值功能，从此以后，你可以通过一种更加 美观、更加方便的方式向字符串中插值了。
      function authorize(user, action) {
      if (!user.hasPrivilege(action)) {
      throw new Error(
      `用户 ${user.name} 未被授权执行 ${action} 操作。`);
      } }

      ${user.name}和${action}被称为模板占位符，JavaScript 将把 user.name 和 action 的值插入到最终生成的字符串中，

      到目前为止，我们所了解到的仅仅是比 + 运算符更优雅的语法，下面是你可能期 待的一些特性细节:
      模板占位符中的代码可以是任意 JavaScript 表达式，所以函数调用、算数运算等这 些都可以作为占位符使用，你甚至可以在一个模板字符串中嵌套另一个，我称之为模板 套构(template inception)。
      如果这两个值都不是字符串，可以按照常规将其转换为字符串。例如:如果 action 是一个对象，将会调用它的.toString()方法将其转换为字符串值。
      如果你需要在模板字符串中书写反撇号，你必须使用反斜杠将其转义:`\``等价于 "`"。
      同样地，如果你需要在模板字符串中引入字符$和{。无论你要实现什么样的目标， 你都需要用反斜杠转义每一个字符:`\$`和`\{`。
      与普通字符串不同的是，模板字符串可以多行书写:

      $("#warning").html(` <h1>小心!>/h1> <p>未经授权打冰球可能受罚 将近${maxPenalty}分钟。</p>`);
      模板字符串中所有的空格、新行、缩进，都会原样输出在生成的字符串中。

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
  body{
    background-color:#ff0000;
  }
</style>
