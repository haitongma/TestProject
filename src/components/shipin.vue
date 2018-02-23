<template>
    <div>
      网页声明：告诉浏览器我采用什么规范写网页，<docType>的规定,例如有html4.0 xhtml1.0 html5
      四种定位有那些
      1.static
      2.相对定位relative:相对自己原来的位置 原来位置不消失 浮动 居中可用
      3.绝对定位absolute:相对与距离自己最近的有position属性的祖宗节点(如果不存在这样的祖宗 相对于可视区域)
      4.固定定位fixed:可视区域 原来的位置消失 不能margin和float

      四个属性 left right top bottom
      z-index通常与position属性一起使用，即z轴的高级程度

    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
<style>
  body{
    background-color:#ff0000;
  }
</style>
