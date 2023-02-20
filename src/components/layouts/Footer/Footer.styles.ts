import styled from "styled-components";
import { COLORS } from "../../../assets/constants";

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 5;
    color: white;
    text-align: center;

    padding: 10px 0;
`
export const LinksBloc = styled.div`
    display: flex;
    justify-content: center;

    & .link {
        border-right: 1px solid white;
        padding: 3px 7px;
        margin: 0;
        &:hover {
            cursor: pointer;
            color: ${COLORS.yellow};
        }
    }
    & .link-last {
        border-right: none;
    }
`
