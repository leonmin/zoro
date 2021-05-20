import Vue from 'vue'
import * as global from './global/index'
import * as styled from './styled/index'
const register = () => {
  const components = {...global, ...styled}
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })

}
register()