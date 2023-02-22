import React from 'react';
import { BtnLink } from '../../../styles/wrapper';
import { ChooseTypeWrapper } from '../CreateTraining.styles';

const Running = () => {

    const onClick = (value: string) => {
        console.log(value)
    }

    return (
        <QuestionSimple 
            question='Quel type de séance ?'
            choices={['Endurance', 'Haute intensité', 'Fractionné']}
            onClick={onClick}
        />
    );
};

export default Running;


interface PropsQuestion {
    question: string
    choices: string[]
    onClick: (v: string) => void
}

const QuestionSimple = ({ question, choices, onClick }: PropsQuestion) => {
    return (
        <>
            <h2>{ question }</h2>
            <ChooseTypeWrapper>
                {
                    choices.map((choice) => (
                        <BtnLink 
                            key={choice}
                            onClick={() => onClick(choice)}
                        >
                            <p>{choice}</p>
                        </BtnLink>
                    ))
                }
            </ChooseTypeWrapper>
        </>
    )
}