import styled, { css } from 'vue-styled-components'
const media = css`
    @media only screen and (max-width: 1400px) {
        background: pink;
    }
`
const btnProps = {
    type: String,
}

export const btn = styled('div', btnProps)`
    cursor: pointer;
    background: ${(props) => props.theme.color[props.type || 'primary']};
    color: #fff;
    padding: 10px 20px;
    &:hover {
        background: #e1e1e1;
    }
    ${media}
    span {
    }
`
