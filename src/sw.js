importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js')
// importScripts('sw-toolbox')
// import 'sw-toolbox'

if (workbox) {
  // debugger
  console.log('workbox ready')
} else {
  console.log('workbox not ready')
}
workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // 使用缓存，但尽快在后台更新
  workbox.strategies.staleWhileRevalidate({
    // 使用自定义缓存名称
    cacheName: 'css-cache'
  })
)
workbox.routing.registerRoute(
  // 缓存JS文件
  /.*\.js/,
  // 使用缓存，但尽快在后台更新
  workbox.strategies.staleWhileRevalidate({
    // 使用自定义缓存名称
    cacheName: 'js-cache'
  })
)
workbox.routing.registerRoute(
  /.*\.png/,
  // /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  // 使用缓存，但尽快在后台更新
  workbox.strategies.staleWhileRevalidate({
    // 使用自定义缓存名称
    cacheName: 'icon-cache'
  })
)
