<template>
    <div>
       在错误的路径下git init了怎么办？进到.git所在的目录
       rm -f .git(按文件名删除文件)
       rm -rf .git(按文件名删除文件夹)

       远程git仓库建好后，如何新建本地git项目？
        git config --global user.name "麻海通"
        git config --global user.email "haitong.ma@corp.elong.com"
        git config user.name和git config user.email查看


        mkdir homemap 创建名为homemap的文件夹
        cd homemap
        git init
        touch README.md  创建名为README.md的文件
        git add README.md
        git commit -m "first commit"
        git remote add origin git@code.corp.elong.com:xy-team/homemap.git 添加远程仓库地址
        git push -u origin master  将改动提交到远程仓库
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
<style scoped>
  body{
    background-color:#ff0000;
  }
</style>
