//styles
import { Wrapper, SignBloc, Input } from './Signin.styles';
import { COLORS } from '../../../assets/constants';
//compo
import Button from '../../layouts/Button';
import { useEffect, useState } from 'react';
//firebase
import { useAuth } from '../../../auth/UserContext';

interface Props {
    setDisplay: (v: string) => void
}

const Signin = ({ setDisplay }: Props) => {
    const { user, signIn } = useAuth()
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [errMail, setErrMail] = useState('')
    const [errPass, setErrPass] = useState('')

    const handleClick = () => {
        if(mail == "") {
            setErrMail('Merci de renseigner une adresse mail')
            return
        }
        if(pass == "") {
            setErrPass('Merci de renseigner un mot de passe')
            return
        }
        console.log('serveur')
        signIn(mail, pass)
    }

    useEffect(() => {
        console.log(user)
    },[user])

    return (
        <Wrapper>
            <SignBloc>
                <h1>Se connecter</h1>

                <Input 
                    placeholder="Mail" 
                    err={errMail ? true : false} 
                    onChange={(e)=> {
                        setMail(e.target.value)
                        setErrMail("")
                    }} 
                />
                { errMail && <p className='err'>{errMail}</p> }
                <Input 
                    placeholder="Mot de passe" 
                    type={'password'} 
                    err={errPass ? true : false} 
                    onChange={(e)=> {
                        setPass(e.target.value)
                        setErrPass("")
                    }} 
                />
                { errPass && <p className='err'>{errPass}</p> }

                <Button 
                    onclick={handleClick} 
                    txt={"Se Connecter"}
                    colors={{main: COLORS.orange, hover: COLORS.orangeLight, form: COLORS.orangeDark}}
                />
                <p>
                    Vous n'avez pas de compte ? vous pouvez 
                    <span onClick={()=>setDisplay('signUp')}>vous inscrire</span>
                </p>
            </SignBloc>
        </Wrapper>
    );
};

export default Signin;