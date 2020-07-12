import Styled from 'styled-components'

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
    box-shadow: 010px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`
export const Button = Styled.button`
    display: flex; 
    align-items: center;
    padding-top: 8px; 
    background-color: transparent;
    border: 0;   
    & svg {
        margin-right: 4px;
    }
`
