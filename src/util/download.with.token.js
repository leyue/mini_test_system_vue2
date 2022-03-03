import Axios from 'axios'

const token = ''

Axios({
  method: 'get',
  url: '',
  responseType: 'blob',
  headers: { Authorzation: `Bearer ${token}` }
}).then((res) => {
  const { data, headers } = res
  const blob = new Blob([data], { type: headers['content-type'] })
  let dom = document.createElement('a')
  // URL.createObjectURL()方法会根据传入的参数创建一个指向该参数对象的URL. 这个URL的生命仅存在于它被创建的这个文档里. 新的对象URL指向执行的File对象或者是Blob对象.
  let url = window.URL.createObjectURL(blob)
  dom.href = url
  dom.download = 'xxx.xls'
  dom.style.display = 'none'
  document.body.appendChild(dom)
  dom.click()
  document.body.removeChild(dom)
  // URL.revokeObjectURL()方法会释放一个通过URL.createObjectURL()创建的对象URL. 当你要已经用过了这个对象URL,然后要让浏览器知道这个URL已经不再需要指向对应的文件的时候,就需要调用这个方法.
  window.URL.revokeObjectURL(url)
})
