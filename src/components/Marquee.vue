<template>
  <div>
    <!--方式1-->
    <marquee scrollamount="2" direction="left" Behaviour="Scroll">
      <div>
        <p>
          <span>1北京市爽丹酒店库存截至现在剩余<span></span>62%</span>
          <span>2北京市爽丹酒店库存截至现在剩余<span></span>62%</span>
          <span>3北京市爽丹酒店库存截至现在剩余<span></span>62%</span>
        </p>
      </div>
    </marquee>
    <!--marquee 参数：兼容性不是很好，现在比较推荐使用js写跑马灯效果-->
    <!--BGColor：滚动文本框的背景颜色。-->
    <!--Direction：滚动方向设置，可选择Left（从右到左）、Rightup（从下到上）和down（从上到下）-->
    <!--scrolldelay：每轮滚动之间的延迟时间，数字越大滚动越慢。-->
    <!--scrollamount：一次滚动总的时间量，数字越小滚动越慢。-->
    <!--Behaviour：滚动的方式设置，三种取值：Scroll（循环滚动） lide（滑入，单次滚动）、Alternate（来回滚动）。-->
    <!--Align：文字的对齐方式设置，可选择Middle(居中)、Bottom(居下)还是Top(居上)。-->
    <!--Width：滚动文本框的宽度，输入一个数值后从后面的单选框选择in Pixels(按像素)或是in Percent(按百分比)。-->
    <!--Height：滚动文本框的高度，输入一个数值后从后面的单选框选择in Pixels(按像素)或是in Percent(按百分比)。-->
    <!--loop：滚动次数，默认为infinite（无限）-->
    <!--hspace、vspace：前后、上下的空行。-->
    <!--方式2-->
    <div class="marquee">
      <ul>
        <li>1北京市爽丹酒店库存截至现在剩余<span></span>62%</li>
        <li>2北京市爽丹酒店库存截至现在剩余<span></span>62%</li>
        <li>3北京市爽丹酒店库存截至现在剩余<span></span>62%</li>
      </ul>
    </div>
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
  /*方式2样式*/
  .marquee ul {
    display: block;
    text-align: center;
    position: absolute;
    overflow: hidden;
    -webkit-animation: marquee 20s linear infinite;
    animation: marquee 20s linear infinite;
  }
  @keyframes marquee {
    0% {
      transform: translate3d(0,0,0);
    }
    100% {
      transform: translate3d(-1002px,0,0); // 每行长200，4s
    }
  }
</style>
