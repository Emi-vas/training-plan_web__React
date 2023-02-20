//jest
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
//compo
import Signin from "../Signin";

beforeEach(() => {
    render(<Signin setDisplay={()=>{}}/>)
})

describe('Signin Testing', () => {
    test('Err with empty mail', () => {
        const btn = screen.getByRole('button', { name: /se connecter/i})
        const err = screen.queryByText(/Merci de renseigner une adresse mail/i)
        expect(err).not.toBeInTheDocument()
        act(() => {
            userEvent.click(btn)
        });
        const errRe = screen.queryByText(/Merci de renseigner une adresse mail/i)
        expect(errRe).toBeInTheDocument()
    })

    test("When there is an err, change mail remove err", () => {
        const btn = screen.getByRole('button', { name: /se connecter/i})
        act(() => {
            userEvent.click(btn)
        });
        const err = screen.queryByText(/Merci de renseigner une adresse mail/i)
        expect(err).toBeInTheDocument()

        const inputMail = screen.getByPlaceholderText(/mail/i)
        act(() => {
            userEvent.type(inputMail, "uneadressemail@yahoo.fr")
        });
        const errRe = screen.queryByText(/Merci de renseigner une adresse mail/i)
        expect(errRe).not.toBeInTheDocument()
    })

    test('Err with empty pass', () => {
        //user type mail adress
        const inputMail = screen.getByPlaceholderText(/mail/i)
        userEvent.type(inputMail, 'uneadressemail@gmail.com')
        //user click on btn (se connecter)
        const btn = screen.getByRole('button', { name: /se connecter/i})
        const err = screen.queryByText(/Merci de renseigner un mot de passe/i)
        expect(err).not.toBeInTheDocument()
        act(() => {
            userEvent.click(btn)
        });
        const errRe = screen.queryByText(/Merci de renseigner un mot de passe/i)
        expect(errRe).toBeInTheDocument()
    })
})
