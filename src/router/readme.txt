# 路由使用history 模式注意事项

const router = new VueRouter({
  routes,
  // hash | history
  mode: 'history',
  base: '/his'
})

nginx 配置

location /his {
  alias D:/home/workspace/mini_test_system/vue2/dist;
  index index.html index.htm;
  try_files $uri $uri/ /his/index.html;
}

这样能解决刷新后404问题

比如页面路由跳转应该是
http://127.0.0.1/his/about

结果点击router-link切换后变成了
http://127.0.0.1/about

# ps: vue.config.js 记得设置相对路径
publicPath: './',
