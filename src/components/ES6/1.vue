  <template>
<div>
  var arr = [1,2,3,4,5,6,7,8];
  //  20年前js的用法
  for(var i = 0;i<arr.length;i++){
  console.log(arr[i])
  }

  //ES5用法,不需要定义多余变量
  arr.forEach(function (value) {
  console.log(value)
  })

  //for-in用法，千万别这样用，此时的index是字符串"1","2","3",很可能造成"2"+1="21"的情况。总而言之：for-in是为普通对象设计的，如果想获取对象里面属性名，可以用这种方法,这是他的本职工作，等同于Object.keys(someObject)
  for(var index in arr){
  console.log(arr[index])
  }

  //    for-of是最简洁、最直接的遍历数组元素的语法
  //    这个方法避开了 for-in 循环的所有缺陷
  //    与 forEach()不同的是，它可以正确响应 break、continue 和 return 语句
  for(var value of arr){
  console.log(value)
  }
  for(var [key,value] of arr){
  console.log(key + "'s phone number is: " + value)
  }

  举个例子，假设你正在使用 jQuery，尽管你非常钟情于里面的.each()方法，但你还
  是想让 jQuery 对象也支持 for-of 循环，你可以这样做:
  // 因为 jQuery 对象与数组相似
  // 可以为其添加与数组一致的迭代器方法
  jQuery.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
  所有拥有[Symbol.iterator]()的对象被称为可迭代的。


  for-of 循环首先调用集合的[Symbol.iterator]()方法，紧接着返回一个新的迭代器对 象。迭代器对象可以是任意具有.next()方法的对象;for-of 循环将重复调用这个方法， 每次循环调用一次。举个例子，这段代码是我能想出来的最简单的迭代器:
  var zeroesForeverIterator = {
  [Symbol.iterator]: function () {
  return this;
  },
  next: function () {
  return {done: false, value: 0};
  } };
</div>
  </template>
<script>
  export default{
      data(){
          return {

          }
      },
    methods:{

    }
  }
</script>

