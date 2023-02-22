import styled from "styled-components";
import { COLORS } from "../../../assets/constants";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    position: relative;
    padding: 70px;
   
    input {
        padding: 15px;
        font-size: 1.7em;
        width: 100px;
        border-radius: 50px;

    }

    button {
        margin-top: 30px;
    }

    & .err {
        background: ${COLORS.err};
        padding: 7px;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        animation: arriveRight 0.5s both;
    }

    @keyframes arriveRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
    }
`