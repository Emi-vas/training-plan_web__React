//react
import React from 'react';
import Footer from '../../components/layouts/Footer';
//styles
import { BtnLink } from '../../styles/wrapper';
import { WrapperMain } from '../../styles/wrapper';
//compo
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <WrapperMain>
            <BtnLink>
                <Link to={"/creer-entrainement"}>
                    <p>Créer un entrainement</p>
                </Link>
            </BtnLink>
            <BtnLink>
                <Link to={"/tableau-de-bord"}>
                    <p>Tableau de bord</p>
                </Link>
            </BtnLink>

            <Footer type={"dark"}/>
        </WrapperMain>
    );
};

export default Home;