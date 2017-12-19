<template>
    <div>
      今天创建了自己的第一个python项目
      安装：brew install python3，python3 -V，安装pycharm编辑器，打开新建一个项目，右键新建一个Python File，命名为hello.py，就可以开始写了，写完一段之后右键run，在下方控制台可以看到运行结果，或者打开终端，进到包含hello.py文件夹，输入python，启动，出现<<<，再输入python hello.py,就可以看到当前py的运行结果
      </br>
      </br>
      </br>
      </br>
      学习内容：
      print('文字也是可以的word')#随便写啊这是
      '''yyy'''
      age = 20
      name = '海通'
      print('{0}和{1}'.format(name,age))#format方法所做的事是将每个参数值替换至格式所在的位置
      print(name+"ee"+str(age))
      print('{name} is {age}'.format(name='my',age='24'),end = '_______')
      print('{0:.3f}'.format(1.33333333333))
      print('my name\'s'+name)#反斜杠代表的是转译，不然pyshon会感到困惑,
      print(r'jjsjdjjdjdjjd\'')#不处理这一字符串中的转义字符
      print("my name's"+name)#双引号里面包裹单引号
      print('hshsshshh\nshhshshshhshsh')#\n表示换行
      print('hshsshshh. \ shhshshshhshsh.')
      print('hhhdhdh\t')#制表符，还不太明白啥意思
      s='''this is first.
      this is second'''
      print(s)#多文本展示
      print(2+3)

      number = 23
      runing = True
      while runing:
      guess = int(input('请输入一个数字'))#input函数让用户可以输入字符串内容
      if guess == number:
      print("相等")
      runing = False
      break#结束整个循环，continue结束当前循环，进行循环的下一迭代
      elif guess<number:
      print('你的数字小')
      else:
      print('不相等')
      else:
      print('循环结束')
      print('done')



      for i in range(1,5):
      print(i)
      else:
      print('循环结束')
      break#break，continue语句同样适用于for循环
    </div>
</template>
<script>
    export default{
        data(){
            return {
            }
        },
        components: {
        }
    }
</script>
<style scoped>
  body {
    background-color: #ff0000;
  }
</style>
