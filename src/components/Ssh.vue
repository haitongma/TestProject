<template>
  <div>
    为什么gitbub上要配置ssh，ssh是什么？ssh key是什么？和git有什么关系？

    方案：(今天登陆gitlub橙色提示：缺少ssh key,被龙鄙视)
    1，cd ～/.ssh 进入.ssh这个文件
    2，ls  查看文件里的内容，如果有id_rsa  id_rsa.pub  known_hosts就说明你的电脑上有ssh key，则忽略3
    3，ssh-keygen -t rsa -C "your_email@example.com” 创建一个SSH key，此时：
    会把密钥和公钥放到你电脑上的指定目录，你可以用命令cd /Users/haitong/.ssh。ls。vi id_rsa.pub,查看钥匙的内容.
    接着会提示你输入两次密码，这个是push时候的密码，直接按enter就是不设置。
    4，复制ssh key到指定地点，可以打开文件复制，也可以使用命令行clip < ~/.ssh/id_rsa.pub
    5,重复1，2，检查是否配置好
    参考：http://www.cnblogs.com/wutianlong/p/5465391.html

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
