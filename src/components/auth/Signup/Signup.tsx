//styles
import { Wrapper, SignBloc, Input } from '../Signin/Signin.styles';
import { COLORS } from '../../../assets/constants';
//compo
import Button from '../../layouts/Button';
import { useEffect, useState } from 'react';
//firebase
import { useAuth } from '../../../auth/UserContext';

interface Props {
    setDisplay: (v: string) => void
}

const Signup = ({ setDisplay }: Props) => {
    const { user, signUp, logOut } = useAuth()
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
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
        if(pass != pass2) {
            setErrPass('Les mots de passes ne sont pas identiques')
            return
        }
        console.log('serveur')
        signUp(mail, pass)
    }

    useEffect(() => {
        console.log(user)
    },[user])

    return (
        <Wrapper>
            <SignBloc>
                <h1>S'inscrire</h1>

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
                <Input 
                    placeholder="Répétez le mot de passe" 
                    type={'password'} 
                    err={errPass ? true : false} 
                    onChange={(e)=> {
                        setPass2(e.target.value)
                        setErrPass("")
                    }} 
                />
                { errPass && <p className='err'>{errPass}</p> }

                <Button 
                    onclick={handleClick} 
                    txt={"S'inscrire"}
                    colors={{main: COLORS.orange, hover: COLORS.orangeLight, form: COLORS.orangeDark}}
                />
                <p>
                    Vous avez un compte ? vous pouvez 
                    <span onClick={()=>setDisplay('signIn')}>vous conneter</span>
                </p>
            </SignBloc>
        </Wrapper>
    );
};

export default Signup;