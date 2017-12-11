<template>
    <div>
      有很多关于iphone X兼容问题的网站，苹果公司官网也提供了一些解决此问题的开发文档http://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/
      目前大概就只有两个方法：
      http://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/

      1、默认全屏
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

      2. 设置页面边距为安全区域边距
      body{
      padding:
      constant(safe-area-inset-top)
      constant(safe-area-inset-right)
      constant(safe-area-inset-bottom)
      constant(safe-area-inset-left);
      }
      嗯，constant() 以及 safe-area-inset-top safe-area-inset-right safe-area-inset-bottom safe-area-inset-left 是 iOS 11 webview 新增加的特性，专门用于应对刘海的。。。
      当然，这里的padding只是用于匹配iPhone X默认的安全区域的，你可以设置任何值，不过建议要不小于默认的安全区域值。
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        methods:{
          isIphoneX(){
            return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
          }
        }
    }
</script>
<style scoped>

</style>
