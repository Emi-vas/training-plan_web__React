import React, { useEffect, useState } from 'react';
//styles
import { BtnLink, WrapperMain } from '../../styles/wrapper';
import { ChooseTypeWrapper } from './CreateTraining.styles';
//compo
import Footer from '../../components/layouts/Footer';
import QuestionMultiple from '../../components/createTraining/QuestionMultiple';
import QuestionSimple from '../../components/createTraining/QuestionSimple';



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
                <QuestionSimple 
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