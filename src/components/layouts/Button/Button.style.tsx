import styled from "styled-components";

interface ButtonProps {
    colorMain: string
    colorHover: string
}

export const ButtonStyle = styled.button<ButtonProps>`
    background: ${props => props.colorMain};
    color: white;
    font-size: 1.1em;
    padding: 10px 15px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;

    p {
        position: relative;
        z-index: 5;
        margin: 0;
    }

    &:hover {
        background: ${props => props.colorHover};
        cursor: pointer;
    }
`

interface FormProps {
    color: string
}

export const Form = styled.div<FormProps>`
    background: ${props => props.color};
    position: absolute;
    width: 70px;
    height: 70px;
    top: 0px;
    left: -20px;
    border-radius: 50%;

    animation: btnAnim 7s both infinite alternate linear;
    @keyframes btnAnim {
        0% {
            transform: translate(-30%, -30%);
        }
        100%{
            transform: translate(130%, 30%) scale(2);
        }
    }
`