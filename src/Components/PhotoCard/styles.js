import Styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = Styled.article`
    min-height: 200px;
`

export const WrapperImg = Styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 000;
    position: relative;
    width: 100%;
`
export const Img = Styled.img`
    ${fadeIn()}
    box-shadow: 010px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

