import React from 'react';
import { useAuth } from '../../../auth/UserContext';
import { LinksBloc, Wrapper } from './Footer.styles';

interface Props {
    type: string
}

const Footer = ({ type }: Props) => {
    const { logOut } = useAuth()

    return (
        <Wrapper>
            <h2>Training Plan</h2>

            <LinksBloc>
                <a href="https://app.underdom.fr/" target={"_blank"} className="link">retour portfolio</a>
                <span className='link link-last' onClick={logOut}>se déconnecter</span>
            </LinksBloc>
        </Wrapper>
    );
};

export default Footer;