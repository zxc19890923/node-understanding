  必须说我们使用的是ng2配合node开发 

  nodejs创建自己的而服务器，设定端口，
  我们的ng2肯定有自己的一套路由来控制界面跳转，
  那么就对了，我们只需要在node中配置相关的路由，然后定义接口post/get，然后返回相应的json数据即可
  然后前台界面接受并处理数据
  
  node试运行在v8引擎上的， 所以浏览器默认端口为8080，发布代码只需要设定listen（8080）然后浏览器界面就会调用相关的借口了。
