

const Input = (props) => {

    return (
        <label>{props.name}
            <input 
                type = {props.type}
                value={props.inputValue}
                name= {props.name}
                onChange={props.handleChange}
                placeholder = {props.placeholder}
                maxLength={props.maxLength}
                className="todo-input"
            />   
        </label>
    )
}

export default Input