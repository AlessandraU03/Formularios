import styled from "styled-components";

const LabelStyled = styled.label`
    font-weight: 700;
    font-size: 15px;
    color: white;
    text-align: center;
`;

function Label(props) {
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;