import Vue from 'vue'
import App from './App.vue'

import { injectGlobal } from 'vue-styled-components'

injectGlobal`
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 18px;
  }
  pre code {
    font-size: 16px;
  }
  li, p {
    font-size: 18px;
  }
`
// 注册全局组件
import '@/components/register'

import hljs from 'highlight.js'
hljs.configure({
    tabReplace: '  ',
})
// 引入高亮样式 https://highlightjs.org/static/demo/
import 'highlight.js/styles/rainbow.css'
// import 'highlight.js/styles/github-gist.css'
// import 'highlight.js/styles/zenburn.css'
// import 'highlight.js/styles/monokai-sublime.css'
// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/atom-one-dark-reasonable.css'
// import 'highlight.js/styles/agate.css'
// import 'highlight.js/styles/tomorrow-night-eighties.css'

// 高亮指令
Vue.directive('highlight', (el) => {
    const highlight = el.querySelectorAll('pre code')
    highlight.forEach((node) => {
        hljs.highlightElement(node)
    })
})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
