import Vue from 'vue'
import * as global from './global/index'
import * as styled from './styled/index'
import * as lab from './lab/index'
const register = () => {
    const components = { ...global, ...styled, ...lab }
    Object.keys(components).forEach((name) => {
        Vue.component(name, components[name])
    })
}
register()
