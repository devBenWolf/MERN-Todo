import styled from "styled-components"

const Input = (props) => {

    return (
        <Label>
            <input 
                type = {props.type}
                value={props.inputValue}
                name= {props.name}
                onChange={props.handleChange}
                placeholder = {props.placeholder}
                maxLength={props.maxLength}
                className="todo-input"
                
            />   
        </Label>
    )
}

const Label = styled.label`
    

    input {
        border-radius: 3px;
        padding: 0.5rem;
        font-size: 1.4rem;
    }
`

export default Input