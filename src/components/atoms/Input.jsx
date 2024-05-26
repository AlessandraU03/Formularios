import styled from "styled-components";

const InputStyled = styled.input`
    width: 85%;
    height: 30px;
    border: 1px gray solid;
    font-size: 16px;
    color: #000000;
    padding: 0 10px;
`;

function Input(props) {
    const handlerOnChange = (event)=>{
        props.fnVal(event.target.value)
    }
    return(
        <InputStyled type={props.type} placeholder={props.placeholder} value={props.val}
        onChange={handlerOnChange}/>
    )
}

export default Input;