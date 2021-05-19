import Vue from 'vue'
import App from './App.vue'

import hljs from 'highlight.js'
hljs.configure({
  tabReplace: '  '
})
import 'highlight.js/styles/github.css'
Vue.directive('highlight', el => {
  const highlight = el.querySelectorAll('pre code')
  highlight.forEach(node => {
    hljs.highlightBlock(node)
  })
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
