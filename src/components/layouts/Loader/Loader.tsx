import styled from 'styled-components';

const Loader = () => {
    return (
        <Wrapper>
            <i className="fa-solid fa-spinner"></i>
        </Wrapper>
    );
};

export default Loader;



const Wrapper = styled.div`
    color: white;
    font-size: 4em;
    animation: rotate 1.5s infinite linear ;

    @keyframes rotate {
        to { transform: rotate(1turn) }
    }
`