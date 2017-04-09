# vue-easily
* 该项目仅仅是为了演示vue，主旨简单易懂的学习使用vue
* 涉及到webpack,vue-router,vue-resource,vuex等

## 使用
* 生产环境可将 nginx 等配置到web目录并重写路由——非资源映射到index.html
* development 环境会开启一个api服务

``` bash
$ npm install #插入依赖
$ npm run dev #编译并监视文件改动时热加载
$ npm run build #编译文件到指定目录
```

## 感想
vue给我最深的感觉就是很轻巧，上手也快，他是借鉴了angular和react的产物，使用语法与angular相似，思想受鉴于react。
他的模板也很棒，并且vue文件可以很好的将js，html，css相结合，却又分开。
但模板只能是模板，相比react少了份灵活的使用，相比angular多了份轻巧。
如果你想快速搭建一个中小型网站，并且对迭代和高质量要求并不是非常严格，那vue就是最好的选择了。

## License
[MIT](http://opensource.org/licenses/MIT)
