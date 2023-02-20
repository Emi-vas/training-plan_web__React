//styles
import { Wrapper, SignBloc } from './Signin.styles';
import { COLORS } from '../../../assets/constants';
//compo
import Button from '../../layouts/Button';
import { useEffect, useState } from 'react';

const Signin = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(()=> {
        console.log(click)
    },[click])

    return (
        <Wrapper>
            <SignBloc>
                <h1>Se connecter</h1>

                <Button 
                    onclick={handleClick} 
                    txt={"Se Connecter"}
                    colors={{main: COLORS.orange, hover: COLORS.orangeLight, form: COLORS.orangeDark}}
                />
            </SignBloc>
        </Wrapper>
    );
};

export default Signin;