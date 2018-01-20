<template>
    <div>
      <canvas id="tutorial" width="150" height="150"></canvas>
      如果你绘制出来的图像是扭曲的, 尝试用width和height属性为<canvas>明确规定宽高，而不是使用CSS

      不支持canvas的浏览器要做兼容，在标签内写的内容，即替代内容，会被显示
      <canvas id="stockGraph" width="150" height="150">
        <img src="images/clock.png" width="150" height="150" alt=""/>
        current stock price: $3.15 +0.15
      </canvas>
      <style type="text/css">
        canvas { border: 1px solid black; }
      </style>
      <canvas> 元素有一个叫做 getContext() 的方法，这个方法是用来获得渲染上下文和它的绘画功能。getContext()只有一个参数，上下文的格式。一旦有了元素对象，你可以通过使用它的getContext() 方法来访问绘画上下文。

        检查支持性：
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgb(200,0,0)";矩形
        ctx.fillRect (10, 10, 55, 50);//距离x距离，距离y距离，宽，高
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);

        ctx.beginPath();填充三角形
        ctx.moveTo(75,50);距离x距离，距离y距离,将笔触移动到指定的坐标x以及y上。
        ctx.lineTo(100,75);绘制一条从当前位置到指定x以及y位置的直线。
        ctx.lineTo(100,25);
        ctx.fill();填充

        ctx.beginPath();描边三角形，
        ctx.moveTo(125,125);
        ctx.lineTo(125,45);
        ctx.lineTo(45,125);
        ctx.closePath();因为路径使用填充（filled）时，路径自动闭合，使用描边（stroked）则不会闭合路径
        ctx.stroke();

        ctx.beginPath();画个笑脸
        ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
        ctx.moveTo(110,75);
        ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
        ctx.moveTo(65,65);
        ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
        ctx.moveTo(95,65);
        ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
        ctx.stroke();

        12个不同的角度以及填充的圆弧。

        二次贝塞尔曲线及三次贝塞尔曲线
        quadraticCurveTo(cp1x, cp1y, x, y)
        绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
        bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
        绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
        左边的图能够很好的描述两者的关系，二次贝塞尔曲线有一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点，一个结束点；他们都拥有一个初始位置的点。
        // 二次贝塞尔曲线
        ctx.beginPath();
        ctx.moveTo(75,25);
        ctx.quadraticCurveTo(25,25,25,62.5);
        ctx.quadraticCurveTo(25,100,50,100);
        ctx.quadraticCurveTo(50,120,30,125);
        ctx.quadraticCurveTo(60,120,65,100);
        ctx.quadraticCurveTo(125,100,125,62.5);
        ctx.quadraticCurveTo(125,25,75,25);
        ctx.stroke();


        //三次贝塞尔曲线
        ctx.beginPath();
        ctx.moveTo(75,40);
        ctx.bezierCurveTo(75,37,70,25,50,25);
        ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
        ctx.bezierCurveTo(20,80,40,102,75,120);
        ctx.bezierCurveTo(110,102,130,80,130,62.5);
        ctx.bezierCurveTo(130,62.5,130,25,100,25);
        ctx.bezierCurveTo(85,25,75,37,75,40);
        ctx.fill();



        path2D：//对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。
        var rectangle = new Path2D();画一个空正方形和一个实心圆形
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        ctx.stroke(rectangle);
        ctx.fill(circle);


        for (var i=0;i<6;i++){//绘制彩虹方格
        for (var j=0;j<6;j++){
        ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
        Math.floor(255-42.5*j) + ',0)';
        ctx.fillRect(j*25,i*25,25,25);
        }
        }
        } else {
        // canvas-unsupported code here
        }
        arc(x, y, radius, startAngle, endAngle, anticlockwise)
        画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为逆时针）来生成。注意：arc()函数中的角度单位是弧度，不是度数。角度与弧度的js表达式:radians=(Math.PI/180)*degrees

        不同于SVG，HTML中的元素canvas只支持一种原生的图形绘制：矩形。所有其他的图形的绘制都至少需要生成一条路径，不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。


        fillRect(x, y, width, height)
        绘制一个填充的矩形
        strokeRect(x, y, width, height)
        绘制一个矩形的边框
        clearRect(x, y, width, height)
        清除指定矩形区域，让清除部分完全透明。

        <!--路径-->
        beginPath()
        新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
        closePath()//不必须
        闭合路径之后图形绘制命令又重新指向到上下文中。
        stroke()
        通过线条来绘制图形轮廓。
        fill()//当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。
        通过填充路径的内容区域生成实心的图形。


        // 这些 fillStyle 的值均为 '橙色'
        ctx.fillStyle = "orange";
        ctx.fillStyle = "#FFA500";
        ctx.fillStyle = "rgb(255,165,0)";
        ctx.fillStyle = "rgba(255,165,0,1)";
        注意: 默认情况下，线条和填充颜色都是黑色，一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。

        ctx.globalAlpha = 0.2
        这个属性影响到 canvas 里所有图形的透明度,设置 globalAlpha 为 0.2 后，在上面画一系列半径递增的半透明圆,img中示例


        lineWidth = value
        设置线条宽度。
        lineCap = type：['butt','round','square']
        设置线条末端样式。
        lineJoin = type：round, bevel 和 miter。默认是 miter。
        设定线条与线条间接合处的样式。
        miterLimit = value
        限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。

        getLineDash()
        返回一个包含当前虚线样式，长度为非负偶数的数组。
        setLineDash(segments)
        设置当前虚线样式。
        lineDashOffset = value
        设置虚线样式的起始偏移量。
        for (var i = 0; i < 10; i++){
        ctx.lineWidth = 1+i;
        ctx.beginPath();
        ctx.moveTo(5+i*14,5);
        ctx.lineTo(5+i*14,140);
        ctx.stroke();
        }


        // Create gradients颜色渐变
        var lingrad = ctx.createLinearGradient(0,0,0,150);
        lingrad.addColorStop(0, '#00ABEB');
        lingrad.addColorStop(0.5, '#fff');
        lingrad.addColorStop(0.5, '#26C000');
        lingrad.addColorStop(1, '#fff');


        // 创建新 image 对象，用作图案，展示出来这张图
        var img = new Image();
        img.src = 'images/wallpaper.png';
        img.onload = function(){唯一要注意的是，使用 Image 对象的 onload handler 来确保设置图案之前图像已经装载完毕

        // 创建图案
        var ptrn = ctx.createPattern(img,'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0,0,150,150);

        }


        这个例子绘制了带阴影效果的文字。
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

        ctx.font = "20px Times New Roman";
        ctx.fillStyle = "Black";
        ctx.fillText("Sample String", 5, 30);


        当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, Math.PI*2, true);
        ctx.arc(50, 50, 15, 0, Math.PI*2, true);
        ctx.fill("evenodd");


        fillText(text, x, y [, maxWidth])
        在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
        strokeText(text, x, y [, maxWidth])
        在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.
        font = value
        当前我们用来绘制文本的样式. 这个字符串使用和 CSS font 属性相同的语法. 默认的字体是 10px sans-serif。
        textAlign = value
        文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。
        textBaseline = value
        基线对齐选项. 可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
        direction = value
        文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。
        ctx.font = "48px serif";
        ctx.textBaseline = "hanging";
        ctx.fillText("Hello world", 10, 50);


        measureText()
        将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。
        var text = ctx.measureText("foo"); // TextMetrics object
        text.width; // 16;

        北京是一个坐标系，在上面画三条折线图
        function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');
        var img = new Image();
        img.onload = function(){
        ctx.drawImage(img,0,0);
        ctx.beginPath();
        ctx.moveTo(30,96);
        ctx.lineTo(70,66);
        ctx.lineTo(103,76);
        ctx.lineTo(170,15);
        ctx.stroke();
        }
        img.src = 'images/backdrop.png';
        }


        在这个例子里面我用到上面已经用过的犀牛图像，不过这次我要给犀牛头做个切片特写，然后合成到一个相框里面去。
        我用一个与上面用到的不同的方法来装载图像，直接将图像插入到 HTML 里面，然后通过 CSS 隐藏（display:none）它。两个图像我都赋了 id ，方便后面使用。看下面的脚本，相当简单，首先对犀牛头做好切片（第一次drawImage）放在 canvas 上，然后再上面套个相框（第二次drawImage）。
        // Draw slice
        ctx.drawImage(document.getElementById('source'),
        33,71,104,124,21,20,87,104);

        // Draw frame
        ctx.drawImage(document.getElementById('frame'),0,0);


        cx.mozImageSmoothingEnabled = false;禁止图像缩放

        保存图片
        canvas.toDataURL('image/png')
        默认设定。创建一个PNG图片。
        Default setting. Creates a PNG image.
        canvas.toDataURL('image/jpeg', quality)
        创建一个JPG图片。你可以有选择地提供从0到1的品质量，1表示最好品质，0基本不被辨析但有比较小的文件大小。

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

</style>
