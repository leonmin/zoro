import styled from 'vue-styled-components'
export const pptWrap = styled('div')`
  width: 500px;
  min-width: 500px;
  overflow: hidden;
`
const pptViewProps = {
  page: Number,
}
export const pptView = styled('div', pptViewProps)`
  display: flex;
  margin-left: ${props => -props.page * 100 + '%'};

` 
export const pptPage = styled('div')`
  width: 500px;
  min-width: 500px;
` 
export const pptButton = styled('span')`
  background: #fff;
`
