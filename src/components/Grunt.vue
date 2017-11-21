<template>
  <div>
    小飞机shadowsocks全局模式和PAC自动模式的区别：
    在全局模式下，所有网站默认走代理。而PAC模式是只有被墙的才会走代理，推荐PAC模式，如果PAC模式无法访问一些网站，就换全局模式试试，一般是因为PAC更新不及时（也可能是GFWList更新不及时）导致的。

    向已经存在的package.json 文件中添加Grunt和grunt插件的最简单方式是通过npm install  <module> --save-dev命令。此命令不光安装了<module>，还会自动将其添加到devDependencies 配置段中，遵循tilde version range格式。

    1.Grunt和 Grunt 插件是通过 npm 安装并管理的，npm是 Node.js 的包管理器，更新npm：npm update -g npm。grunt-cli并不是grunt，所以要install两个grunt 和 grunt-cli

    2.grunt是自动化的，对于需要反复重复的任务，例如压缩，编译，单元测试，linting等。*这和webpack有些不同吧，感觉webpack不是实时打包的，需要执行run build

    3.Gruntfile.js 或 Gruntfile.coffee，用来配置或定义任务（task）并加载Grunt插件的。

    4.你所书写的Grunt代码必须放在此函数内:module.exports=function(grunt){
    pkg: grunt.file.readJSON('package.json'),//将packagejson文件中的json元数据引入到grunt cinfig中
    uglify: {
    options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//注释
    },
    build: {
    src: ['src/<%= pkg.name %>.js'],//<%
    %>这种模版字符串可以引用任意的配置属性，诸如：文件路径，文件列表类型等配置数据，像这样的模板不仅可以用来引用字符串值，还可以引用数组或者其他对象类型的值。
    dest: 'build/<%= pkg.name %>.min.js//把src数组中的文件压缩成dest配置的文件
    aa:[]
    bb:[]
    cc:{}//用于任务配置模板的任意属性
    }
    }
    }

    5.如果是grunt插件的形式，只要npm
    install就可以在gruntfile中以简单命令的形式使用：grunt.loadNpmTasks('grunt-contrib-uglify'),想要知道有哪些插件，可以grunt --help

    6.grunt.registerTask('default',['uglify'])//让grunt默认执行指定的一个或多个任务

    7.concat: {合并文件
    options: {
    // 定义一个用于插入合并输出文件之间的字符
    separator: ';'
    },
    dist: {
    // 将要被合并的文件
    src: ['src/**/*.js'],
    // 合并后的JS文件的存放位置
    dest: 'dist/<%= pkg.name %>.js'
    }
    }

    8.uglify: {压缩文件
    options: {
    // 此处定义的banner注释将插入到输出文件的顶部
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    dist: {
    files: {
    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']//压缩concat任务中合并的文件
    }
    }
    }

    9.QUnit插件的设置非常简单。 你只需要给它提供用于测试运行的文件的位置，注意这里的QUnit是运行在HTML文件上的
    qunit: {
    files: ['test/**/*.html']//test目录下所有以.html结尾的文件
    },

    10.jshint: {//jshint是一个javaScript语法和风格的检查工具,但检查不出逻辑问题。
    // define the files to lint
    files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],//要检测的文件
    // configure JSHint (documented at http://www.jshint.com/docs/)
    options: {//配置检测规则
    // more options here if you want to override JSHint defaults
    globals: {
    jQuery: true,
    console: true,
    module: true
    }
    }
    }

    11.你可以在命令行使用grunt
    watch来运行这个任务。当它检测到任何你所指定的文件(在这里我使用了JSHint任务中需要检测的相同的文件)发生变化时，它就会按照你所指定的顺序执行指定的任务(在这里我指定了jshint和qunit任务)。
    watch: {
    files: ['<%= jshint.files %>'],
    tasks: ['jshint', 'qunit']
    }

    12.多任务（multi-task）可以通过任意命名的“目标（target）”来定义多个配置。在下面的案例中，concat任务有名为foo和bar两个目标，而uglify任务仅仅只有一个名为bar目标。
    grunt.initConfig({
    concat: {
    foo: {
    // concat task "foo" target options and files go here.
    },
    bar: {
    // concat task "bar" target options and files go here.
    },
    },
    uglify: {
    bar: {
    // uglify task "bar" target options and files go here.
    },
    },
    });
    同时指定任务（task）和目标（target），例如grunt concat:foo或者grunt concat:bar，将只会处理指定目标（target）的配置，而运行grunt
    concat将遍历所有目标（target）并依次处理。注意，如果一个任务使用grunt.task.renameTask重命名过，Grunt将在配置对象中查找以新的任务名命名的属性。

    13.由于大多的任务都是执行文件操作，Grunt有一个强大的抽象层用于声明任务应该操作哪些文件。这里有好几种定义src-dest(源文件-目标文件)文件映射的方式，均提供了不同程度的描述和控制操作方式。

    14.clean: {//filter筛选过滤 文件，此处是清理一个空目录
    foo: {
    src: ['tmp/**/*'],
    filter: function(filepath) {
    return (grunt.file.isDir(filepath) && require('fs').readdirSync(filepath).length === 0);
    },
    },
    },

    15.通配符设置规则：foo/*.js将匹配位于foo/目录下的所有的.js结尾的文件；而foo/**/*js将匹配foo/目录以及其子目录中所有以.js结尾的文件。
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
