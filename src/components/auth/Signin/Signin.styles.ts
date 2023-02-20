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
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(1, 1, 1, 0.3);
    padding: 30px;
    border-radius: 30px;

    button {
        margin-top: 20px;
    }
`
export const Input = styled.input`
    padding: 13px 7px;
    border-radius: 7px;
    margin: 10px 0;
    width: 200px;
`