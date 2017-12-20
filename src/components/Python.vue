<template>
  <div>
    <div>
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
      #break#break，continue语句同样适用于for循环


      x = 50
      def say(message,time=1):#可以设置默认值
      x= 'ndndn' #代表函数内的局部变量
      print(x*5)#30
      #global x#代表全局变量
      #print(x)#50

      say('jjj',5)#可以传参数，可以有函数内的局部变量只作用与函数中


      #如果你有一个许多参数的函数，而你又希望只对其中的一些进行指定，可以通过命名她们来给这些参数赋值
      def func(a,b=5,c=10):
      print('a is',a,'b is',b,'c is',c)

      func(3,7)
      func(25,c=24)
      func(c=50,a=100)

      #可变参数
      def total(a=5,*numbers,**phonebook):#当我们声明一个诸如*param的星号参数时，从此处开始直到结束的所有位置参数都将被收集并汇集成一个称为param的元祖。类似的，当我们声明一个诸如**param的双星号参数时，从此处开始直至结束的所有关键字参数都将被收集成一个名为param的字典
      print('a',a)
      for single_item in numbers:
      print('single_item',single_item)

      for first_part,second_part in phonebook.items():
      print(first_part,second_part)

      print(total(10,1,2,3,jack=1123,john=2231,inge=1560))

      def func2():
      pass#代表没有内容的代码块

      #文档字符串：函数的第一行逻辑行中的字符串是该函数的文档字符串
      def func3(x,y):
      '''euueuueueucsbdbas dhasbma。
      sbdjasbdkjaksdjhkasdhaksj'''
      x=int(x)
      y=int(y)
      if(x>y):
      print(x,'is max')
      else:
      print(y,'is max')
      print(func3(3,5))
      print(func3.__doc__)#打印出了三引号中的内容，建议每个人都为自己编写的所有重要函数配以文档字符串


      import sys#sys 内置模块，包含了与 Python 解释器及其环境相关的功能
      # sys.argv 变量是一系列字符串的列表（List）（列表将在后面的章节予以详细解释）。具体而言， sys.argv 包含了命令行参数（Command Line Arguments）这一列表，也就是使用命令行传递给你的程序的参数
      #在这里要记住的是，运行的脚本名称在 sys.argv 的列表中总会位列第一。因此，在这一案例中我们将会有如下对应关系： 'module_using_sys.py' 对应 sys.argv[0] ， 'we' 对应sys.argv[1] ， 'are' 对应  sys.argv[2] ， 'arguments' 对应  sys.argv[3]
      #另外要注意的是当前目录指的是程序启动的目录。你可以通过运行 import os;print(os.getcwd()) 来查看你的程序目前所处在的目录。
      print('The command line arguments are:')
      for i in sys.argv:
      print(i)
      print('\n\nThe PYTHONPATH is', sys.path, '\n')


      from math import sqrt
      print("Square root of 16 is", sqrt(16))


      #此案例（保存为 module_using_name.py ）：
      if name == ' main ':
      print('This program is being run by itself')
      else:
      print('I am being imported from another module')
      #输出：
      # $ python module_using_name.py
      #This program is being run by itself

      #$ python
      #>>> import module_using_name
      #I am being imported from another module
      #>>>

      #每一个 Python 模块都定义了它的	__name__属性。如果它与__main__属性相同则代表这一模块是由用户独立运行的，因此我们便可以采取适当的行动。


      #引用模块的方式  1,import mymodule  2,from mymodule import say_hi, __version__   3, from mymodule import *



      #内置的 dir() 函数能够返回由对象所定义的名称列表。 如果这一对象是一个模块，则该列表会包括函数内所定义的函数、类与变量。该函数接受参数。 如果参数是模块名称，函数将返回这一指定模块的名称列表。 如果没有提 供参数，函数将返回当前模块的名称列表。
      $ python
      >>> import sys
      # 给出 sys 模块中的属性名称
      >>> dir(sys) ['__displayhook__', '__doc__', 'argv', 'builtin_module_names', 'version', 'version_info']
      # only few entries shown here
      # 给出当前模块的属性名称
      >>> dir()
      ['__builtins__', '__doc__', '__name__', '__package__']
      # 创建一个新的变量 'a' >>> a = 5
      >>> dir()
      ['__builtins__', '__doc__', '__name__', '__package__', 'a']
      # 删除或移除一个名称 >>> del a
      >>> dir()
      ['__builtins__', '__doc__', '__name__', '__package__']


      #Python 中有四种内置的数据结构——列表(List)、元组(Tuple)、字典(Dictionary)和集 合(Set)

      #元组(Tuple)用于将多个对象保存到一起。你可以将它们近似地看作列表，但是元组不能提 供列表类能够提供给你的广泛的功能。元组的一大特征类似于字符串，它们是不可变的，也 就是说，你不能编辑或更改元组。

    </div>

    <div>
      两个完整案例
      <span>
        # This is my shopping list
      shoplist = ['apple', 'mango', 'carrot', 'banana']
      print('I have', len(shoplist), 'items to purchase.')
      print('These items are:', end=' ')
      for item in shoplist:
      print(item, end=' ')
      print('\nI also have to buy rice.')
      shoplist.append('rice')
      print('My shopping list is now', shoplist)
      print('I will sort my list now')
      shoplist.sort()
      print('Sorted shopping list is', shoplist)
      print('The first item I will buy is', shoplist[0])
      olditem = shoplist[0]
      del shoplist[0]
      print('I bought the', olditem)
      print('My shopping list is now', shoplist)
      </span>
      <span>
        # “ab”是地址(Address)簿(Book)的缩写
        ab = {
            'Swaroop': 'swaroop@swaroopch.com',
            'Larry': 'larry@wall.org',
            'Matsumoto': 'matz@ruby-lang.org',
            'Spammer': 'spammer@hotmail.com'
        }
        print("Swaroop's address is", ab['Swaroop'])
        # 删除一对键值—值配对 del ab['Spammer']
        print('\nThere are {} contacts in the address-book\n'.format(len(ab))) for name, address in ab.items():
        print('Contact {} at {}'.format(name, address)) # 添加一对键值—值配对
        ab['Guido'] = 'guido@python.org'
        if 'Guido' in ab:
        print("\nGuido's address is", ab['Guido'])

        输出：$ python ds_using_dict.py
            Swaroop's address is swaroop@swaroopch.com
            There are 3 contacts in the address-book
            Contact Swaroop at swaroop@swaroopch.com
            Contact Matsumoto at matz@ruby-lang.org
            Contact Larry at larry@wall.org
            Guido's address is guido@python.org
      </span>
    </div>
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
