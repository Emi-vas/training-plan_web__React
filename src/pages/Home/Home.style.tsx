import styled from "styled-components";
import { COLORS } from "../../assets/constants";
//assets
import { IMAGES } from "../../assets/images/images";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    background: url(${IMAGES.main});
    background-size: cover;
    background-repeat: no-repeat;
`

export const BtnLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 20px;

    color: white;
    font-size: 1.5em;
    width: 270px;
    height: 100px;
    text-align: center;
    background: #00000093;
    border-radius: 20px;
    border: 1px solid ${COLORS.yellow};

    &:hover {
        //border: 2px solid ${COLORS.orange};
        color: ${COLORS.yellow};
    }

`
    