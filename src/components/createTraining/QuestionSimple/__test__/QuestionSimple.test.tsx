import { screen, render } from "@testing-library/react";
import QuestionSimple from "../QuestionSimple";

beforeEach(() => {
    render(
        <QuestionSimple 
            onClick={()=>{}}
            question={"a question for user"}
            choices={['choice', 'choice', 'choice']}
        />
    )
})

describe('test QuestionSimple component', () => {
    test('it render the question', () => {
        const question = screen.getByText(/a question for user/i)
        expect(question).toBeInTheDocument()
    })
    test('render the choices', () => {
        const choices = screen.getAllByText(/choice/i)
        expect(choices.length).toBe(3)
    })
})