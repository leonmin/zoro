import styled from 'vue-styled-components'

const logoProps = { img: String }
export const logo = styled('img', logoProps).attrs(props =>({src: props.img}))`
  height: 30px;
`
const fileProps = {}
export const file = styled('input', fileProps).attrs(() => ({type: 'file'}))`
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`

export const pptTitle = styled('div')`
  font-size: 16px;
  color: #474949;
`

export const pptWrap = styled('div')`
  width: 720px;
  overflow: hidden;
  background: #f5f5f5;
`

const pptViewProps = {
  page: Number,
}
export const pptView = styled('div', pptViewProps)`
  display: flex;
  margin-left: ${props => -props.page * 100 + '%'};
` 

const pptPageProps = {
  w: String
}
export const pptPage = styled('div', pptPageProps)`
  max-width: 720px;
  min-width: 720px;
  padding: 0 20px;
  box-sizing: border-box;
`

const pptButtonProps = {
  disabled: Boolean
}
export const pptButton = styled('span', pptButtonProps)`
  background: #fff;
  cursor: pointer;
  user-select: none;
  ${props => props.disabled && `color: #ccc;`};
`

