//react
import { useEffect, useState } from "react"
//compo
import { ChooseTypeWrapper } from "../../../pages/CreateTraining/CreateTraining.styles"
import Button from "../../layouts/Button"
//styles
import { BtnLink } from "../../../styles/wrapper"
import { COLORS } from "../../../assets/constants"



interface PropsQuestionMultiple {
    onSubmit: (v: string[]) => void
    question: string
    choices: string[]
}

const QuestionMultiple = ({ question, choices, onSubmit }: PropsQuestionMultiple) => {
    const [displayBtn, setDisplayBtn] = useState(false)
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
                    onclick={()=> onSubmit(choicesSelected)} 
                    txt={"Valider"}
                    colors={{main: COLORS.orange, hover: COLORS.orangeLight, form: COLORS.orangeDark}}
                /> 
            }
        </>
    )
}
export default QuestionMultiple