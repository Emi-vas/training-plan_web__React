import React, { useEffect, useState } from 'react';
//assets
import { COLORS } from '../../../assets/constants';
//compo
import Button from "../../layouts/Button"
//styles
import { Wrapper } from './QuestionInput.styles';

interface Props {
    question: string
    placeholder: string
    onSubmit: (v: string) => void
    optional?: boolean
    errMessage?: string
}

const QuestionInput = ({ question, placeholder, onSubmit, optional, errMessage }: Props) => {
    const [value, setValue] = useState('')

    return(
        <Wrapper>
            <h2>{question}</h2>
            {
                optional && <p>optionnel, laissez vide si non renseigné</p>
            }
            <input
                type="text" 
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
           
            <Button 
                onclick={() => onSubmit(value)}
                txt={"Valider"}
                colors={{main: COLORS.orange, hover: COLORS.orangeLight, form: COLORS.orangeDark}}
            /> 
             {
                errMessage && <p className='err'>{errMessage}</p>
            }

            
        </Wrapper>
    )

};

export default QuestionInput;