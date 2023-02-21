//types
import { Param, TrainingInfo } from "../../../assets/types"
//styles
import { ChooseTypeWrapper } from "../../../pages/CreateTraining/CreateTraining.styles"
import { BtnLink } from "../../../styles/wrapper"


interface PropsQuestion {
    setTrainingInfo: (v: TrainingInfo) => void
    trainingInfo: TrainingInfo
    param: Param
    question: string
    choices: string[]
}

const QuestionSimple = ({ setTrainingInfo, trainingInfo, param, question, choices }: PropsQuestion) => {
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
export default QuestionSimple