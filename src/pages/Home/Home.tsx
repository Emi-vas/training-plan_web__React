//react
import React from 'react';
import Footer from '../../components/layouts/Footer';
//styles
import { BtnLink, Wrapper } from './Home.style';
//compo
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Wrapper>
            <BtnLink>
                <Link to={"/creer-entrainement"}>
                    <p>Creer un entrainement</p>
                </Link>
            </BtnLink>
            <BtnLink>
                <Link to={"/tableau-de-bord"}>
                    <p>Tableau de bord</p>
                </Link>
            </BtnLink>

            <Footer type={"dark"}/>
        </Wrapper>
    );
};

export default Home;