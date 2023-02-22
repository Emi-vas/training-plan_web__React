
//styles
import { ChooseTypeWrapper } from "../../../pages/CreateTraining/CreateTraining.styles"
import { BtnLink } from "../../../styles/wrapper"


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
export default QuestionSimple