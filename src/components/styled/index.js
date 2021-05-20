import styled from 'vue-styled-components'
const px = (v) => {
  if (v === undefined) return null
  if (typeof v === 'number') return v + 'px'
  return v
}
const pd = (v) => {
  return v
}
const flexProps = {
  main: String,
  cross: String,
  flex: Number,
  grow: Number,
  wrap: String,
}

export const flex = styled('div', flexProps)`
  display: flex;
  align-items: ${props => props.cross || 'center'};
  justify-content: ${props => props.main || 'flex-start'};
  flex: ${props => props.flex};
  flex-grow: ${props => props.grow};
  flex-wrap:  ${props => props.wrap};
`

export const row = styled(flex, flexProps)`
`

export const column = styled(flex, flexProps)`
  flex-direction: column;
`

export const center = styled(flex, flexProps)`
  justify-content: ${props => props.main || 'center'};
`

export const spacer = styled('div', {})`
  flex-grow: 1;
`

export const expand = styled(flex, {})`
  flex: 1;
`

const paddingProps = {
  p: [Boolean, Number, String]
}
export const padding = styled('div', paddingProps)`
  padding: ${props => pd(props.p)};
`

const sizeboxProps = {
  w: [Number, String],
  h: [Number, String],
}
export const sizebox = styled('div', sizeboxProps)`
  width: ${props => px(props.w)  || '100%'};
  height: ${props => px(props.h) || '100%'};
`

export const stack = styled('div', {})`
  position: relative;
`
const positionedProps = {
  w: [Number, String],
  h: [Number, String],
  l: [Number, String],
  t: [Number, String],
  r: [Number, String],
  b: [Number, String],
}
export const positioned = styled('div', positionedProps)`
  position: absolute;
  left: ${props => px(props.l)};
  top: ${props => px(props.t)};
  right: ${props => px(props.r)};
  bottom: ${props => px(props.b)};
  width: ${props => px(props.w)};
  height: ${props => px(props.h)};
`