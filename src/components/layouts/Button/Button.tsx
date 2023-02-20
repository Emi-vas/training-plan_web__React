import { ButtonStyle, Form } from "./Button.style";

interface Props {
    onclick: () => void
    txt: string
    colors: {
        main: string,
        hover: string,
        form: string
    }
}

const Button = ({ onclick, txt, colors }: Props) => {
    return (
        <ButtonStyle onClick={onclick} colorMain={colors.main} colorHover={colors.hover}>
            <p>{txt}</p>
            <Form color={colors.form} />
        </ButtonStyle>
    );
};

export default Button;