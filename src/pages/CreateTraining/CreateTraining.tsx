import React, { useEffect, useState } from 'react';
//styles
import { BtnLink, WrapperMain } from '../../styles/wrapper';
import { ChooseTypeWrapper } from './CreateTraining.styles';
//compo
import Footer from '../../components/layouts/Footer';
import Button from '../../components/layouts/Button';
import { COLORS } from '../../assets/constants';

type TrainingInfo = {
    date: string[],
    sport: string,
}

type Param = 'sport'
type ParamArray = 'date'

const CreateTraining = () => {
    const [trainingInfo, setTrainingInfo] = useState({
        date: [""],
        sport: "",
    }) 

    useEffect(() => {
        console.log(trainingInfo)
    },[trainingInfo])

    return (
        <WrapperMain>
            {
                trainingInfo.date[0] == ""  &&
                <QuestionMultiple 
                    setTrainingInfo={setTrainingInfo} 
                    trainingInfo={trainingInfo} 
                    param='date'
                    question='Quel jour(s) pour cet entrainement ?'
                    choices={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
                />
            }
            { 
                trainingInfo.sport == "" && trainingInfo.date[0] != "" &&
                <Question 
                    setTrainingInfo={setTrainingInfo} 
                    trainingInfo={trainingInfo} 
                    param='sport'
                    question='Quel sport ?'
                    choices={['Course à pied', 'Musculation', 'Crossfit']}
                /> 
            }

            <Footer type={"dark"}/>
        </WrapperMain>
    );
};

export default CreateTraining;

interface PropsQuestionMultiple {
    setTrainingInfo: (v: TrainingInfo) => void
    trainingInfo: TrainingInfo
    param: ParamArray
    question: string
    choices: string[]
}

const QuestionMultiple = ({ setTrainingInfo, trainingInfo, param, question, choices }: PropsQuestionMultiple) => {
    const [displayBtn, setDisplayBtn] = useState(false)
    let trainingInfoTemp: TrainingInfo = trainingInfo
    //let choicesSelected: string[] | [] = []
    const [choicesSelected, setChoicesSelected] = useState<string[]>([])

    const handleClick = (choice: string) => {
        if(choicesSelected.includes(choice)) {
            setChoicesSelected(
                choicesSelected.filter(c => c != choice)
            )
            return
        }

        setChoicesSelected([...choicesSelected, choice])
        setDisplayBtn(true)
       
        //
    }
    
    const submit = () => {
        trainingInfoTemp[param] = choicesSelected
        console.log(choicesSelected)
        setTrainingInfo({...trainingInfoTemp})
    }

    useEffect(() => {
        if(choicesSelected.length == 0) {
            setDisplayBtn(false)
        }
    },[choicesSelected])

    return(
        <>
            <h2>{ question }</h2>
            <ChooseTypeWrapper>
                {
                    choices.map((choice: string) => (
                        <BtnLink 
                            key={choice}
                            onClick={() => handleClick(choice)}
                            className={
                                choicesSelected.includes(choice) ? 'active' : ''
                            }
                        >
                            <p>{choice}</p>
                        </BtnLink>
                    ))
                }
            </ChooseTypeWrapper>

            { displayBtn && 
                <Button 
                    onclick={submit} 
                    txt={"Valider"}
                    colors={{main: COLORS.orange, hover: COLORS.orangeLight, form: COLORS.orangeDark}}
                /> 
            }
        </>
    )
}


interface PropsQuestion {
    setTrainingInfo: (v: TrainingInfo) => void
    trainingInfo: TrainingInfo
    param: Param
    question: string
    choices: string[]
}

const Question = ({ setTrainingInfo, trainingInfo, param, question, choices }: PropsQuestion) => {
    return (
        <>
            <h2>{ question }</h2>
            <ChooseTypeWrapper>
                {
                    choices.map((choice) => (
                        <BtnLink 
                            key={choice}
                            onClick={() => {
                                let trainingInfoTemp: TrainingInfo = trainingInfo
                                trainingInfoTemp[param] = choice.toLowerCase()
                                setTrainingInfo({...trainingInfoTemp})
                            }}
                        >
                            <p>{choice}</p>
                        </BtnLink>
                    ))
                }
            </ChooseTypeWrapper>
        </>
    )
}