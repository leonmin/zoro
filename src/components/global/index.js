import styled from 'vue-styled-components'

const logoProps = { img: String }
export const logo = styled('img', logoProps).attrs((props) => ({ src: props.img }))`
    height: 30px;
`
const fileProps = {}
export const file = styled('input', fileProps).attrs(() => ({ type: 'file' }))`
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
`

export const pptTitle = styled('div')`
    font-size: 18px;
    color: ${(props) => props.theme.color.primary};
`

export const pptWrap = styled('div')`
    width: 1000px;
    overflow: hidden;
    background: #f5f5f5;
`

const pptViewProps = {
    page: Number,
}
export const pptView = styled('div', pptViewProps)`
    display: flex;
    margin-left: ${(props) => -props.page * 100 + '%'};
`

const pptPageProps = {
    w: String,
}
export const pptPage = styled('div', pptPageProps)`
    max-width: 1000px;
    min-width: 1000px;
    padding: 0 20px;
    box-sizing: border-box;
`

const pptButtonProps = {
    disabled: Boolean,
}
export const pptButton = styled('span', pptButtonProps)`
    background: #fff;
    cursor: pointer;
    user-select: none;
    color: ${(props) => props.theme.color.primary};
    ${(props) => props.disabled && `color: ${props.theme.color.grey}};`};
`
