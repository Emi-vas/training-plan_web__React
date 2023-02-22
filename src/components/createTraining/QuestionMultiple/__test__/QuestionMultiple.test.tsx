import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import QuestionMultiple from "../QuestionMultiple";

beforeEach(() => {
    render(
        <QuestionMultiple 
            onSubmit={()=>{}}
            question="a question for user"
            choices={['choice1', 'choice2', 'choice3']}
        />
    )
})

describe('Question multiple testing', () => {
    // render compo no user event
    test('render the question', () => {
        const question = screen.getByText(/a question for user/i)
        expect(question).toBeInTheDocument()
    })
    test('render choices', () => {
        const choices = screen.getAllByText(/choice/i)
        expect(choices.length).toBe(3)
    })
    test("don't display btn valider if there is no choice selected", () => {
        const btn = screen.queryByRole("button", { name: "Valider" })
        expect(btn).not.toBeInTheDocument()
    })

    //user event
    test('when user click on choice, it add active class', () => {
        const choice = screen.getByText(/choice1/i)
        act(() => {
            userEvent.click(choice)
        })
        const choiceRe = screen.getByText(/choice1/i)

        if(choiceRe.parentElement) {
            expect(choiceRe.parentElement.classList.contains('active')).toBe(true)
        } else {
            expect(true).toBe(false)
        }
    })
    test('when user click on active choice, it remove active class', () => {
        const choice = screen.getByText(/choice1/i)
        act(() => {
            userEvent.click(choice)
            
        })
        act(() => {
            userEvent.click(choice)
            
        })
        const choiceRe = screen.getByText(/choice1/i)

        if(choiceRe.parentElement) {
            expect(choiceRe.parentElement.classList.contains('active')).toBe(false)
        } else {
            expect(true).toBe(false)
        }
    })
    test('display btn when user selected a choice', () => {
        const choice = screen.getByText(/choice1/i)
        act(() => {
            userEvent.click(choice)
        })
        const btn = screen.getByRole('button', { name: 'Valider' })
        expect(btn).toBeInTheDocument()
    })
})