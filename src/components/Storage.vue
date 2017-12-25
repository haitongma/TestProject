<template>
    <div>
      <p>
      localStorage 属性允许你访问一个 local Storage 对象。localStorage 与 sessionStorage 相似。不同之处在于，存储在 localStorage 里面的数据没有过期时间（expiration time），而存储在 sessionStorage 里面的数据会在浏览器会话（browsing session）结束时被清除，即浏览器关闭时。

      应该注意的是，无论是 localStorage 还是 sessionStorage 中保存的数据都仅限于该页面的协议。

      用法：myStorage = localStorage;

      localStorage.setItem('myCat', 'Tom');
      访问当前域名下的 local Storage 对象，并使用 Storage.setItem() 方法往里面添加一个数据项。
      </p>
      <p>
        sessionStorage 属性允许你访问一个 session Storage 对象。它与 localStorage 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面会初始化一个新的会话，这点和 session cookies 的运行方式不同。

        用法：
        // 保存数据到sessionStorage
        sessionStorage.setItem('key', 'value');

        // 从sessionStorage获取数据
        var data = sessionStorage.getItem('key');

        // 从sessionStorage删除保存的数据
        sessionStorage.removeItem('key');

        // 从sessionStorage删除所有保存的数据
        sessionStorage.clear();
      </p>
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
