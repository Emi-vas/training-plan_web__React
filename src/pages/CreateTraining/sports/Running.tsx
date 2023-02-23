import React, { useEffect, useState } from 'react';
//types
import { Running, TrainingInfo } from '../../../assets/types';
//compo
import Finish from '../../../components/createTraining/Finish';
import QuestionInput from '../../../components/createTraining/QuestionInput';
import QuestionSimple from '../../../components/createTraining/QuestionSimple';

interface Props {
    trainingInfo: TrainingInfo
    setTrainingInfo: (v: TrainingInfo) => void
}

const RunningCompo = ({ trainingInfo, setTrainingInfo }: Props) => {
    const [running, setRunning] = useState<Running>({ type: "", distance: "", time: '' })
    const [errMessage, setErrMessage] = useState('')
    const [finish, setFinish] = useState(false)

    const setType = (value: string) => {
        setRunning({ ...running, type: value })
    }

    const setDistance = (value: string) => {
        console.log(parseInt(value) )
        if(parseInt(value) > 0) {
            setRunning({ ...running, distance: value })
            setFinish(true)
        } else {
            setErrMessage('La distance renseigné est incorrect')
            setTimeout(() => {
                setErrMessage('')
            }, 3000)
        }
    }

    if(finish) {
        return (
            <Finish trainingInfo={{
                ...trainingInfo,
                running: {
                    distance: running.distance,
                    type: running.type,
                    time: ''
                }
            }} />
        )
    }

    return (
        <>
            {
                running.type == "" &&
                <QuestionSimple 
                    question='Quel type de séance ?'
                    choices={['Endurance', 'Haute intensité', 'Fractionné']}
                    onClick={setType}
                />
            }
            
            {
                (running.type == "Endurance" || running.type == "Haute intensité") &&
                <QuestionInput 
                    question='Quelle distance ?'
                    placeholder="Km"
                    onSubmit={setDistance}
                    errMessage={errMessage}
                />
            }
        </>
        
    );
};
export default RunningCompo;