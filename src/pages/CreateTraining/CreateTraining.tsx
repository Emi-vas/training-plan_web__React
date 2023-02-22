import React, { useEffect, useState } from 'react';
//styles
import { BtnLink, WrapperMain } from '../../styles/wrapper';
import { ChooseTypeWrapper } from './CreateTraining.styles';
//compo
import Footer from '../../components/layouts/Footer';
import QuestionMultiple from '../../components/createTraining/QuestionMultiple';
import QuestionSimple from '../../components/createTraining/QuestionSimple';
import RunningCompo from './sports/Running';
//types
import { TrainingInfo } from '../../assets/types';



const CreateTraining = () => {
    const [trainingInfo, setTrainingInfo] = useState<TrainingInfo>({
        date: [""],
        sport: "",
        running: null,
        crossfit: null,
        muscu: null
    }) 

    const handleSetDate = (values: string[]) => {
        setTrainingInfo({ ...trainingInfo, date: values })
    }

    const handleSetSport = (value: string) => {
        setTrainingInfo({ ...trainingInfo, sport: value })
    }

    useEffect(() => {
        console.log(trainingInfo)
    },[trainingInfo])

    return (
        <WrapperMain>
            {
                trainingInfo.date[0] == ""  &&
                <QuestionMultiple 
                    onSubmit={handleSetDate}
                    question='Quel jour(s) pour cet entrainement ?'
                    choices={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
                />
            }
            { 
                trainingInfo.sport == "" && trainingInfo.date[0] != "" &&
                <QuestionSimple 
                    onClick={handleSetSport}
                    question='Quel sport ?'
                    choices={['Course à pied', 'Musculation', 'Crossfit']}
                /> 
            }

                {/* TRAINING SPORT */}
            {
                trainingInfo.sport == "Course à pied" &&
                <RunningCompo 
                    trainingInfo={trainingInfo}
                    setTrainingInfo={setTrainingInfo}
                />
            }

            <Footer type={"dark"}/>
        </WrapperMain>
    );
};

export default CreateTraining;