import styled from "styled-components";
import { COLORS } from "../../../assets/constants";
import { IMAGES } from "../../../assets/images/images";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    background: url(${IMAGES.main});
    background-size: cover;
    background-repeat: no-repeat;
`

export const SignBloc = styled.div`
    color: ${COLORS.yellow};

`