//jest
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//compo
import Button from "../Button";

const colors = {
    main: "",
    hover: "",
    form: ""
}

describe("Button test", ()=> {
    test("click on button can execute a function", () => {
        let isClick = false

        const functionClick = () => {
            isClick=true
        }

        render(<Button colors={colors} onclick={functionClick} txt={'Btn'}/>)
        const btn = screen.getByText('Btn')
        userEvent.click(btn)
        expect(isClick).toBe(true)
    })
})