<template>
  <div>
    <a href="#5F">点击我，会锚点定位到某个地方</a>
    <p>
      锚点链接（也叫书签链接），常常用于那些内容庞大繁琐的网页，通过点击命名锚点，不仅让我们能指向文档，还能指向页面里的特定段落，更能当作"精准链接"的便利工具。
      在长页面中，用锚点定位本页面的某个位置，那用锚点链接就可以了。

      hash 属性是一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分）
      假设当前的 URL 是: http://example.com:1234/test.htm#part2：
      document.write(location.hash);
      输出：#part2
    </p>
    <br>
    锚点的用法有两种：
    一种是：页内跳转；
    一种是：跳到其他页面的某个区域。
    <br>
    当需要从A页面跳转到B页面的某个指定位置时，需要用hash属性锚点链接，先在index.html的导航四个链接中，先设置hash值，然后等到跳转到about.html的时候，再用var tab_hash=window.location.hash,去获取后面的hash值，才进行逻辑判断
    <br>
    <li><a href="about.html#tab1">news</a></li>
    <li><a href="about.html#tab2">in press</a></li>
    <li><a href="about.html#tab3">join us</a></li>
    <li><a href="about.html#tab4">contact</a></li>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <a name="5F">某个地方哈哈哈哈</a>
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
