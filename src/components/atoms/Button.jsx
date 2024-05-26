import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 60%;
    height: 50px;
    background-color: #03223f;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);

    &:hover {
        background-color: #25857d;
    }
`;

function Button({title, onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;