import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
//compo
import Signup from "../Signup";

beforeEach(() => {
    render(<Signup setDisplay={()=>{}} />)
})

describe("Signup composent", ()=> {
    test("Err when pass are not the same", () => {
        const inputPass = screen.getAllByPlaceholderText(/mot de passe/i)
        const inputMail = screen.getByPlaceholderText(/mail/i)
        const btn = screen.getByRole("button", { name: /s'inscrire/i })
        //user tape deux mots de passes non identiques
        act(() => {
            userEvent.type(inputMail, 'uneadressemail@gmail.com')
            userEvent.type(inputPass[0], "motdepasse")
            userEvent.type(inputPass[1], "motdepasse-erreur")
            userEvent.click(btn)
        })
        const messageErr = screen.getByText(/Les mots de passes ne sont pas identiques/i)
        expect(messageErr).toBeInTheDocument()

    })
})